const redis = require('redis');
const redisConf = {
    host: 'localhost',
    port: 6379
}
const redisClient = redis.createClient(redisConf);

redisClient.on("error", function (error) {
    console.error('Redis connect error', error);
});

redisClient.on("connect", function () {
    console.log('Redis connected');
});

function viewAllData() {
    redisClient.keys('*', function (err, keys) {
        if (err) {
            console.error('Error retrieving keys', err);
            return;
        }
        // Lấy tất cả dữ liệu từ các khóa (keys)
        redisClient.mget(keys, function (err, values) {
            if (err) {
                console.error('Error retrieving values', err);
                return;
            }
            // Đưa ra kết quả
            for (let i = 0; i < keys.length; i++) {
                console.log(keys[i] + ": " + values[i]);
            }
        });
    });
}

function deleteKeys(keysToDelete) {
    redisClient.del(keysToDelete, function (err, reply) {
        if (err) {
            console.error('Error deleting keys', err);
            return;
        }
        console.log(reply);
    });
}

module.exports = {
    redisClient,
    viewAllData,
    deleteKeys
};