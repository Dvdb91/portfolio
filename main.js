
$(document).ready
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;


mywindow.scroll(function () {

    newscroll = mywindow.scrollTop();
    if (newscroll < 100) {
      $('.wrapper').stop().fadeIn("slow");
      up = !up;

    } else if (newscroll > mypos && !up) {
        $('#oliviaS').stop().fadeOut();
        $('.wrapper').stop().fadeOut("slow");
        up = !up;
        console.log(up);

    } else if(newscroll < mypos && up) {
        $('#oliviaS').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});