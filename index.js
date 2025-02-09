const bp = require("body-parser");
const ph = require("password-hash");
const uniqId = require("uniqid");
const session = require("express-session");
const express = require("express");
const app = express();
const ejs = require("ejs");
const port=3000;
app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(
  session({
    secret: "food donation app",
    resave: true,
    saveUninitialized: true,
  })
);
app.listen(3000, () => {
    console.log("Server runs on port 3000");
});
app.get("/", function (req, res) {
  res.render("intro.ejs");
});
app.get("/signup", function (req, res) {
    res.render("register.ejs");
});
app.get("/orphreg", function (req, res) {
    res.render("orphreg.ejs",{sucState: false, errState: false });
});
app.get("/donRegister", function (req, res) {
    res.render("donreg.ejs",{sucState: false, errState: false });
});
app.get("/orglogin", function (req, res) {
    res.render("orphlog.ejs", {errState: false });
});
app.get("/donlogin", function (req, res) {
    res.render("donlog.ejs", { errState: false });
});
app.get("/skip",function(req,res){
    res.render("fornow.ejs");
});
app.get("/more1",function(req,res) {
    res.render("more1.ejs");
});
app.get("/more2",function(req,res) {
    res.render("more2.ejs");
});
app.get("/more3",function(req,res) {
    res.render("more3.ejs");
});
app.get("/more4",function(req,res) {
    res.render("more4.ejs");
});
app.get("/more5",function(req,res) {
    res.render("more5.ejs");
});
app.get("/more6",function(req,res) {
    res.render("more6.ejs");
});
app.get("/more7",function(req,res) {
    res.render("more7.ejs");
});
app.get("/more8",function(req,res) {
    res.render("more8.ejs");
});