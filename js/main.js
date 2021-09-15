$(function () {
  $(document).ready(function () {
    $('.carousel').flickity({
      // options
      cellAlign: 'center',
      initialIndex: 1,
      pageDots: false,
      prevNextButtons: false,
      setGallerySize: false
      // wrapAround: true,
      // autoPlay: true,
    });
  });

  $(".menu-btn").click(function (event) {
    $(".menu-left").toggleClass("active");
    $(".menu-btn").toggleClass("active");
    $(".menu-right__login-link").toggleClass("unactive");
    $(".menu-right__try-btn").toggleClass("unactive");
  });



  $(".footer-menu__item-title").click(function (event) {

    let sibling_itemContent = $(this).siblings(".footer-menu__item-content");

    if (sibling_itemContent.css('height') == '0px') {
      sibling_itemContent.css('height','auto');
    } else {
      sibling_itemContent.css('height', '0px');
    }
  });


  // adaptiveFooter();

  // function adaptiveFooter() {
  //   var mql = window.matchMedia('all and (max-width: 1020px)');
  //   if (mql.matches) {
  //     // размер окна 1020px или меньше
  //     $(".footer-info__grid").addClass("unactive");

  //   } else {
  //     // нет, размер окна более 1020px 
  //     $(".footer-info__grid").removeClass("unactive");
  //   }
  // };

  // var resizeTimer;
  // $(window).resize(function () {
  //   clearTimeout(resizeTimer);
  //   resizeTimer = setTimeout(adaptiveFooter, 100);
  // });
});