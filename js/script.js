

$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  });

  var BV = new $.BigVideo({useFlashForFirefox:false});
          BV.init();
          BV.show('images/gotous.mp4',{ambient:false});
