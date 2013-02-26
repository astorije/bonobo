var light;

function caveReset() {
  light = false;
}

function caveEvents(e) {
    if(e.keyCode == Keyboard.S)
      light = true;
}

function caveUpdate() {
}

function caveDraw() {
  $("#canvas").drawImage({
    source: "img/grotte2.png",
    fromCenter: false,
    height: 900,
    width: 1600
  });

  if(!light)
    $("#canvas").drawImage({
      source: "img/grotte1.png",
      fromCenter: false,
      height: 900,
      width: 1600
    });

  if(light)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#047",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "60pt Pirates Writers",
      text: "Et la lumière fut !"
    });
}