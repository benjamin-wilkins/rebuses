var rebuses = [
  {
    "rebus" : "RE + 🚌",
    "answer" : "REBUS",
    "hint" : "This is one!"
  }
];

var hint = document.getElementById("hint");
var text = document.getElementById("text");
var input = document.getElementById("input");
var button = document.getElementById("button");

rebusnum = 0;

var nextrebus = function() {
  if (rebusnum < rebuses.length) {
    var rebus = rebuses[rebusnum];
    text.innerHTML = rebus["rebus"];
  } else {
    rebusnum = 0;
    nextrebus()
  }
}

button.onclick = function() {
  var rebus = rebuses[rebusnum];
  if (input.value == rebus["answer"]) {
    input.value = ""
    hint.innerHTML = "Hint: ";
    rebusnum += 1;
    nextrebus();
  } else {
    hint.innerHTML = "Hint:" + rebus["hint"];
  }
}

nextrebus()
