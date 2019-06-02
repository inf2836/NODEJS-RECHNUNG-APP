var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-Parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('RechnungsApp.db');
var session = require('express-session');
var app = express();

app.set('views', path.join(__dirname, '../Client/views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Client/images')));
app.use(express.static(path.join(__dirname, '../Client')));

app.use(session({secret: "Fomen-Monique"}));
app.use(session({
  key: 'todo_generate_app_key',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));
 


/**
 * @api {get} /sign_up Request the sign_up page
 * @apiName Getsign_up
 * @apiGroup sign_up
 * @apiSuccess sign_up page.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PageNotFound"
 *     }
 */


 /**
 * @api {post} /sign_up insert a new user
 * @apiName postsign_up
 * @apiGroup sign_up
 * @apiSuccess succesfully created your account.
 * @apiErrorExample Error-Response:    
 *     {
 *       "error": "Username already taken"
 *     }
 */

 
app.route('/sign_up')
  .get(function(req,res){
    res.render('sign_up');
  })
  .post(function(req,res){
    const body = req.body;
  
    findOne(`SELECT * FROM Users WHERE username='${body.username}'`)
    .then( result => {
      if(result) {
        res.send({
          status: "nok", 
          message: "username already taken, please select a different username"
        });
      }
    else{
        insertOne(`"INSERT INTO Users (firstname, lastname, username, email, phone, password) VALUES('${body.firstname}', '${body.lastname}', '${body.username}', '${body.email}', '${body.phone}', '${body.password}')"`)
        .then( () => {
          req.session.User = body;
          res.send({
            status: "ok",
            message: "succesfully created your account, you will be redirected to the sign_in page"
          });
        })
      }
    });
  });

/**
 * @api {get} /sign_in Request the sign_in page
 * @apiName Getsign_in
 * @apiGroup sign_in
 * @apiSuccess sign_in page.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PageNotFound"
 *     }
 */

 /**
 * @api {post} /sign_in insert a new user
 * @apiName postsign_in
 * @apiGroup sign_in 
 * @apiSuccess succesfully login.
 * @apiErrorExample Error-Response:   
 *     {
 *       "error": "Username or passwordfalse"
 *     }
 * @apiSuccess (String) username username of the user
 * @apiSuccess (String) password password of the user
 */
app.route('/sign_in')
  .get(function(req,res){
    res.render('sign_in.jade');
  })
  .post(function(req,res){

    const body = req.body;

    findOne("SELECT * FROM Users WHERE username='"+body.username+"' AND password='"+body.password+"' ")
    .then( result => {
      req.session.User = result;
      res.send({
        status: result ? 'ok' : 'nok'
      })
    })
  });


/**
 * @api {get} /sign_out Request the sign_out page
 * @apiName Getsign_out
 * @apiGroup sign_out
 * @apiSuccess redirect to sign_in page.
 * @apiErrorExample Error-Response:
 *     
 *     {
 *       "error": " sign_in Page NotFound"
 *     }
 */


app.get('/sign_out', function(req, res){
  req.session.destroy(function(){
      console.log("user logged out.")
  });
  res.redirect('/sign_in');
});


/**
 * @api {post} /transactions create User transaction
 * @apiName posttransactions
 * @apiGroup transactions
 * @apiParam {String} transaction.
 * @apiParam {String} user.
 * @apiParam {number} Amount.
 * @apiSuccess {String} transaction transaction done.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       user == transactions.creator
 *     }
 */


 /**
 * @api {get} /transactions Request User transaction
 * @apiName Gettransactions
 * @apiGroup transactions
 * @apiParam {String} User.
 * @apiParam {number} username.
 * @apiSuccess {String} render die transaction page.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Transactions": "result"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "page NotFound"
 *     }
 */

app.route("/transactions")
  .post(function(req,res){

    let transaction = req.body;
    let users = transaction['users'];
    let amount = transaction.amount / users.length;

    users.forEach( user => {
      if( user != transaction.creator) {
        insertOne(`INSERT INTO Transactions (creator, receiver, amount, date, detail) VALUES('${transaction.creator}', '${user}','${amount}', '${transaction.date}', '${transaction.description}')`)
      }
    });
    res.send(transaction); 
  })
  .get(checkSignIn(), function( req, res){
    let User = req.session.User;
    let username = User.username;

    findMany(`SELECT * FROM Transactions WHERE creator='${username}' OR receiver='${username}'`)
    .then( result => res.render('transactions.jade', {
      transactions: result,
      User: User,
      Users: req.params.Users
    }))

  })



/**
 * @api {get} Admin Request Users name in Admin
 * @apiName Getadmin
 * @apiGroup admin
 * @apiParam {users} Users der Seite.
 * @apiSuccess {String} users List of the User.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": "Monique"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "pageNotFound"
 *     }
 */


app.route('/admin')
  .get( checkSignIn(), function(req,res){
    findMany("SELECT * FROM Users")
    .then( result =>
      res.render('admin.jade', {
        Users  : result,
        User: req.session.User
      })
    );

  });


/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiParam {Number} id Users unique ID.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "Fomen",
 *       "lastname": "Monique"
 *     }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

app.route('/users/:id')
  .get(function(req,res){
    var id = req.params.id;

    let user = null;
  })
  .post(function(req,res){
    const _id = req.params.id;
    const body = req.body;
    res.send({_id, body})
  })


app.use('/api/:data', function(req,res){
  const table = req.params.table;
  const query = req.query;

  findMany(`SELECT * FROM ${table} WHERE ${query}`)
  .then(result => res.send)
});

/**
 * @api {get} /summary Request  ein User transaction
 * @apiName Getsummary
 * @apiGroup summary
 * @apiParam {String} username der creator.
 *  A helper REST data, this is used for testing purposes only
 * An example will be http://localhost:3000/summary?username=Monique
 * The output will be the summary of transactions for the users
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
app.use("/summary", function(req, res){
  let username = req.query.username;

  findMany(`SELECT * FROM Transactions WHERE creator='${username}' OR receiver='${username}'`)
  .then( transactions => {
    const before = transactions;
    const after = parseTransactions(before, username);
    res.send({before,after})
  })

})



/** The home/main view of the app,
 * This page displays the user's panel
 * 
 */
app.use('/', checkSignIn(), function(req,res) {

  let username = req.session.User.username;

  findMany(`SELECT * FROM Transactions WHERE creator='${username}' OR receiver='${username}'`)
  .then( result => {
    req.session.transactions = parseTransactions(result, username); 
    return findMany("SELECT username FROM Users")
  })
  .then( users => {
    req.session.Users = users;
    let data = {
      Transactions: req.session.transactions,
      User: req.session.User,
      Users: req.session.Users
    }
    res.render('home.jade', data)
  })
});

/** This middleware checks that the User is logged in,
 * That is, the req.session.User is defined,
 * if not the app redirects to the /sign_in view where the user will then sign in
 * 
 */
function checkSignIn(){
  return function(req, res, next) {
    // req.session.User = {
    //   _id: "1234567890",
    //   username: "fabrigeas",
    //   password: "1111",
    // }
    if (req.session && req.session.User) {
      return next();
    } 
    else {
       res.redirect('/sign_in');
     }
  }
}

/**
 * catch 404 and forward to error handler
 */
app.use(function(req, res, next) {
  next(createError(404));
});



/**
 * error handler
 * set locals, only providing error in development
 * render the error page
 */
app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});



/** 
 * A function that reads data from SQLITE Database and returns an Array of rows promis 
 * @param {*} query 
 */
function findMany(query){
  return new Promise( (resolve, reject) => {
    db.all(query, [], function(err, result){
      if(err)
        reject(err)
      resolve(result);
    });
  });
}



/** 
 * This function executes a select query in the database and returns the first row
 * @param {sql Query} query 
 */
function findOne(query){
  return new Promise( (resolve, reject) => {
    db.get(query, [], function(err, result){
      if(err)
        reject(err)
      resolve(result);
    });
  });
}



/** 
 * A function that Inserts into the SQLITE Database and returns a promis 
 * @param {*} query 
 */
function insertOne(query){
  return new Promise( (resolve, reject) => {
    db.run(query, err => {
      reject(err)
    });
    resolve();
  });
}



/** 
 * The main login of the application 
 * @param {Array} transactions An array containing all the transactions concerning @username
 * @param {*} username The person concerned
 * This function is the main Logic and the heart of the app.
 * The function takes an array of all transactions in which @username is involved, then summarises it 
 * by first of all grouping similar transactions together, then summing them.
 * An example will be input array
 * [
 *  {A,B, 100}: This means B owes 100 to A, or A gave/payed 100 to B
 *  {A,B, 100}: // same here
 *  {B,A, 50}: Here B payed/gave 100 to A in other words, B payed part of the debt 50 to A 
 *  {A,C, 10}
 *  {A,c, 20}  and so on
 *  {D,A, 100}  and so on
 *  {D,A, 100}  and so on
 * ]
 * given @username = 'A',
 *  the output of this function will be
 * [
 *  {A,B, 150},
 *  {A,C, 30},
 *  {A,D, -200},
 * ]
 * 
 * This is then displayed in the home view
 */
function parseTransactions(transactions, username){
    
  const result = transactions.length < 2 ? transactions : transactions.reduce( (accumulator, next) => {
      let position = contains(accumulator, next);
      
      if( position != -1)
        accumulator = compute(accumulator, next, position);
      else
        accumulator = append(accumulator, next);
      return accumulator;
    });

    function contains(arr, next){
      arr = Array.isArray(arr) ? arr : [arr]
      
      for( let i =0; i < arr.length; i++ ){
        let receiver = arr[i].receiver;
        if( receiver === next.receiver || receiver === next.creator ){
          return i;
        }
      }
      return -1; 
    }
    function compute(arr, next, position){

      if( ! Array.isArray(arr) ){
        let isDebit  = arr.creator === username;
        let receiver = isDebit ? arr.receiver : arr.creator;
        let value = parseInt(arr.amount);
        let amount = isDebit ? value : value * -1;

        let temp = {
          creator: username,
          receiver: receiver,
          amount: amount
        }
        arr = [temp]
      }

      let isDebit  = next.creator === username;
      let value = parseInt(next.amount);
      let amount = isDebit ? value : value * -1;
      let item = arr[position];

      item.amount =  parseInt(item.amount) + amount;
      
      
      return arr;
    }
    function append(arr, next){

      if( ! Array.isArray(arr) ){
        let isDebit  = arr.creator === username;
        let receiver = isDebit ? arr.receiver : arr.creator;
        let value = parseInt(next.amount);
        let amount = isDebit ? value : value * -1;

        let item = {
          creator: username,
          receiver: receiver,
          amount: amount
        }
        arr = [item]
      }
      
      let isDebit = next.creator === username;
      let receiver = isDebit ? next.receiver : next.creator;
      let value = parseInt(next.amount);
      let amount = isDebit ? value : value * -1;
      let item = {
        creator : username,
        receiver : receiver,
        amount : amount
      }
      arr.push( item)
      return arr;
    }
    return result;
}
module.exports = app;
