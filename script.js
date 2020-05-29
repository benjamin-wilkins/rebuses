var rebuses = [
  {
    "rebus" : "RE + 🚌",
    "answer" : "REBUS",
    "hint" : "This is one!"
  },
  {
    "rebus" : "❄ + 🤵",
    "answer" : "SNOWMAN",
    "hint" : "Frosty the ____"
  }
];

var hint = document.getElementById("hint");
var text = document.getElementById("text");
var input = document.getElementById("input");
var button = document.getElementById("button");
var correct = document.getElementById("correct");
var rebusTotal = document.getElementById("rebusTotal");

var rebusnum = 0;
var correctnum = 0;

var nextrebus = function() {
  if (rebusnum < rebuses.length) {
    var rebus = rebuses[rebusnum];
    text.innerHTML = rebus["rebus"];
    rebusTotal.innerHTML = "Rebus no. " + (rebusnum + 1).toString() + " out of " + rebuses.length
  } else {
    rebusnum = 0;
    nextrebus()
  }
}

button.onclick = function() {
  var rebus = rebuses[rebusnum];
  if (input.value.toUpperCase() == rebus["answer"]) {
    input.value = ""
    hint.innerHTML = "Hint: ";
    rebusnum += 1;
    correctnum += 1;
    correct.innerHTML = "Correct: " + correctnum.toString();
    nextrebus();
  } else {
    hint.innerHTML = "Hint: " + rebus["hint"];
  }
}

nextrebus()
