var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbPass = 'password'
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : dbPass,
  database : 'petcodb'
});


/* GET habitat listing. */
router.get('/', function(req, res, next) {
  db.connect;       
  db.query('SELECT name FROM habitats_table', function (error, results, fields) {
  if (error) throw error;
  //console.log('The solution is: ', results[0].solution);
  res.json(results);
  });
});

// INSERT new habitat!
router.post('/insert', function(req, res, next) {
  var valuesToInsert = "('" + req.body.name + "','" + req.body.kingdom + "','" + req.body.shortdesc + "','" + req.body.longdesc + "','" + req.body.food + "','" + req.body.exercise + "','" + req.body.image_url + "')";       
  if (req.body.password == dbPass){
      db.connect;  
      db.query('INSERT INTO habitats_table (name,kingdom,shortdesc,longdesc,food,exercise,image_url) VALUES ' + valuesToInsert, function (error, results, fields) {
      if (error) throw error;
      res.json(results);
      });
  }
  else {
      console.log("Password is incorrect.");
  }    
});

// POST method route
router.post('/', function (req, res) {
  db.connect;
  db.query('SELECT * FROM habitats_table WHERE name = '+ "'" +req.body.name + "'", function (error, results, fields) {
  if (error) throw error;
  res.json(results);
  });
});

module.exports = router;
