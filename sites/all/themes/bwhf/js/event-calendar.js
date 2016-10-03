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
      var start = $(this).find(".views-field-field-event-date .date-display-start").text().trim();
      var end = $(this).find(".views-field-field-event-date .date-display-end").text().trim();
      var url = $(this).find(".views-field-path").text().trim();
      if (start) {
        events.push({
          title: title,
          start: start,
          end: end,
          url: url,
        });
      }
    });
    fullCalendar = $container.fullCalendar({
      events: events,
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
        var dateStart = event.start.format('YYYY-MM-DD');
        view.el.find('[data-date="' + dateStart + '"]:not(.fc-other-month)').addClass('fc-has-event');
        if (event.end) {
          var diff = event.end.diff(event.start, "days");
          for (var i=0; i<diff; i++) {
            var newDate = moment(event.start.valueOf()).add(i+1, "days");
            view.el.find('[data-date="' + newDate.format('YYYY-MM-DD') + '"]:not(.fc-other-month)').addClass('fc-has-event');
          }
        }
        if (event.url) {
          element.href = event.url;
        }
        if (event.start.month() !== view.intervalStart.month() || event.start.year() !== view.intervalStart.year()) {
          return false;
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
