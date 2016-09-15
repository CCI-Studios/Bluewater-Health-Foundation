(function($) {
    $(function(){
        if ($(".contact--map").length)
        {
            createMap($(".contact--map"), '89 Norman Street, Sarnia, Ontario, N7T 6S3');
        }
        if ($(".bean-map").length)
        {
            var address = $(".bean-map .field-address").data("address");
            createMap($(".bean-map"), address);
        }
    });

    function createMap($container, address)
    {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(42.9770439, -82.392355),
            scrollwheel: false
        }
        var map = new google.maps.Map($container.get(0), mapOptions);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address':address},
        function(results, status){
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);

                var infowindow = new google.maps.InfoWindow({
                    content: '<b>' + address + '</b>',
                    maxWidth: 150
                });
                
                var image = '/sites/all/themes/bwhf/img/map-marker.svg';
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    title: address,
                    icon: image,
                    optimized: false
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
            }
        });
    }
}(jQuery));
