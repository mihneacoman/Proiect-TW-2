var express = require("express");
var app = express();

const session = require("express-session");
const formidable = require("formidable");
const fs = require("fs");
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use('/salveaza',express.urlencoded({extended:true}));

app.use(
  session({
    secret: "abcdefg",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.render("login");
});

app.post("/login", function (req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    const user = checkUser(fields.username, fields.parola);
    if (user) {
      req.session.username = user;
      res.redirect("prezentare");
    } else {
      req.session.username = false;
    }
  });
});

app.get("/prezentare", function (req, res) {
  if (req.session.username) {
    res.sendFile(__dirname+"/prezentare.html");
  } else {
    res.redirect("/");
  }
});

app.get("/samoyed", function (req, res) {
  if (req.session.username) {
    res.sendFile(__dirname+"/samoyed.html");
  } else {
    res.redirect("/");
  }
});

app.get("/labrador", function (req, res) {
  if (req.session.username) {
    res.sendFile(__dirname+"/labrador.html");
  } else {
    res.redirect("/");
  }
});

app.get("/pomeranian", function (req, res) {
  if (req.session.username) {
    res.sendFile(__dirname+"/pomeranian.html");
  } else {
    res.redirect("/");
  }
});

app.get("/proces_cumparare", function (req, res) {
  if (req.session.username) {
    res.sendFile(__dirname+"/proces_cumparare.html");
  } else {
    res.redirect("/");
  }
});

app.get("/reviewuri", function (req, res) {
  if (req.session.username) {
    res.sendFile(__dirname+"/reviewuri.html");
  } else {
    res.redirect("/");
  }
});

app.get("/logout", function (req, res) {
  res.render("logout", { nume: req.session.username });
});

app.get("/signout", function (req, res) {
  req.session.username = false;
  res.redirect("/");
});

function checkUser(username, password) {
  if (fs.existsSync("users.json")) {
    const data = fs.readFileSync("users.json");
    const users = JSON.parse(data);

    for (i in users) {
      if (
        users[i].username === username[0] &&
        users[i].parola === password[0]
      ) {
        return username[0];
      }
    }
  }

  return false;
}

app.post('/salveaza',function(request,response){
  response.status(200);
  console.log(response.status);
  response.write("<html><body><p> " + request.body.nume + " "
                 + request.body.email + " " + request.body.rasa 
                 + " </p> </body></html>");
  response.end();
  if (fs.existsSync("cumparare.json")){
     var date = fs.readFileSync("cumparare.json");
     ob = JSON.parse(date);
  }
  else
     ob = [];
  ob.push(request.body);
  fs.writeFileSync("cumparare.json",JSON.stringify(ob));
});

app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname+"/eroare.html");
});

app.listen(5000, () => {
  console.log("App is running on port 5000!");
});
