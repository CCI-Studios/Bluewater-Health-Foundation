(function($){
  $(function(){
    $(".paragraphs-items-field-accordion .field-name-field-accordion-title a").click(accordionClick);
  });
  function accordionClick(e) {
    e.preventDefault();
    $(this)
    .closest(".entity-paragraphs-item")
    .toggleClass("open")
    .find(".field-name-field-body")
    .slideToggle();
  }
})(jQuery);
