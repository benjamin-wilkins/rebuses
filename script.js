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
    "rebus" : "🐇, A → I",
    "answer" : "RIBBIT",
    "hint" : "The sound a frog makes."
  },
  {
    "rebus" : "🐈 / 🐕 + ↻  + 🚉",
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
  },
  {
    "rebus" : "📗 - BOOK + 🏠",
    "answer" : "GREENHOUSE",
    "hint" : "Where plants are kept to keep them hot."
  },
  {
    "rebus" : "🎄 / 🎅 + ⏰",
    "answer" : "CHRISTMAS TIME",
    "hint" : "A time when 🎁s are sent and recieved."
  },
  {
    "rebus" : "🏠 + 🌿",
    "answer" : "HOUSEPLANT",
    "hint" : "A plant in the house."
  },
  {
    "rebus" : "💁 + 🔝 / 🗔",
    "answer" : "DESKTOP",
    "hint" : "💁 is an 'information <strong>desk</strong> person'"
  }
];

var hint = document.getElementById("hint");
var text = document.getElementById("text");
var input = document.getElementById("input");
var check = document.getElementById("check");
var random = document.getElementById("random")
var correct = document.getElementById("correct");
var goToRebus = document.getElementById("goToRebus");
var rebusTotal = document.getElementById("rebusTotal");
var rebusNumber = document.getElementById("rebusNumber");

window.rebusnum = 0;
window.correctnum = 0;
rebusTotal.innerHTML = rebuses.length

var nextrebus = function() {
  if (rebusnum < rebuses.length) {
    window.rebus = rebuses[rebusnum];
    text.innerHTML = rebus["rebus"];
    hint.innerHTML = "Hint: ";
    correct.innerHTML = "Correct: " + correctnum.toString();
    rebusNumber.value = (rebusnum + 1).toString()
  } else {
    rebusnum = 0;
    nextrebus();
  }
};

check.onclick = function() {
  if (input.value.toUpperCase() == rebus["answer"]) {
    input.value = "";
    window.rebusnum += 1;
    window.correctnum += 1;
    nextrebus();
  } else {
    hint.innerHTML = "Hint: " + rebus["hint"];
  }
};

random.onclick = function() {
  window.rebusnum = Math.floor(Math.random() * rebuses.length)
  nextrebus()
};

goToRebus.onclick = function() {
  window.rebusnum = Number(rebusNumber.value - 1);
  nextrebus();
};

nextrebus();
