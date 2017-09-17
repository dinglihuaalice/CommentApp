var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({
    extended: false
}); //var parseUrlencoded=bodyParser.urlencoded({extended:false})；一定要写在路由之前
var router = express.Router();


var connection = mysql.createConnection({

    host: 'localhost', //主机
    port: '8889', //端口号
    user: 'root', //用户名
    password: "root", //密码
    database: 'comments' //数据库的名字
});
connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
    var sql = 'SELECT * from `comment`';
    connection.query(sql, function (error, results, fields) {
//        console.log(results);
        res.json(results);
    });
});
router.post('/', function (req, res, next) {
//console.log(req.body);
    var commentsAuthor = req.body.author;
    var commentsContent = req.body.comment;
    var commentsId= req.body.id;
var length=0;
//console,log(req.body);
for (var key in req.body) {
    console.log(key);
     length++;
    var i=req.body[key];
     console.log(req.body[key]);
console.log(i);
}
console.log(i);
//console.log(length);
//console.log(req.body.id[id]);
if (length === 2) {



    var sql = `INSERT INTO comment ( comments_author, comments_content) VALUES ("${commentsAuthor}","${commentsContent}")`;
    connection.query(sql, function (error, results, fields) {
        //        console.log(results);
    });

    var sql1 = 'SELECT * from `comment`';
    connection.query(sql1, function (error, results, fields) {
        //        console.log(results);
        res.json(results);
    });


} else {
    var sql2 = `UPDATE comment SET comments_author="${commentsAuthor}",comments_content="${commentsContent}" WHERE comments_id=${i}`;

    connection.query(sql2, function (error, results, fields) {

        //        console.log(results);
    });

    var sql3 = 'SELECT * from `comment`';
    connection.query(sql3, function (error, results, fields) {
        //        console.log(results);
        res.json(results);
    });



}

});

router.post('/deleteComment',function(req,res,next){
console.log(req.body);
var commentsId=req.body.id;
var commentsAuthor=req.body.author;
var commentsContent=req.body.content;
    var sql = `DELETE FROM comment WHERE comments_id=${commentsId}`;

    connection.query(sql, function (error, results, fields) {

        //        console.log(results);
    });

    var sql1 = 'SELECT * from `comment`';
    connection.query(sql1, function (error, results, fields) {
        //        console.log(results);
        res.json(results);
    });


});

module.exports = router;
