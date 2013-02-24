var krakenDistance;
var krakenDefeated;

function krakenReset() {
  krakenDistance = 1.0
  krakenDefeated = false;
}

function krakenEvents(e) {
  if(!krakenDefeated)
    if(e.keyCode == Keyboard.SPACE) {
      krakenDistance /= 1.2;
    }
}

function krakenUpdate() {
  if(!krakenDefeated) {
    krakenDistance = Math.min(1.0, krakenDistance * 1.02);
    if(krakenDistance <= 0.1)
      krakenDefeated = true;
  }
}

function krakenDraw() {
  if(!krakenDefeated) {
    $("#canvas").drawRect({
      fillStyle: "#8a96d1",
      width: 1600,
      height: 900,
      fromCenter: false
    });
    $("#canvas").drawEllipse({
      fillStyle: "#c33",
      x: 800, y: 450,
      width: 800,
      height: 800,
      scale: krakenDistance
    });
  }
  else
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "You defeated the Horny Kraken!"
    });
}