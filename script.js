$(document).ready(function() {

  function launchFullScreen(element) {
    if(element.requestFullScreen)
      element.requestFullScreen();
    else if(element.mozRequestFullScreen)
      element.mozRequestFullScreen();
    else if(element.webkitRequestFullScreen)
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }

  var currentScene = 'none'; // none - mermaid - wind - kraken
  var playing = false;

  resetOtherScenes(currentScene);

  function resetOtherScenes(except) {
    if(except != "wind") {
      cloudSpeed = 0;
      clouds = [];

      for(var i = 0; i < 20; ++i)
        clouds.push(createCloud({
          x: -1000 * Math.random(),
          y: Math.random() * Math.random() * 900
        }));
    }
    
    if(except != "mermaid") {
      mermaidAttempt = "";
      mermaidWon = false;
    }
    
    if(except != "kraken")
      krakenReset();
    
    if(except != "treasure")
      treasureReset();
    
    if(except != "reef")
      reefReset();
    
    if(except != "reef")
      caveReset();
  }

  // Scene selection
  $(document).keydown(function(e) {
    if(e.keyCode == Keyboard.N) {
      if($("#canvas").is(":hidden")) {
        $("#intro").hide();

        launchFullScreen($("#canvas")[0]);

        $("#gofullscreen").text('Reprends ta quête, étranger !');
        $("gofullscreen").show();
      }
    }

    if(e.keyCode == Keyboard.W) {
      currentScene = "wind";
      resetOtherScenes(currentScene);
    }
    else if(e.keyCode == Keyboard.X) {
      currentScene = "mermaid";
      resetOtherScenes(currentScene);

      startMermaidSequenceIfNeeded();
    }
    else if(e.keyCode == Keyboard.C) {
      currentScene = "kraken";
      resetOtherScenes(currentScene);
    }
    else if(e.keyCode == Keyboard.V) {
      currentScene = "treasure";
      resetOtherScenes(currentScene);
    }
    else if(e.keyCode == Keyboard.B) {
      currentScene = "reef";
      resetOtherScenes(currentScene);
    }
    else if(e.keyCode == Keyboard.Q) {
      currentScene = "cave";
      resetOtherScenes(currentScene);
    }
  });

  // Event loop
  $(document).keyup(function(e) {
    if(currentScene == "wind") {
      if(e.keyCode == Keyboard.SPACE) {
        if(cloudSpeed < 100)
          cloudSpeed += 10;
      }
    }
    else if (currentScene == "mermaid") {
      if(!mermaidWon)
        if(e.keyCode == Keyboard.UP) {
          $("#note1")[0].play();
          mermaidAttempt += "1";
          startMermaidSequenceIfNeeded();
        }
        else if(e.keyCode == Keyboard.LEFT) {
          $("#note2")[0].play();
          mermaidAttempt += "2";
          startMermaidSequenceIfNeeded();
        }
        else if(e.keyCode == Keyboard.RIGHT) {
          $("#note3")[0].play();
          mermaidAttempt += "3";
          startMermaidSequenceIfNeeded();
        }
    }
    else if (currentScene == "kraken") {
      krakenEvents(e);
    }
    else if (currentScene == "treasure") {
      treasureEvents(e);
    }
    else if (currentScene == "reef") {
      reefEvents(e);
    }
    else if (currentScene == "cave") {
      caveEvents(e);
    }
    e.preventDefault();
  });

  // Fullscreen management
  $("#canvas").hide();
  $("#gofullscreen").click(function(e) {
    launchFullScreen($("#canvas")[0]);
    e.preventDefault();
  });
  $(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange',function() {

    playing = !playing;
    $("#canvas").toggle(playing);

  });
  $(window).bind("resize", function(){
    var w = $(window).width();
    $("#canvas").css("width", w + "px");
    $("#canvas").css("height", w*9/16 + "px"); 
  });

  // Render loop
  var FPS = 30;
  setInterval(function() {
    update();
    draw();
  }, 1000/FPS);

  function update() {
    if(!playing) return;

    if(currentScene == "wind")
      windUpdate();
    else if(currentScene == "mermaid")
      mermaidUpdate();
    else if(currentScene == "kraken")
      krakenUpdate();
    else if(currentScene == "treasure")
      treasureUpdate();
    else if(currentScene == "reef")
      reefUpdate();
    else if(currentScene == "cave")
      caveUpdate();
  }

  function draw() {
    if(!playing) return;

    $("canvas").clearCanvas();

    if(currentScene == "none")
      $("#canvas").drawImage({
        source: "depart.png",
        fromCenter: false
      });
    else if(currentScene == "wind")
      windDraw();
    else if(currentScene == "mermaid")
      mermaidDraw();
    else if(currentScene == "kraken")
      krakenDraw();
    else if(currentScene == "treasure")
      treasureDraw();
    else if(currentScene == "cave")
      caveDraw();
  }

});