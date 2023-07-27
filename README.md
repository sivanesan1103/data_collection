# data_collection
Our data collection website offers an intuitive platform for securely gathering diverse data types from contributors worldwide, empowering users with powerful analysis and visualization tools for informed decision-making.

 ##features
  1. Simple sign in page
  2. Form for upload data (name,number,address,profile pic,relationship status,City,gender,email,status,Twitter,Instagram,Facebook,Descretion)
  3. Card pages for all users delails
  4. upload photos
  5. todo list

## node js packages

```
const express = require("express"); //express
const bodyParser = require("body-parser"); //body-parser 
const _ = require("lodash"); //formate
const axios = require("axios"); //api call
const { localsName } = require("ejs");
const fs = require("fs"); //filesystem 
const multer = require("multer"); //local data upload

const app = express(); //recreat app 
app.set("view engine", "ejs"); //ejs file view
app.use(express.static("public")); // static file where save css and js
app.use(bodyParser.urlencoded({ extended: true })); //parser
```


## middele ware

```
const myLogger = function (req, res, next) {
  req.requestTime = req.socket.remoteAddress;
  // console.log('LOGGED')
  next();
};
app.use(myLogger);
```

##date
date export file save this as js file
```
exports.day= function (){
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = today.toLocaleDateString("en-US", options)
    return day
}
```
```
const date = require(__dirname + "/date.js");
```
## listen
```
app.listen(port, function (req, res) {
  console.log("server is up");
});

```
## root route get
```
app.get("/", function (req, res) {
  res.render("signup", { bg: bg });
});
```
## root route get
```
app.post("/", function (req, res) {
  var user_name = req.body.username;
  var password = req.body.password;
  if (password === "siva") {
    res.render("collection_uploder", { bg: bg });
    // res.render("collection_uploder")
  } else {
    if (i < 3) {
      res.render("signup", { bg: bg });
      i++;
    } else {
      res.render("signup", { contactContentss: signupFail });
    }
  }
});
```
## fs
```
   var savedata = (data, file) => {
      fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
        }
      });
    };

    savedata(posts, "data.josn");
```
## creat new post
```
app.get("/posts/:topic", (req, res) => {
  var test = _.lowerCase(req.params.topic);
  gobal_topic = test;
  kimgs = getpic(gobal_topic);
  posts.forEach((post) => {
    if (test === _.lowerCase(post.fname)) {
      res.render("content", {
        title: post.fname,
        twitter: post.uname,
        instagram: post.instagram,
        city: post.city,
        rel: post.rel,
        Profile: post.Profile,
        gender: post.gender,
        phone: post.phone,
        email: post.email,
        address: post.address,
        status: post.status,
        facebook: post.facebook,
        descretion: post.descretion,
        bg: bg,
        Profile: post.filename,
        album: kimgs,
      });
    }
  });
```
## multer 
```
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    var filename = file.originalname;
    testok = filename;

    return cb(null, filename);
  },
});
const upload = multer({ storage });
var port = 3000;
let posts = [];
var items = [];
var gobal_topic = "";
let i = 0;
let pic = [
  {
    name: "siva",
    imgs: ["img1", "img2"],
  },
];

```
## node js install
  1.npm init
  2.npm i
  3.nodemon
  





