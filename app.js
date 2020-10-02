const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname + "/date.js");

const app = express();


const items = ["Buy Food","Cook Food","Eat Food"];
const workItems=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  // let today = new Date();
  // let currentDay = today.getDay();
  // let day = "";

  // if (currentDay===6 || currentDay===0){
  //   day="Weekend";
  // }else{
  //   day="Weekday";
  // }
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday"
  //     break;
  //   case 1:
  //     day = "Monday"
  //     break;
  //   case 2:
  //     day = "Tuesday"
  //     break;
  //   case 3:
  //     day = "Wednesday"
  //     break;
  //   case 4:
  //     day = "Thursday"
  //     break;
  //   case 5:
  //     day = "Friday"
  //     break;
  //   case 6:
  //     day = "Saturday"
  //     break;
  //   default:
  //   console.log("Error!");
  // }

  const day=date.getDate();

  res.render('list', {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
  const item = req.body.newItem;

  if (req.body.list==="Work"){
    workItems.push(item);

    res.redirect("/work");
  }else{
    items.push(item);

    res.redirect("/");
  }

});

app.get("/work",function(req,res){
  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  });
});



app.listen(3000, function() {
  console.log("Server started");
});
