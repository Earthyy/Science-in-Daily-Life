$(function() {

    $(".bars").on("click", function() {
        if($(".tabC").hasClass("active")) {
            $(".tabC").removeClass("active");
          $(this).find(a).html("<i class='fas fa-bars'></i>");


        } else{
            $(".tabC").addClass("active");
           $(this).find(a).html("<i class='fas fa-times'</i>");

           
        }
    });
   
});

var tabbar = document.getElementById('tabbar');
window.onscroll = function(){
    if(window.pageYOffset > 100) {
        tabbar.style.position='fixed';
        tabbar.style.top = 0;
    }
    else{
        tabbar.style.position='fixed';
        tabbar.style.top = 100;
    }
}


