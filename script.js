$(document).ready(function() {

  var currentScene = 'none'; // sirene

  if (currentScene == "sirene") {

    onPress(Keyboard.A, function() {
      $("#note1")[0].play();
    });

    onPress(Keyboard.Z, function() {
      $("#note2")[0].play();
    });

    onPress(Keyboard.E, function() {
      $("#note3")[0].play();
    });
  }

});