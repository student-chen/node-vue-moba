// 处理前端发送的请求，隶属于那个model，做公用数据接口处理
module.exports = options => {
    // 获取类名转换中间件
    return async (req, res, next) => {
        const parseModelName = require('inflection').classify;
        // 小写复数形式转为单数大写类名形式
        const modelName = parseModelName(req.params.resource);
        // 挂载 require 的 model 使其能在下一步中以 req.Model 直接使用
        req.Model = require(`../models/${modelName}`);
        next();
    }
}