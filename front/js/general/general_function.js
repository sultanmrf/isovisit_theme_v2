
function show_map(map_container_id, lat, long) {
    // var lat = 36.312416;
    // var long = 59.553421;
    // 36.312416, 59.553421

    if ($('#' + map_container_id).length > 0) {
        var map_main = L.map(map_container_id, {
            center: [lat, long],
            zoom: 16,
            gestureHandling: true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '',
        }).addTo(map_main);

        var map_main_marker = L.marker([lat, long]).addTo(map_main);
    }
}

function check_size_media(min_width,max_width){
    if(min_width === false){
        return window.matchMedia("(max-width: " + max_width + "px)").matches;
    }else if(max_width === false) {
        return window.matchMedia("(min-width: " + min_width + "px)").matches;
    }else {
        return window.matchMedia("(min-width: " + min_width + "px) and (max-width: " +  max_width + "px)").matches;
    }
}
