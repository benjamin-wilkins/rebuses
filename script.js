var rebuses = [
  {
    "rebus" : "RE + 🚌",
    "answer" : "REBUS",
    "hint" : "This is one!"
  },
  {
    "rebus" : "❄ + 🤵",
    "answer" : "SNOWMAN",
    "hint" : "Frosty the ____,"
  },
  {
    "rebus" : "🐖 + ✎",
    "answer" : "PIGPEN",
    "hint" : "An alternative to morse code using lines and dots."
  }
];

var hint = document.getElementById("hint");
var text = document.getElementById("text");
var input = document.getElementById("input");
var check = document.getElementById("check");
var random = document.getElementById("random")
var correct = document.getElementById("correct");
var rebusTotal = document.getElementById("rebusTotal");

window.rebusnum = 0;
window.correctnum = 0;

var nextrebus = function() {
  if (rebusnum < rebuses.length) {
    window.rebus = rebuses[rebusnum];
    text.innerHTML = rebus["rebus"];
    rebusTotal.innerHTML = "Rebus no. " + (rebusnum + 1).toString() + " out of " + rebuses.length
  } else {
    rebusnum = 0;
    nextrebus()
  }
}

check.onclick = function() {
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

random.onclick = function() {
  window.rebusnum = Math.floor(Math.random() * rebuses.length)
  nextrebus()
}

nextrebus()
