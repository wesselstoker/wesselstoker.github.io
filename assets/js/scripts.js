$(document).ready(function(){
    var colors       = new Array("#1abc9c","#2ecc71","#3498db","#34495e","#16a085","#27ae60","#2980b9","#2c3e50","#e74c3c","#e67e22","#f39c12","#c0392b");
    var currentColor = colors[Math.floor(Math.random() * colors.length)];
    var top          = $(document).scrollTop()

    $(".intro,.footer,.footer-break")
        .css("background-color", currentColor)

    if(top == 0){
        $(".intro")
            .slideDown(1500);
    }else{
        $(".intro")
            .css("display", "block")        
    }
    
    setInterval(function() {
        var nextColor = colors[Math.floor(Math.random() * colors.length)];

        $(".intro,.footer,.footer-break")
            .addClass("transition")
            .css("background-color", nextColor)

    }, 8000);

    $(".photo-inner-footer").click(function(){
        $("body").animate({ scrollTop: 0 }, 600);
    });

    $(".contact-send").click(function(){
        var name    = $(".contact-name").val()
        var email   = $(".contact-email").val()
        var message = $(".contact-message").val()
        var object  = {"name" : name, "email" : email, "message" : message}
        var filter  = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        var error   = false

        $(".alert-success").fadeOut()
        
        $(".form-group")
            .removeClass("has-error")

        if(name == ""){
            error = true
            $(".group-name")
                .addClass("has-error")
        }

        if(email == ""){
            error = true
            $(".group-email")
                .addClass("has-error")
        }

        if (!filter.test(email)){
            error = true
            $(".group-email")
                .addClass("has-error")
        }

        if(message == ""){
            error = true
            $(".group-message")
                .addClass("has-error")
        }

        if(!error){
            $(".alert-success").fadeIn()
            $(".contact-name, .contact-email, .contact-message").val("")
            
	    $.ajax({
                url: 'http://www.intotheweb.nl/mail.php',
                type: "POST",
                data: object,
                dataType: "jsonp"
            });
        }
    });

    $(".control-label").click(function(){
	$(".form-group")
            .removeClass("has-error")
    });

    smoothScroll.init();
});
