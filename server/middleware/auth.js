// 后端处理前端请求头,返回token
module.exports = options => {
    const jwt = require("jsonwebtoken");
    const AdminUser = require("../models/AdminUser");
    const assert = require('http-assert');
    return async (req, res, next) => {
        // 获取前端传递的请求的请求头文件中得到token
        // 这里需要将authorization中的"Bearer "去除掉来获取完整的token
        // const token = req.headers('Authorization').replace('Bearer ', '');
        const token = String(req.headers.authorization || '').split(' ').pop();
        assert(token, 401, "请先登录");
        // 验证token是否合法
        const { id } = jwt.verify(JSON.parse(token), req.app.get("secret"));
        assert(id, 401, "请先登录");
        // 利用合法token查询数据库内的对应id的用户
        req.user = await AdminUser.findById(id);
        assert(req.user, 401, "请先登录");
        await next();
    }
}