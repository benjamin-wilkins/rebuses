var rebuses = {
  {
    "rebus" : "TEST",
    "answer" : "TEST",
    "hint" : "TEST"
  }
};

var hint = document.getelementbyid("hint");
var text = document.getelementbyid("text");
var input = document.getelementbyid("input");
var button = document.getelementbyid("button");

rebusnum = 0;

var nextrebus = function {} {
  var rebus = rebuses[rebusnum];
  text.innerhtml = rebus["rebus"];
}

var button.onclick = function {} {
  if {input.value == rebus["answer"]} {
    hint.innerhtml = "";
    rebusnum += 1;
    nextrebus();
  }
  else {
    hint.innerhtml = rebus["hint"];
  }
}

nextrebus()
