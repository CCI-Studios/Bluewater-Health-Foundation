(function($){
  var $container;
  $(function(){
    $container = $(".view-event-calendar");
    if ($container.length) {
      initCalendar();
      $(window).resize(windowResize);
      windowResize();
    }
  });
  function initCalendar() {
    var events = [];
    $container.find(".views-row").each(function(){
      var title = $(this).find(".views-field-title").text().trim();
      var date = $(this).find(".views-field-field-event-date").text().trim();
      var url = $(this).find(".views-field-path").text().trim();
      if (date) {
        events.push({
          title: title,
          start: date,
          url: url,
        });
      }
    });
    fullCalendar = $container.fullCalendar({
      events: events,
      allDayDefault: true,
      header: {
        left: 'prev,next',
        center: '',
        right: 'title month,listMonth'
      },
      buttonIcons: {
        listMonth: 'right-single-arrow'
      },
      displayEventTime: false,
      eventRender: function (event, element, view) {
        if (event.start.month() !== view.intervalStart.month() || event.start.year() !== view.intervalStart.year()) {
          return false;
        }
        var dateString = moment(event.start).format('YYYY-MM-DD');
        view.el.find('[data-date="' + dateString + '"]:not(.fc-other-month)').addClass('fc-has-event');
        if (event.url) {
          element.href = event.url;
        }
      },
    });
  }
  function windowResize() {
    if ($(window).width() <= 800) {
      $container.fullCalendar("changeView", "listMonth");
    }
  }
})(jQuery);
