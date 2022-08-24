module.exports = app => {

    const express = require("express");
    const router = express.Router({ mergeParams: true });
    const bcrypt = require("bcryptjs");
    const jwt = require("jsonwebtoken");
    const assert = require('http-assert');
    const AdminUser = require("../../models/AdminUser");
    const privateKey = app.get("secret");
    const authMiddleWare = require("../../middleware/auth");
    const resourceMiddleWare = require("../../middleware/resource");

    // const Category = require("../../models/Category")

    // 创建分类
    router.post("/", async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });

    // 修改分类
    router.put("/:id", async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    });

    // 删除分类
    router.delete("/:id", async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({ success: true });
    });

    // 获取列表
    router.get("/", async (req, res) => {
        const queryOptions = {};
        if (req.Model.modelName === "Category") {
            queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOptions);
        res.send(items);
    });

    //分类详情
    router.get("/:id", async (req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model);
    });

    // 处理公用接口
    app.use('/admin/api/rest/:resource', resourceMiddleWare(), authMiddleWare(), router);

    // 上传图片的接口
    const multer = require("multer");
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })
    app.post('/admin/api/upload', authMiddleWare(), upload.single("file"), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file);
    });

    // 登录路由
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body;

        // 1.根据用户名找用户
        const User = await AdminUser.findOne({ username: username }).select('+password');
        assert(User, 422, "用户不存在");
        //if (!User) { return res.status(422).send({ message: "用户不存在" }); }

        // 2.校验密码
        const isTrue = bcrypt.compareSync(password, User.password);
        assert(isTrue, 422, "密码错误")
        //if (!isTrue) { return res.status(403).send({ message: "密码错误" }); }

        // 3.返回前端token
        const token = jwt.sign({ id: User._id }, privateKey);
        res.send({
            token: token,
            userInfo: {
                id: User._id,
                username: User.username,
                avatar:User.avatar
            }
        });
    });

    // 处理请求错误函数
    app.use(async (err, req, res, next) => {
        res.status(err.status || 500).send({ message: err.message });
    });
}