$(document).ready(function() {
  var rand = Math.round(Math.random()*100)
  console.log(rand)
  $.getJSON("https://unsplash.it/list", function(data){
    $('body').css({
      'background':'url(https://unsplash.it/' + data[rand].filename+')',
      'background-size':'cover'
    });
  }).fail(function(){
    console.error(data);

    $(".dino").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });


  });
});

myAudio = new Audio('dinoninja.mp3');
myAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
myAudio.play();

$(document).ready( function() {
$('..alternate1').click(function(){
   $('.alternate1').append('<embed id="embed_player" src="audio.wav" autostart="true" hidden="true"></embed>');
});
});
