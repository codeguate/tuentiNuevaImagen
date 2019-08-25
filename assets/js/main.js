$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_1", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_2", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_3", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_4", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_5", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_6", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_7", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_8", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger9",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_9", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger10",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#contein_row_10", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

     




    $("#resultadosInput").keyup(function () { 
        buscar($(this).val())
    });
    /*CODE ANTONY*/
    
    $("#button_row_2").click(function(){
      $("#contein_row_2 ").animate({
        width: "100%"
      },500);
      $("#contein_row_2 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_2 .col-img").removeClass("d-none");
      $("#contein_row_2 .col-img").addClass("d-flex");
      $("#contein_row_2.title h4").css("font-size","");
      $("#contein_row_2 .title_2").css("font-size","");
      $("#contein_row_2 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_2 #more-2").fadeIn();
    });

    $("#button_row_3").click(function(){
      console.log("click row 3 close");
      $("#contein_row_3").animate({
        width: "100%"
      },500);
      $("#contein_row_3 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_3 .col-img").removeClass("d-none");
      $("#contein_row_3 .col-img").addClass("d-flex");
      $("#contein_row_3.title h4").css("font-size","");
      $("#contein_row_3 .title_2").css("font-size","");
      $("#contein_row_3 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_3 #more-3").fadeIn();
    });
    $("#button_row_4").click(function(){
      console.log("click row 3 close");
      $("#contein_row_4").animate({
        width: "100%"
      },500);
      $("#contein_row_4 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_4 .col-img").removeClass("d-none");
      $("#contein_row_4 .col-img").addClass("d-flex");
      $("#contein_row_4.title h4").css("font-size","");
      $("#contein_row_4 .title_2").css("font-size","");
      $("#contein_row_4 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_4 #more-3").fadeIn();
    });
    $("#button_row_5").click(function(){
      console.log("click row 3 close");
      $("#contein_row_5").animate({
        width: "100%"
      },500);
      $("#contein_row_5 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_5 .col-img").removeClass("d-none");
      $("#contein_row_5 .col-img").addClass("d-flex");
      $("#contein_row_5.title h4").css("font-size","");
      $("#contein_row_5 .title_2").css("font-size","");
      $("#contein_row_5 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_5 #more-3").fadeIn();
    });
    $("#button_row_6").click(function(){
      console.log("click row 3 close");
      $("#contein_row_6").animate({
        width: "100%"
      },500);
      $("#contein_row_6 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_6 .col-img").removeClass("d-none");
      $("#contein_row_6 .col-img").addClass("d-flex");
      $("#contein_row_6.title h4").css("font-size","");
      $("#contein_row_6 .title_2").css("font-size","");
      $("#contein_row_6 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_6 #more-3").fadeIn();
    });
    $("#button_row_7").click(function(){
      console.log("click row 3 close");
      $("#contein_row_7").animate({
        width: "100%"
      },500);
      $("#contein_row_7 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_7 .col-img").removeClass("d-none");
      $("#contein_row_7 .col-img").addClass("d-flex");
      $("#contein_row_7.title h4").css("font-size","");
      $("#contein_row_7 .title_2").css("font-size","");
      $("#contein_row_7 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_7 #more-3").fadeIn();
    });
    $("#button_row_8").click(function(){
      console.log("click row 3 close");
      $("#contein_row_8").animate({
        width: "100%"
      },500);
      $("#contein_row_8 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_8 .col-img").removeClass("d-none");
      $("#contein_row_8 .col-img").addClass("d-flex");
      $("#contein_row_8.title h4").css("font-size","");
      $("#contein_row_8 .title_2").css("font-size","");
      $("#contein_row_8 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_8 #more-3").fadeIn();
    });
    $("#button_row_9").click(function(){
      console.log("click row 3 close");
      $("#contein_row_9").animate({
        width: "100%"
      },500);
      $("#contein_row_9 .contain_more_data").animate({
        left: "+=70%",
        opacity: 1,
        display: "none"
      },500);
      $("#contein_row_9 .col-img").removeClass("d-none");
      $("#contein_row_9 .col-img").addClass("d-flex");
      $("#contein_row_9.title h4").css("font-size","");
      $("#contein_row_9 .title_2").css("font-size","");
      $("#contein_row_9 .col-img").animate({
        opacity: 1,
        top: "0",
        height: "toggle"
      }, 500);
      $("#contein_row_9 #more-3").fadeIn();
    });
    /*END CODE 21/08/19*/
});
function animation(num){
  switch(num){
    case 2:
        console.log("execute row 2");
        $("#contein_row_2 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_2 .col-img").removeClass("d-flex");
          $("#contein_row_2 .col-img").addClass("d-none");
          
          $("#contein_row_2 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_2 .title h4").css("font-size","3em");
            $("#contein_row_2 .title_2").css("font-size","3em");
            $("#contein_row_2 #more-2").fadeOut();
            $("#contein_row_2 .contain_more_data").removeClass("d-none");
            $("#contein_row_2 .contain_more_data").addClass("d-flex");
            $("#contein_row_2 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 3:
        console.log("execute row 3");
        $("#contein_row_3 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_3 .col-img").removeClass("d-flex");
          $("#contein_row_3 .col-img").addClass("d-none");
          $("#contein_row_3 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_3.title h4").css("font-size","3em");
            $("#contein_row_3 .title_2").css("font-size","3em");
            $("#contein_row_3 #more-2").fadeOut();
            $("#contein_row_3 .contain_more_data").removeClass("d-none");
            $("#contein_row_3 .contain_more_data").addClass("d-flex");
            $("#contein_row_3 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 4:
        console.log("execute row 4");
        $("#contein_row_4 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_4 .col-img").removeClass("d-flex");
          $("#contein_row_4 .col-img").addClass("d-none");
          $("#contein_row_4 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_4.title h4").css("font-size","3em");
            $("#contein_row_4 .title_2").css("font-size","3em");
            $("#contein_row_4 #more-2").fadeOut();
            $("#contein_row_4 .contain_more_data").removeClass("d-none");
            $("#contein_row_4 .contain_more_data").addClass("d-flex");
            $("#contein_row_4 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 5:
        console.log("execute row 5");
        $("#contein_row_5 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_5 .col-img").removeClass("d-flex");
          $("#contein_row_5 .col-img").addClass("d-none");
          $("#contein_row_5 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_5.title h4").css("font-size","3em");
            $("#contein_row_5 .title_2").css("font-size","3em");
            $("#contein_row_5 #more-2").fadeOut();
            $("#contein_row_5 .contain_more_data").removeClass("d-none");
            $("#contein_row_5 .contain_more_data").addClass("d-flex");
            $("#contein_row_5 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 6:
        console.log("execute row 6");
        $("#contein_row_6 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_6 .col-img").removeClass("d-flex");
          $("#contein_row_6 .col-img").addClass("d-none");
          $("#contein_row_6 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_6.title h4").css("font-size","3em");
            $("#contein_row_6 .title_2").css("font-size","3em");
            $("#contein_row_6 #more-2").fadeOut();
            $("#contein_row_6 .contain_more_data").removeClass("d-none");
            $("#contein_row_6 .contain_more_data").addClass("d-flex");
            $("#contein_row_6 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 7:
        console.log("execute row 7");
        $("#contein_row_7 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_7 .col-img").removeClass("d-flex");
          $("#contein_row_7 .col-img").addClass("d-none");
          $("#contein_row_7 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_7.title h4").css("font-size","3em");
            $("#contein_row_7 .title_2").css("font-size","3em");
            $("#contein_row_7 #more-2").fadeOut();
            $("#contein_row_7 .contain_more_data").removeClass("d-none");
            $("#contein_row_7 .contain_more_data").addClass("d-flex");
            $("#contein_row_7 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 8:
        console.log("execute row 8");
        $("#contein_row_8 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_8 .col-img").removeClass("d-flex");
          $("#contein_row_8 .col-img").addClass("d-none");
          $("#contein_row_8 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_8.title h4").css("font-size","3em");
            $("#contein_row_8 .title_2").css("font-size","3em");
            $("#contein_row_8 #more-2").fadeOut();
            $("#contein_row_8 .contain_more_data").removeClass("d-none");
            $("#contein_row_8 .contain_more_data").addClass("d-flex");
            $("#contein_row_8 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
    case 9:
        console.log("execute row 9");
        $("#contein_row_9 .col-img").animate({
          opacity: 0.25,
          top: "-=50",
          height: "toggle"
        }, 500, function() {
          $("#contein_row_9 .col-img").removeClass("d-flex");
          $("#contein_row_9 .col-img").addClass("d-none");
          $("#contein_row_9 ").animate({
            width: "25%"
          },500,function(){
            $("#contein_row_9.title h4").css("font-size","3em");
            $("#contein_row_9 .title_2").css("font-size","3em");
            $("#contein_row_9 #more-2").fadeOut();
            $("#contein_row_9 .contain_more_data").removeClass("d-none");
            $("#contein_row_9 .contain_more_data").addClass("d-flex");
            $("#contein_row_9 .contain_more_data").animate({
              left: "-=70%",
              opacity: 1,
              display: "flex"
            },500);
          });
        });
    break;
  }
  
  
  //setTimeout(function(){$(".col-img").fadeOut()},1000);
}
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




  // code original
  // function animation(row){
  //   $(".col-img").animate({
  //     opacity: 0.25,
  //     top: "-=50",
  //     height: "toggle"
  //   }, 500, function() {
  //     $(this).removeClass("d-flex");
  //     $(this).addClass("d-none");
      
  //     $(".contein_row_2 ").animate({
  //       width: "25%"
  //     },500,function(){
  //       $(".title h4").css("font-size","3em");
  //       $(".title_2").css("font-size","3em");
  //       $("#more-2").fadeOut();
  //       $(".contain_more_data").removeClass("d-none");
  //       $(".contain_more_data").addClass("d-flex");
  //       $(".contain_more_data").animate({
  //         left: "-=70%",
  //         opacity: 1,
  //         display: "flex"
  //       },500);
  //     });
  //   });
    
  //   //setTimeout(function(){$(".col-img").fadeOut()},1000);
  // }