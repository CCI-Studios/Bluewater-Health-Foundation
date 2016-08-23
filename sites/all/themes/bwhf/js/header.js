(function($){
  $(function(){
    var $container = $(".view-headers .view-content");
    if ($container.length && $container.find(".views-row").length > 1) {
      $container.slick({
        dots: false,
        arrows: false,
        fade: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
      });
    }
  });
})(jQuery);
