(function($){
  var drawDate;
  var $container;
  $(function(){
    $container = $(".block__dream-home-countdown .countdown");
    if ($container && $container.length) {
      drawDate = $container.data("deadline");
      setInterval(update, 1000);
    }
  });
  function update() {
    var diff = drawDate - Math.floor((new Date())/1000);
    var days = Math.floor(diff / (60*60*24));
    diff = diff % (60*60*24);
    var hours = Math.floor(diff / (60*60));
    diff = diff % (60*60);
    var mins = Math.floor(diff / (60));
    diff = diff % (60);
    var secs = Math.floor(diff);
    
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    
    $container.find(".countdown--days .value").text(days);
    $container.find(".countdown--hours .value").text(hours);
    $container.find(".countdown--mins .value").text(mins);
    $container.find(".countdown--secs .value").text(secs);
  }
})(jQuery);
