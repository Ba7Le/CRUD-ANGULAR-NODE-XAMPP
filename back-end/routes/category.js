const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
// const { redisClient } = require('./redis');

// router.get('/get', auth.authenticateToken, (req, res, next) => {
//     const cacheKey = 'categories_data';
//     redisClient.get(cacheKey, (err, cachedData) => {
//         if (!err && cachedData) {
//             const parsedData = JSON.parse(cachedData);
//             return res.status(200).json(parsedData);
//         } else {
//             var query = "select * from category order by name";
//             connection.query(query, (err, results) => {
//                 if (!err) {
//                     const dataToCache = JSON.stringify(results);
//                     redisClient.setex(cacheKey, 3600, dataToCache); // 3600 là thời gian sống của cache (1 giờ)
//                     return res.status(200).json(results);
//                 } else {
//                     return res.status(500).json(err);
//                 }
//             });
//         }
//     });
// });

router.get('/get', auth.authenticateToken, (req, res, next) => {
    var query = "select * from category order by name";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.post('/add', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let category = req.body;
    query = "insert into category (name) value (?)";
    connection.query(query, [category.name], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Category added successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.patch('/update', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let product = req.body;
    var query = "update category set name = ? where id = ?";
    connection.query(query, [product.name, product.id], (err, results) => {
        if (!err) {
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Category id does not found" });
            }
            return res.status(200).json({ message: "Category updated successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:id', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    const categoryId = req.params.id;
    const query = "DELETE FROM category WHERE id = ?";
    connection.query(query, [categoryId], (err, results) => {
        if (!err) {
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "Category id does not found" });
            }
            return res.status(200).json({ message: "Category deleted successfully" });
        } else {
            return res.status(500).json(err);
        }
    })

})

module.exports = router;