function initialize() {
    var e = [{
        stylers: [{
            saturation: "-100"
        }]
    }],
        t = new google.maps.LatLng(53.18549, 5.83931),
        n = new google.maps.LatLng(53.18549, 5.83931),
        r = {
            zoom: 16,
            scrollwheel: !1,
            streetViewControl: !1,
            center: t,
            mapTypeControl: !1,
            mapTypeId: MY_MAPTYPE_ID
        }, i = new google.maps.Map(document.getElementById("map-canvas"), r),
        s = "http://maps.google.com/mapfiles/marker.png";
    new google.maps.Marker({
        position: n,
        map: i,
        title: "Wessel Stoker",
        icon: s
    });
    var o = {
        name: "Custom Style"
    }, u = new google.maps.StyledMapType(e, o);
    i.mapTypes.set(MY_MAPTYPE_ID, u)
}

function loadScript() {
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize";
    document.body.appendChild(e)
}
var MY_MAPTYPE_ID = "custom_style";
window.onload = loadScript;