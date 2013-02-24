var treasureSteps = 4;
var treasureCurrentStep;

function treasureReset() {
  treasureCurrentStep = 1;
}

function treasureEvents(e) {
  if(treasureCurrentStep < treasureSteps)
    if(e.keyCode == Keyboard.SPACE) {
      treasureCurrentStep++;
    }
}

function treasureUpdate() {

}

function treasureDraw() {
  $("#canvas").drawImage({
    source: "ile" + treasureCurrentStep + ".png",
    fromCenter: false
  });
  if(treasureCurrentStep >= treasureSteps)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "Bravo, tu as trouvé le trésor !"
    });
}