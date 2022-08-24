const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    // 英雄名
    name: { type: String },
    // 英雄头像
    icon: { type: String },
    // 英雄称号
    title: { type: String },
    // 英雄类型
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
    // 英雄评分
    scores: {
        // 难度
        difficult: { type: Number },
        // 技能
        skills: { type: Number },
        // 攻击
        attack: { type: Number },
        // 生存
        survive: { type: Number },
    },
    // 英雄的技能
    skills: [{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String }
    }],
    // 英雄的顺风出装
    items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }],
    //  英雄的逆风出装
    items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }],
    // 使用技巧
    usageTips: { type: String },
    // 对抗技巧
    battleTips: { type: String },
    // 团战思路
    teamTips: { type: String },
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
        description: { type: String }
    }]
});

module.exports = mongoose.model("Hero", schema)