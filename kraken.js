var krakenDistance;
var krakenDefeated;

function krakenReset() {
  krakenDistance = 0.2;
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
  $("#canvas").drawRect({
    fillStyle: "#8a96d1",
    width: 1600,
    height: 900,
    fromCenter: false
  });

  if(!krakenDefeated)
    $("#canvas").drawImage({
      source: "kraken.png",
      x: 800, y: 450,
      width: 800,
      height: 800,
      scale: krakenDistance
    });
  else
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#047",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "60pt Pirates Writers",
      text: "Le sang a coulé, le kraken est mort !"
    });
}