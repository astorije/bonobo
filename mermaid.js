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
  
}

function mermaidDraw() {
  if(mermaidWon)
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "You Sir, you ain't no shitty musician!"
    });
  else
    $("#canvas").drawText({
      fillStyle: "#9cf",
      strokeStyle: "#25a",
      strokeWidth: 2,
      x: 800,
      y: 450,
      font: "48pt sans-serif",
      text: "Repeat after me..."
    });
}