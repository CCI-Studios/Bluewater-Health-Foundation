(function($){
  $(function(){
    var $container = $(".block__dream-home-photos .field-name-field-photos .field-items");
    if ($container.length) {
      $container.slick({
        dots: false,
        arrows: true,
        fade: false,
        infinite: false,
        speed: 200,
        slidesToShow: 3,
        autoplay: false,
      });
      lightbox.option({
        'resizeDuration': 200,
        'fadeDuration': 200
      });
      $(".block__dream-home-photos .field-name-field-photos .field-item:not(.slick-cloned) a").attr("data-lightbox","dream-home-photos");
      lightbox.init();
    }
  });
})(jQuery);
