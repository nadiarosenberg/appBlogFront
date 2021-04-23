var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const con = require('../database');
const bodyParser = require('body-parser');


/*-------------------------------- HOME PAGE -----------------------------*/
/*GET posts */
router.get('/api/list/', function(req,res, next){
      con.query('SELECT * FROM posts_table ORDER BY post_date DESC', function(err, rows, fields){
          if(err){
             console.log('Error getting posts');
          }else{
             res.json(rows);
          }
      });
});

/*GET posts ver. 2 */
router.get('/api/', function(req,res, next){
      con.query('SELECT * FROM posts_table ORDER BY post_date DESC', function(err, rows, fields){
          if(err){
             console.log('Error getting posts');
          }else{
             res.json(rows);
          }
      });
});

/*GET post ver1 
router.get('/api/:id', function(req,res, next){
      const {id} = req.params;
      con.query('SELECT * FROM posts_table WHERE id = ?', [id], (err, rows, fields)=>{
          if(err){
             console.log('Post does not exist');
          }else{
             res.send(200);
          }
    });
});*/

/*GET post ver2 */
router.get('/api/filter/:id', function(req,res, next){
   const {id} = req.params;
      con.query('SELECT * FROM posts_table WHERE id = ?', [id], function(err, rows, fields){
          if(err){
             console.log('Post does not exist');
          }else{
             res.send(200);
          }
    });
});

/*Delete post*/
router.delete('/api/:id', (req,res)=>{
      const {id} = req.params;
      con.query('DELETE FROM posts_table WHERE id = ?', [id], (err, rows, fields)=>{
          if(err){
             console.log('Error deleting post');
          }else{
             res.send(200);
          }
      });
});

/*Edit post */
router.put('/api/:id', (req, res) => {
      const {id} = req.params;
      const post_title = req.body.post_title;
      const post_content = req.body.post_content;
      const post_date = req.body.post_date;
      const post_type = req.body.post_type;
      const post_image = req.body.post_image;
    con.query('UPDATE posts_table SET post_title=?,post_content=?,post_date=?,post_type=?, post_image=? WHERE id = ?', [post_title, post_content, post_date, post_type, post_image, id], (err, result) => {
          if(err){
             console.log('Error editing post');
          }else{
             res.send(200);
          }
    });
});

/*----------------------------------- FORM PAGE ---------------------------*/
/* POST form */
router.post('/api/import/', (req,res,next)=>{
    const post_title = req.body.post_title;
    const post_content = req.body.post_content;
    const post_date = req.body.post_date;
    const post_type = req.body.post_type;
    const post_image = req.body.post_image;
    var sql = "INSERT INTO posts_table(post_title,post_content,post_date, post_type, post_image) VALUES (?,?,?,?,?)";
    con.query(sql, [post_title, post_content, post_date, post_type, post_image], (err, result)=>{
         if (err) throw err;
         console.log("New post is online!");
         res.send(200);
    });
});


module.exports=router;