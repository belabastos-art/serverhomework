//import express
let express = require("express");

let app = express();

let p1data = {
  "days": {
    "1": "To find", "2": "To rescue", "3": "To learn", "4": "To heal",
    "5": "To explore", "6": "To try", "7": "To win", "8": "To loose",
    "9": "To start", "10": "To create", "11": "To imagine", "12": "To bake",
    "13": "To tickle", "14": "To kiss", "15": "To share", "16": "To protect",
    "17": "To listen", "18": "To reveal", "19": "To code", "20": "To build",
    "21": "To investigate", "22": "To write", "23": "To cuddle", "24": "To befriend",
    "25": "To melt", "26": "To dance", "27": "To compose", "28": "To research",
    "29": "To break", "30": "To behold", "31": "To read"
  },
  "letters": {
    "A": "an afternoon", "B": "a butterfly", "C": "a cloud", "D": "a dew drop",
    "E": "an evening", "F": "a firefly", "G": "a gnome", "H": "a hug",
    "I": "an image", "J": "a jellybean", "K": "a kiss", "L": "a laugh",
    "M": "a morning", "N": "a nest", "O": "an orchid", "P": "a petal",
    "Q": "a quartz", "R": "a river flow", "S": "a sunset", "T": "a tear",
    "U": "an unicorn", "V": "a vine", "W": "a wave", "X": "a xylophone",
    "Y": "a yawn", "Z": "zucchini"
  },
  "months": {
    "January": "of love", "February": "with the sun", "March": "of laugh",
    "April": "with the earth", "May": "of tickles", "June": "with the moon",
    "July": "of magic", "August": "with the river", "September": "of harmony",
    "October": "with fairies", "November": "of balance", "December": "with serpents"
  }
};

app.get('/', (request, response) => {
  console.log(request);
  response.send("Hello");
});

app.get('/about', (request, response) => {
  console.log(request);
  response.send("P1 Data API");
});

app.get("/data", (request, response) => {
  console.log("A request to the data route");
  console.log(request.path);
  response.json(p1data);
});

app.get("/data/:category", (request, response) => {
  console.log(request.params.category);
  let category = request.params.category;
  let result = p1data[category];
  
  console.log(result);
  if(result) {
    response.json(result);
  } else {
    response.json({status: "info not present"});
  }
});

app.get("/data/:category/:item", (request, response) => {
  console.log(request.params.item);
  let user_item = request.params.item;
  let category = request.params.category;
  let user_obj;
  
  if(p1data[category]) {
    user_obj = p1data[category][user_item];
  }
  
  console.log(user_obj);
  if(user_obj) {
    response.json({item: user_item, value: user_obj});
  } else {
    response.json({status: "info not present"});
  }
});

app.listen(8000, () => {
  console.log("app is listening at localhost:8000");
});
