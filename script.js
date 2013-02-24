$(document).ready(function() {

  function launchFullScreen(element) {
    if(element.requestFullScreen)
      element.requestFullScreen();
    else if(element.mozRequestFullScreen)
      element.mozRequestFullScreen();
    else if(element.webkitRequestFullScreen)
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }

  var currentScene = 'none'; // mermaid - wind
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
    else if(except != "mermaid") {
      mermaidAttempt = [];
    }
  }

  // Scene selection
  $(document).keydown(function(e) {
    if(e.keyCode == Keyboard.X) {
      currentScene = "mermaid";
      resetOtherScenes(currentScene);

      $("#note2")[0].play();
    }
    else if(e.keyCode == Keyboard.W) {
      currentScene = "wind";
      resetOtherScenes(currentScene);
    }
  });

  // Event loop
  $(document).keydown(function(e) {
    if (currentScene == "mermaid") {
      if(e.keyCode == Keyboard.UP) {
        $("#note1")[0].play();
        mermaidAttempt.push(1);
      }
      else if(e.keyCode == Keyboard.LEFT) {
        $("#note2")[0].play();
        mermaidAttempt.push(2);
      }
      else if(e.keyCode == Keyboard.RIGHT) {
        $("#note3")[0].play();
        mermaidAttempt.push(3);
      }
    }
    else if(currentScene == "wind") {
      if(e.keyCode == Keyboard.UP) {
        if(cloudSpeed < 100)
          cloudSpeed += 10;
      }
    }
  });

  $("#canvas").hide();

  $("#start").click(function() {
    launchFullScreen($("#canvas")[0]);
    return false;
  });

  $(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange',function() {
    $("#canvas").toggle();
    $("#start").text('Hey, go back to fullscreen!');
    $("#start").toggle();
    playing = !playing;
  });

  $(window).bind("resize", function(){
    var w = $(window).width();

    $("#canvas").css("width", w + "px");
    $("#canvas").css("height", w*9/16 + "px"); 
  });

  var FPS = 30;
  setInterval(function() {
    update();
    draw();
  }, 1000/FPS);

  function createCloud(val) {
    val = val || {};

    cloud = {};
    cloud.x = val.x || -100;
    cloud.y = val.y || 0;
    cloud.source = clouds.length % 2 == 0 ? "nuage2.png" : "nuage3.png";
    cloud.scale = cloud.y / 900;

    cloud.draw = function() {
      
      $("#canvas").drawImage({
        source: this.source,
        x: this.x,
        y: this.y,
        scale: this.scale
      });
    };

    cloud.update = function() {
   //   cloud.x += I.xVelocity;
   //   cloud.y += I.yVelocity;

      this.x += cloudSpeed * Math.sqrt(this.scale);
      if(this.x > 2000) this.x = -100;
    };

    return cloud;
  }

  function update() {
    if(!playing) return;

    if(currentScene == "wind") {
      clouds.forEach(function(cloud) {
        cloud.update();
      });
    }

  }

  function draw() {
    if(!playing) return;

    $("canvas").clearCanvas();

    if(currentScene == "wind") {
      clouds.forEach(function(cloud) {
        cloud.draw();
      });

      if(cloudSpeed >= 100) {
        $("#canvas").drawText({
          fillStyle: "#9cf",
          strokeStyle: "#25a",
          strokeWidth: 2,
          x: 800,
          y: 450,
          font: "48pt sans-serif",
          text: "You shall pass now..."
        });
      }
    }
}

});