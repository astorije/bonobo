$(document).ready(function() {

  function launchFullScreen(element) {
    if(element.requestFullScreen)
      element.requestFullScreen();
    else if(element.mozRequestFullScreen)
      element.mozRequestFullScreen();
    else if(element.webkitRequestFullScreen)
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }

  var currentScene = 'none'; // sirene - wind
  var playing = false;

  onPress(Keyboard.W, function() {
    currentScene = 'sirene';
  });

  onPress(Keyboard.X, function() {
    currentScene = 'wind';
  });


  onPress(Keyboard.A, function() {
    if (currentScene == "sirene")
      $("#note1")[0].play();
  });

  onPress(Keyboard.Z, function() {
    if (currentScene == "sirene")
      $("#note2")[0].play();
  });

  onPress(Keyboard.E, function() {
    if (currentScene == "sirene")
      $("#note3")[0].play();
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

  function Cloud(I) {
    I.x = 0;
    I.y = 0;

    I.width  = 100;
    I.height = 100;

    I.draw = function() {
      
      $("#canvas").drawImage({
        source: "nuage2.png",
        x: this.x,
        y: this.y
      });
    };

    I.update = function() {
   //   I.x += I.xVelocity;
   //   I.y += I.yVelocity;

      I.x += 20;
      I.x %= 1600;
    };

    return I;
  }


  // Scène vent
  var clouds = []

  clouds.push(Cloud({x: 50}));

  clouds.forEach(function(cloud) {
    cloud.update();
  });

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
    }
}

});