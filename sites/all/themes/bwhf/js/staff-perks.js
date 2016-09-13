(function($){
  var $buttons;
  
  $(function(){
    $buttons = $(".staff-perks-categories a");
    $buttons.on("click", buttonClick);
  });
  function buttonClick(e) {
    e.preventDefault();
    if (!$(e.target).hasClass("active")) {
      switchCategory($(e.target), e.target.className);
    }
  }
  function switchCategory($button, categoryClass) {
    console.log(categoryClass);
    $buttons.removeClass("active");
    $button.addClass("active");
    $(".view-staff-perks .views-grouping").hide();
    $(".view-staff-perks .views-grouping__"+categoryClass).fadeIn(200);
  }
})(jQuery);
