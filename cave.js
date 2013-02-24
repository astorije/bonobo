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
  $("#canvas").drawRect({
    fillStyle: light ? "#ddd" : "#555",
    fromCenter: false,
    height: 900,
    width: 1600
  });

  /*if(light)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: ""
    });*/
}