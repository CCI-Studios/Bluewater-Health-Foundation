(function($){
  $(function(){
    var $container = $(".view-volunteer-features .view-content, .view-volunteer-videos .view-content");
    if ($container.length) {
      $container.slick({
        dots: false,
        arrows: true,
        fade: false,
        infinte: true,
        speed: 200,
        slidesToShow: 1,
        autoplay: false,
        adaptiveHeight: true,
      });
    }
  });
})(jQuery);
