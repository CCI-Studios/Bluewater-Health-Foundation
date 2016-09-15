(function($){
  $(function(){
    $(".node-dream-home-early-bird-prize .teaser a").on("click", teaserClick);
    $(".node-dream-home-early-bird-prize .popup-cover").on("click", coverClick);
  });
  function teaserClick(e) {
    e.preventDefault();
    $(e.target).closest(".node-dream-home-early-bird-prize").find(".popup, .popup-cover").fadeIn(200);
  }
  function coverClick(e) {
    e.preventDefault();
    $(e.target).closest(".node-dream-home-early-bird-prize").find(".popup, .popup-cover").fadeOut(200);
  }
})(jQuery);
