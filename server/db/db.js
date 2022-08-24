module.exports = app => {

    const mongoose = require("mongoose")
    // 建立数据库连接mongodb
    mongoose.connect("mongodb://127.0.0.1:27017/node-vue-moba", { useNewUrlParser: true })
}