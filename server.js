//import declear

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const axios = require("axios");
const { localsName } = require("ejs");
const fs = require("fs");
const multer = require("multer");

//expoedt function
const date = require(__dirname + "/date.js");

//app used
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const myLogger = function (req, res, next) {
  req.requestTime = req.socket.remoteAddress;
  // console.log('LOGGED')
  next();
};
app.use(myLogger);

//upload
var testok = "";

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

//root
app.get("/", function (req, res) {
  res.render("signup", { bg: bg });
});

//bg
function bg() {
  let images = [

  ];

  const bg = images[Math.floor(Math.random() * images.length)];

  return bg;
}
setInterval(bg, 10000);
// var bg = "https://media.giphy.com/media/kTcJPBxUqZEAM/giphy.gif";
var bg = bg();

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

// function logs(strs){
//   console.log(strs)
// }

app.get("/info", function (req, res) {
  res.render("collection_dashboard", { posts: posts, bg: bg });
});
// console.log(siva11)

app.post("/uploadpic", upload.single("finpic"), function (req, res) {
  let name = gobal_topic;
  let simgs = req.file.filename;
  // console.log(name)
  // console.log(simgs)
  let gg = {
    name: name,
    imgs: [],
  };
  // console.log(pic.length)
  let ind = -1;
  for (let index1 = 0; index1 < pic.length; index1++) {
    // console.log("log:"+index1)
    // console.log("name:" + pic[index1].name)
    // console.log("aname:" + name)
    if (pic[index1].name == name) {
      ind = index1;
      break;
    } else {
      ind = -1;
    }
  }
  if (ind == -1) {
    gg.name = name;
    gg.imgs.push(simgs);
    pic.push(gg);
  } else {
    pic[ind].imgs.push(simgs);
  }
  // console.log(pic)
  res.redirect("/posts/:topic");
});
app.post(
  "/info",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "file", maxCount: 8 },
  ]),
  function (req, res) {
    const post = {
      fname: req.body.first_name,
      instagram: req.body.Instagram,
      uname: req.body.uname,
      city: req.body.city,
      rel: req.body.relationship,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.Address,
      status: req.body.status,
      facebook: req.body.Facebook,
      descretion: req.body.descretion,
      filename: testok,
    };
    posts.push(post);

    //   console.log(post)

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

    res.redirect("/info");
  }
);

app.get("/todo", (req, res) => {
  var day = date.day();

  res.render("list", { listTitle: day, additem: items, bg: bg });
});
app.post("/todo", (req, res) => {
  o = req.body.list;
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/todo");
});

function getpic(gobal_topic) {
  let temp = ["img"];
  console.log("leng : " + pic.length);
  for (let index = 0; index < pic.length; index++) {
    // console.log([index]);
    if (pic[index].name == gobal_topic) {
      let temp = pic[index].imgs;
      // console.log(temp)
      return temp;
    }
  }
  return temp;
}

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
});
// fs.readFile('./data.json','utf-8',(err,siva) =>{
//     console.log(siva)
// })

app.listen(port, function (req, res) {
  console.log("server is up");
});

