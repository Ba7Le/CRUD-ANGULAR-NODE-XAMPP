require('dotenv').config();
const { response } = require('express');
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
        if (err)
            res.sendStatus(403);
        res.locals = response;
        next();
    })
}

module.exports = { authenticateToken: authenticateToken }