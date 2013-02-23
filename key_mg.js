var Keyboard = function() {}

Keyboard.BACKSPACE = 8;

Keyboard.ENTER  = 13;

Keyboard.ESCAPE = 27;

Keyboard.LEFT   = 37;
Keyboard.UP     = 38;
Keyboard.RIGHT  = 39;
Keyboard.DOWN   = 40;

Keyboard.A      = 65;
Keyboard.B      = 66;
Keyboard.C      = 67;
Keyboard.D      = 68;
Keyboard.E      = 69;
Keyboard.F      = 70;
Keyboard.G      = 71;
Keyboard.H      = 72;
Keyboard.I      = 73;
Keyboard.J      = 74;
Keyboard.K      = 75;
Keyboard.L      = 76;
Keyboard.M      = 77;
Keyboard.N      = 78;
Keyboard.O      = 79;
Keyboard.P      = 80;
Keyboard.Q      = 81;
Keyboard.R      = 82;
Keyboard.S      = 83;
Keyboard.T      = 84;
Keyboard.U      = 85;
Keyboard.V      = 86;
Keyboard.W      = 87;
Keyboard.X      = 88;
Keyboard.Y      = 89;
Keyboard.Z      = 90;

function onPress(key, callback) {
  $(document).keydown(function(event) {
    if(event.keyCode == key) {
      callback();
    }
  })
}