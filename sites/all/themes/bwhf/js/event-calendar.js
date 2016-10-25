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
      var nid = $(this).find("[data-nid]").data("nid");
      var title = $(this).find(".views-field-title").text().trim();
      var start = $(this).find(".start-date").text().trim();
      var end = $(this).find(".end-date").text().trim();
      var url = $(this).find(".views-field-path").text().trim();
      if (start) {
        events.push({
          nid: nid,
          title: title,
          start: start,
          end: end,
          url: url,
        });
      }
      var titleContainer = $(this).find(".title");
      titleContainer.css("background-image", "url('"+titleContainer.data("bg")+"')");
    });
    $container.find(".popup-cover").click(function(){
      $container.find(".popup, .popup-cover").hide();
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
      eventClick: function (event, jsEvent, view) {
        jsEvent.preventDefault();
        $(".popup[data-nid="+event.nid+"], .popup-cover").show();
      },
    });
  }
  function windowResize() {
    if ($(window).width() <= 800) {
      $container.fullCalendar("changeView", "listMonth");
    }
  }
})(jQuery);
