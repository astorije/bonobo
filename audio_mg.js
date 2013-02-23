$(document).ready(function(grodio) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', grodio);
 // audioElement.setAttribute('autoplay', 'autoplay');

  $('#play').click(function() {
  audioElement.play("sample.ogg");
  });

  $('#stop').click(function() {
  audioElement.pause();
  audioElement.currentTime = 0
  });
});