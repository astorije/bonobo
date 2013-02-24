var reefCurrentStep;

function reefReset() {
  reefCurrentStep = 0;
}

function reefEvents(e) {
    if(e.keyCode == Keyboard.LEFT)
      if(reefCurrentStep == 1 || reefCurrentStep == 3)
        reefCurrentStep++;
    else if(e.keyCode == Keyboard.RIGHT)
      if(reefCurrentStep == 0 || reefCurrentStep == 2)
        reefCurrentStep++;
}

function reefUpdate() {
}

function reefDraw() {
  $("#canvas").drawImage({
    source: reefCurrentStep % 2 == 0 ? "recif1.png" : "recif2.png",
    fromCenter: false
  });
  if(reefCurrentStep == 4)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "C'était délicat, mais nous sommes passés..."
    });
}