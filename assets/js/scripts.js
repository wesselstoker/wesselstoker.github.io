$(document).ready(function(){
    var colors = new Array("#3498db","#2ecc71","#c0392b","#34495e","#e67e22","#27ae60","#2c3e50","#c0392b");
    var currentColor = colors[Math.floor(Math.random() * colors.length)];

    $('.intro').css("background-color", currentColor).slideDown(1500);
});