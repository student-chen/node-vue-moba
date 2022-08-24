const express = require("express");
const cors = require("cors");

const app = express();

app.set('secret', 'secretKey');

app.use(cors())
// limit: '2100000kb' 将数据接收大小扩大至2M
app.use(express.json({ limit: '2100000kb' }));
// express托管当前项目的静态文件
app.use('/uploads', express.static(__dirname + '/uploads'))

require("./db/db")(app);
require("./routes/admin")(app);

const port = 3000;
app.listen(port, () => {
    console.log("http://localhost:3000");
});