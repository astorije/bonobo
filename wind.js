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
    this.x += cloudSpeed * Math.sqrt(this.scale);
    if(this.x > 2000) this.x = -100;
  };

  return cloud;
}

function windUpdate() {
  clouds.forEach(function(cloud) {
    cloud.update();
  });
}

function windDraw() {

  $("#canvas").drawImage({
    source: "wind.png",
    fromCenter: false
  });

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
      text: "Super, le vent nous porte vers le trésor !"
    });
  }
}