const express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
let friends = ["Steve","Bob","Derek","Cole","Drew"];

app.get("/", function(req,res){
res.render("home");
});

app.get("/friends",function(req,res){

res.render("friends", {friends: friends});
  });

app.post("/addfriend", function(req,res){
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
res.redirect("/friends");
});





app.listen(3000,function(){
console.log("Server Started!!!");
});
