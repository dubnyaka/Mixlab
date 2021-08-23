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

    $(document).ready(function(){       
        $('.article-carousel').flickity({
            // options
            cellAlign: 'center',
            groupCells: 2,
            pageDots: false,
            prevNextButtons: false,
            // autoPlay: true,
          });
    });

});