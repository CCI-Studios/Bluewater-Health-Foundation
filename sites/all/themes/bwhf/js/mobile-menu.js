(function($){
  $(function(){
    $(".mobile-menu").click(menuButtonClick);
    $(".menu-arrow").click(arrowClick);
  });
  function menuButtonClick(e) {
    e.preventDefault();
    $(".region-navigation2").toggleClass("open");
  }
  function arrowClick(e) {
    e.preventDefault();
    $(this).parent().toggleClass("open").closest(".menu").toggleClass("open-child");
    $(".region-navigation2 .block__give-now").toggle();
  }
})(jQuery);
