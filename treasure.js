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
  for(var i=treasureSteps; i > 0; --i)
    if(i >= treasureCurrentStep)
      $("#canvas").drawImage({
        source: "ile" + i + ".png",
        fromCenter: false
      });

  if(treasureCurrentStep >= treasureSteps)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#047",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "60pt Pirates Writers",
      text: "Ahoy, le trésor est à nous !"
    });
}