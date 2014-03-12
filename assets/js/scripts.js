$(document).ready(function(){
    var colors = new Array("#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#2c3e50","#e74c3c","#e67e22","#f39c12","#c0392b");
    var currentColor = colors[Math.floor(Math.random() * colors.length)];
    var top = $(document).scrollTop()

    $(".intro")
        .css("background-color", currentColor)

    if(top == 0){
        $(".intro")
            .slideDown(1500);
    }else{
        $(".intro")
            .css("display", "block")        
    }
    
    $(".footer")
        .css("background-color", currentColor);

    setInterval(function() {
        var newColor = colors[Math.floor(Math.random() * colors.length)];

        $(".intro,.footer")
            .addClass("transition")
            .css("background-color", newColor)

    }, 10000);
});

//initialize google maps
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
//load google maps
function loadScript() {
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize";
    document.body.appendChild(e)
}
var MY_MAPTYPE_ID = "custom_style";
window.onload = loadScript;