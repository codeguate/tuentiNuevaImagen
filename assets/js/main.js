$(document).ready(function () {
    $("#resultadosInput").keyup(function () { 
        buscar($(this).val())
    });
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