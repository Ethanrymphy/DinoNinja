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
  });
});
