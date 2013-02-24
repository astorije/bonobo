var reefCurrentStep = 0;

function reefReset() {
  reefCurrentStep = 0;
}

function reefEvents(e) {
  if(e.keyCode == Keyboard.A) {
    if(reefCurrentStep == 1 || reefCurrentStep == 3)
      reefCurrentStep++;
  }
  else if(e.keyCode == Keyboard.Z) {
    if(reefCurrentStep == 0 || reefCurrentStep == 2) 
      reefCurrentStep++;
  }
}

function reefUpdate() {
}

function reefDraw() {
  if(reefCurrentStep == 4) {
    $("#canvas").drawRect({
        fillStyle: "#8a96d1",
        width: 1600,
        height: 900,
        fromCenter: false
      });
  
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
  else
    $("#canvas").drawImage({
      source: reefCurrentStep % 2 == 0 ? "recif1.png" : "recif2.png",
      width: 1600,
      height: 900,
      fromCenter: false
    });
}