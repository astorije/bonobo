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

  // Scene selection
  $(document).keydown(function(e) {
    if(e.keyCode == Keyboard.X)
      currentScene = 'sirene';
    else if(e.keyCode == Keyboard.W)
      currentScene = 'wind';
  });

  // Event loop
  $(document).keydown(function(e) {
    if (currentScene == "sirene") {
      if(e.keyCode == Keyboard.UP)
        $("#note1")[0].play();
      else if(e.keyCode == Keyboard.LEFT)
        $("#note2")[0].play();
      else if(e.keyCode == Keyboard.RIGHT)
        $("note3")[0].play();
    }
    else if(currentScene == "wind") {
      if(e.keyCode == Keyboard.UP)
      {}
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
    cloud.x = val.x || 0;
    cloud.y = val.y || 0;

    cloud.draw = function() {
      
      $("#canvas").drawImage({
        source: "nuage2.png",
        x: this.x,
        y: this.y
      });
    };

    cloud.update = function() {
   //   cloud.x += I.xVelocity;
   //   cloud.y += I.yVelocity;

      cloud.x += 20;
      cloud.x %= 1600;
    };

    return cloud;
  }


  // Scène vent
  var clouds = []

  clouds.push(createCloud({y: 50}));
  clouds.push(createCloud({y: 250}));

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