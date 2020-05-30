var rebuses = [
  {
    "rebus" : "RE + 🚌",
    "answer" : "REBUS",
    "hint" : "This is one!"
  },
  {
    "rebus" : "❄ + 👨",
    "answer" : "SNOWMAN",
    "hint" : "Frosty the ____,"
  },
  {
    "rebus" : "🐖 + ✎",
    "answer" : "PIGPEN",
    "hint" : "An alternative to morse code using lines and dots."
  },
  {
    "rebus" : "🔥 + 🝚",
    "answer" : "FIREWALL",
    "hint" : "Something that stops you from seeing bad things on the web."
  },
  {
    "rebus" : "BE + 🌿",
    "answer" : "BELIEF",
    "hint" : "Faith in something or someone."
  },
  {
    "rebus" : "🐇 <del>A</del> <ins>I</ins>",
    "answer" : "RIBBIT",
    "hint" : "The sound a frog makes."
  },
  {
    "rebus" : "🐈 / 🐕 + ↻ + SPACE + 🚉",
    "answer" : "PETROL STATION",
    "hint" : "Where you fill up your car with fuel - 🚉 = station."
  },
  {
    "rebus" : "α + β",
    "answer" : "ALPHABET",
    "hint" : "The first 2 letters of the Greek alphabet, merged to make an English word."
  },
  {
    "rebus" : "ATHLE + ✓ + S",
    "answer" : "ATHLETICS",
    "hint" : "A kind of sport."
  },
  {
    "rebus" : "📅 (M) + 🔑",
    "answer" : "MONKEY",
    "hint" : "An animal that is said to be cheeky."
  },
  {
    "rebus" : "<i>p</i>",
    "answer" : "PIANO",
    "hint" : "<i>p</i> is it's symbol - it also has 🔑s that will not open your door."
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
    hint.innerHTML = "Hint: ";
    rebusTotal.innerHTML = "Rebus no. " + (rebusnum + 1).toString() + " out of " + rebuses.length
  } else {
    rebusnum = 0;
    nextrebus()
  }
};

check.onclick = function() {
  if (input.value.toUpperCase() == rebus["answer"]) {
    input.value = "";
    rebusnum += 1;
    correctnum += 1;
    correct.innerHTML = "Correct: " + correctnum.toString();
    nextrebus();
  } else {
    hint.innerHTML = "Hint: " + rebus["hint"];
  }
};

random.onclick = function() {
  window.rebusnum = Math.floor(Math.random() * rebuses.length)
  nextrebus()
};

nextrebus();
