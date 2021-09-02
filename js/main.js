$(function(){
    $(document).ready(function(){       
        $('.carousel').flickity({
            // options
            cellAlign: 'center',
            initialIndex: 1,
            pageDots: false,
            prevNextButtons: false,
            // wrapAround: true,
            // autoPlay: true,
          });
    });

    $(".menu-btn").click(function(event){
        $(".menu-left").toggleClass("active");
        $(".menu-btn").toggleClass("active");
        $(".menu-right__login-link").toggleClass("unactive");
        $(".menu-right__try-btn").toggleClass("unactive");
      });

});