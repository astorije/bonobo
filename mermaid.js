var mermaidScale = 1.0;

function mermaidReset() {
  mermaidAttempt = "";
  mermaidWon = false;
  mermaidScale = 1.0;
}

function startMermaidSequenceIfNeeded() {
  setTimeout(function() {
    if(mermaidAttempt == "2312")
      mermaidWon = true;
    else if(mermaidAttempt.length == 0 || mermaidAttempt.length >= 4) {
      $("#notes_2312")[0].play();
      mermaidAttempt = "";
    }
  }, 2000);
}

function mermaidUpdate() {
  if(mermaidWon)
    mermaidScale /= 1.1;
}

function mermaidDraw() {
  $("#canvas").drawRect({
      fillStyle: "#8a96d1",
      width: 1600,
      height: 900,
      fromCenter: false
    });

  if(mermaidWon)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "Regarde, la sirène s'enfuit !"
    });

  $("#canvas").drawImage({
    source: "sirene0.png",
    fromCenter: false,
    height: 900,
    width: 1600,
    scale: mermaidScale
  });

  if(!mermaidWon)
    $("#canvas").drawImage({
      source: "sirene1.png",
      fromCenter: false,
      height: 900,
      width: 1600
    });

  if(mermaidWon)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "Regarde, la sirène s'enfuit !"
    });
}