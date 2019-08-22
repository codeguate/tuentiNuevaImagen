$(document).ready(function () {
    $("#resultadosInput").keyup(function () { 
        buscar($(this).val())
    });
    /*CODE ANTONY*/
    $(".arrow_more").click(function(){
      $(".col-img").animate({
        opacity: 0.25,
        top: "-=50",
        height: "toggle"
      }, 500, function() {
        $(this).removeClass("d-flex");
        $(this).addClass("d-none");
        
        $(".contein_row_2 ").animate({
          width: "33%"
        },500,function(){
          $(".title h4").css("font-size","4em");
          $(".title_2").css("font-size","4em");
          $("#more-2").fadeOut();
          $(".contain_more_data").removeClass("d-none");
          $(".contain_more_data").addClass("d-flex");
          $(".contain_more_data").animate({
            left: "-=66%",
            opacity: 1,
            display: "flex"
          },500);
        });
      });
      
      //setTimeout(function(){$(".col-img").fadeOut()},1000);
    });
    /*END CODE 21/08/19*/
});

function buscar(text){
    $("#alert1").animate({bottom:'80%'}, 300);
    // $("#alert1").removeClass("iniciar");
    // $("#alert1").addClass("fin");
    
    console.log(text);
    
}

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 300,
    delay: function(el, i) {
      return 300 * i;
    }
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });