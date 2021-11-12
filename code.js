$("li").on("mouseenter", function(){

    if($('nav').width() > 700){
        $(this).find('.sleigh').show();

    }
});

$('li').on('mouseleave', function(){
    if($('nav').width() > 700){
        $(this).find('.sleigh').hide();
    }
});


/*Christmas Countdown*/
var countDownTime = new Date("Dec 25, 2021 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownTime - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var countdown = days+"d " + hours+"h " + minutes+"m "+ seconds+"s";
    $("#countdown").html(countdown);

    if(distance<0){
        clearInterval(x);
        var finished = "00d 00h 00m 00s";
        $("#merryChristmas").show();
    }
}, 1000);

/*--------------------------------------------------------------------------------------*/

/*Smooth Scroll*/
$("a").on('click', function(event) {

    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    } // End if
});
/*-------------------------------------------*/

/*Radio Player*/

var on = true;

$("#thePlayer").on("click", function(){
   if(on){
       $("#radioIcon").find('i').attr('class', 'fas fa-play');
       $("#audio")[0].pause();
       on = false;
   } else{
       $("#radioIcon").find('i').attr('class', 'fas fa-pause');
       $("#audio")[0].play();
       on = true;
   }
});


/*Device Scripts*/
$("#menuActivate").on('click', function () {
   $(".nav-menu").toggle();
});
