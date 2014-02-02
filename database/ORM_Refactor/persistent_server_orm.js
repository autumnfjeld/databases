// var mysql = require('mysql');
var Sequelize = require("sequelize");
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
// var dbConnection = mysql.createConnection({
//   user: "root",
//   password: "plantlife",
//   database: "chatHack"
// });

//set up sequelize connection with mysql database
var sequelize = new Sequelize("chathack", "root", "plantlife");

//set up structure/type of data to send to database
// creates a model which will later interact w/ db
var Messages = sequelize.define('Messages', {
  text:      Sequelize.STRING,
  timestamp: Sequelize.STRING,
  username:  Sequelize.STRING,
  room:      Sequelize.STRING
});

// sync will create db table if doesn't exit or just sync the new data into db
exports.insert = function(data, callback){
  Messages.sync().success(function(){
    //instantiate an object and save it
    var newMsg = Messages.build(data);
    newMsg.save().success(function(result){
      callback(result);
    });
  });
};

exports.select = function(callback){
  Messages.findAll().success(function(messages) {
    // This function is called back with an array of matches from the db.
    callback(messages);
    }).fail(function(err)
      { console.log('data not found');
  });
};

exports.update = function(){
};

exports.create = function(){
};

var message = {
  text:      'a text',
  timestamp: '10 minutes ago',
  username:   'autum',
  room:       'main'
};
