$(document).ready(function () {
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    var controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.1, // show, when scrolled 10% into view
        duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: -150 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-1", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.1, // show, when scrolled 10% into view
        duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: -165 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-2", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.1, // show, when scrolled 10% into view
        duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: -230 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-3", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-4", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-5", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-6", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-7", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-8", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger9",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-9", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger10",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-10", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger11",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-11", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger12",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-12", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger13",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-13", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger14",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-14", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger15",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-15", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger16",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-16", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger17",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-17", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger18",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-18", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger19",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-19", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger20",
        triggerHook: 0.7, // show, when scrolled 10% into view
        duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0 // move trigger to center of element
      })
      .setClassToggle("#trigger-row-20", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);



     




    $("#resultadosInput").keyup(async function () { 
        // await limpiarBusqueda();
        await buscar($(this).val())
    });



    new ScrollMagic.Scene({
      triggerElement: "#trigger-img-1",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 300 // move trigger to center of element
    })
    .setClassToggle("#signal1", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#trigger-img-2",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 300 // move trigger to center of element
    })
    .setClassToggle("#signal2", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "#trigger-img-3",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 300 // move trigger to center of element
    })
    .setClassToggle("#signal3", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    new ScrollMagic.Scene({
      triggerElement: "#trigger-img-4",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 300 // move trigger to center of element
    })
    .setClassToggle("#signal4", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    new ScrollMagic.Scene({
      triggerElement: "#trigger-img-5",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 300 // move trigger to center of element
    })
    .setClassToggle("#signal5", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    /*CODE ANTONY*/
    
    $("#button_row_2").click(function(){
      if ($(window).width() < 960) {
          console.log("click mobil click");
          
          $("#contein_row_2 .contain_more_data").animate({
            opacity: "0.2",
            left: "+100%"
          },500,function(){
            $("#contein_row_2 .col-f").removeClass("d-none");
            $("#contein_row_2 .col-f").addClass("d-flex");
            $("#contein_row_2 .contain_more_data").removeClass("d-flex");
            $("#contein_row_2 .contain_more_data").addClass("d-none");
            $("#contein_row_2 .col-f").animate({
              opacity: "1",
              left: "0%",
              width: "100%"
            },500,function(){
              console.log("full");
              $("#contein_row_2").addClass("h-90");
              $("#contein_row_2").removeAttr("style","height: 100vh !important");
            });
          });
          
      }else {
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
          height: "toggle",
          display: "none"
        }, 500,function(){
          $("#contein_row_2 .contain_more_data").removeClass("d-flex");
          $("#contein_row_2 .contain_more_data").addClass("d-none");
        });
        $("#contein_row_2 #more-22").fadeIn();
      }
      
    });

    $("#button_row_3").click(function(){
      if ($(window).width() < 960) {
        console.log("click mobil click");
          
          $("#contein_row_3 .contain_more_data").animate({
            opacity: "0.2",
            left: "+100%"
          },500,function(){
            $("#contein_row_3 .col-f").removeClass("d-none");
            $("#contein_row_3 .col-f").addClass("d-flex");
            $("#contein_row_3 .contain_more_data").removeClass("d-flex");
            $("#contein_row_3 .contain_more_data").addClass("d-none");
            $("#contein_row_3 .col-f").animate({
              opacity: "1",
              left: "0%",
              width: "100%"
            },500,function(){
              console.log("full");
              $("#contein_row_3").addClass("h-90");
              $("#contein_row_3").removeAttr("style","height: 100vh !important");
            });
          });
      }else{
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
        $("#contein_row_3 #more-33").fadeIn();
      }
      
    });
    $("#button_row_4").click(function(){
      if ($(window).width() < 960) {
        console.log("click mobil click");
          
        $("#contein_row_4 .contain_more_data").animate({
          opacity: "0.2",
          left: "+100%"
        },500,function(){
          $("#contein_row_4 .col-f").removeClass("d-none");
          $("#contein_row_4 .col-f").addClass("d-flex");
          $("#contein_row_4 .contain_more_data").removeClass("d-flex");
          $("#contein_row_4 .contain_more_data").addClass("d-none");
          $("#contein_row_4 .col-f").animate({
            opacity: "1",
            left: "0%",
            width: "100%"
          },500,function(){
            console.log("full");
            $("#contein_row_4").addClass("h-90");
            $("#contein_row_4").removeAttr("style","height: 100vh !important");
          });
        });
      }else{
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
        $("#contein_row_4 #more-44").fadeIn();
      }
      
    });
    $("#button_row_5").click(function(){
      if ($(window).width() < 960) {
        console.log("click mobil click");
          
        $("#contein_row_5 .contain_more_data").animate({
          opacity: "0.2",
          left: "+100%"
        },500,function(){
          $("#contein_row_5 .col-f").removeClass("d-none");
          $("#contein_row_5 .col-f").addClass("d-flex");
          $("#contein_row_5 .contain_more_data").removeClass("d-flex");
          $("#contein_row_5 .contain_more_data").addClass("d-none");
          $("#contein_row_5 .col-f").animate({
            opacity: "1",
            left: "0%",
            width: "100%"
          },500,function(){
            console.log("full");
            $("#contein_row_5").addClass("h-90");
            $("#contein_row_5").removeAttr("style","height: 100vh !important");
          });
        });
      }else{
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
        $("#contein_row_5 #more-55").fadeIn();
      }
      
    });
    $("#button_row_6").click(function(){
      if ($(window).width() < 960) {
        console.log("click mobil click");
          
        $("#contein_row_6 .contain_more_data").animate({
          opacity: "0.2",
          left: "+100%"
        },500,function(){
          $("#contein_row_6 .col-f").removeClass("d-none");
          $("#contein_row_6 .col-f").addClass("d-flex");
          $("#contein_row_6 .contain_more_data").removeClass("d-flex");
          $("#contein_row_6 .contain_more_data").addClass("d-none");
          $("#contein_row_6 .col-f").animate({
            opacity: "1",
            left: "0%",
            width: "100%"
          },500,function(){
            console.log("full");
            $("#contein_row_6").addClass("h-90");
            $("#contein_row_6").removeAttr("style","height: 100vh !important");
          });
        });
      }else{
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
        $("#contein_row_6 #more-66").fadeIn();
      }
      
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
    ////////////////////////////
    $("#more-22").click(function(){
      if($(window).width()<1000){
        $("#contein_row_2 .col-f").animate({
          opacity: "0.2",
          left: "-100%",
          width: "100%"
        },500,function(){
          $("#contein_row_2 .col-f").removeClass("d-flex");
          $("#contein_row_2 .col-f").addClass("d-none");
          $("#contein_row_2 .contain_more_data").removeClass("d-none");
          $("#contein_row_2 .contain_more_data").addClass("d-flex");
          $("#contein_row_2").removeClass("h-90");
          $("#contein_row_2").attr("style","height: 100vh !important");
          $("#contein_row_2 .contain_more_data").animate({
            opacity: "1",
            left: "0"
          },500);
        });
      }else{
        animation(2);
      }
    });
    $("#more-33").click(function(){
      if($(window).width()<1000){
        console.log("more 33");
        $("#contein_row_3 .col-f").animate({
          opacity: "0.2",
          left: "-100%",
          width: "100%"
        },500,function(){
          $("#contein_row_3 .col-f").removeClass("d-flex");
          $("#contein_row_3 .col-f").addClass("d-none");
          $("#contein_row_3 .contain_more_data").removeClass("d-none");
          $("#contein_row_3 .contain_more_data").addClass("d-flex");
          $("#contein_row_3").removeClass("h-90");
          $("#contein_row_3").attr("style","height: 100vh !important");
          $("#contein_row_3 .contain_more_data").animate({
            opacity: "1",
            left: "0"
          },500);
        });
      }else{
        animation(3);
      }
    });
    $("#more-44").click(function(){
      if($(window).width()<1000){
        console.log("more 44");
        $("#contein_row_4 .col-f").animate({
          opacity: "0.2",
          left: "-100%",
          width: "100%"
        },500,function(){
          $("#contein_row_4 .col-f").removeClass("d-flex");
          $("#contein_row_4 .col-f").addClass("d-none");
          $("#contein_row_4 .contain_more_data").removeClass("d-none");
          $("#contein_row_4 .contain_more_data").addClass("d-flex");
          $("#contein_row_4").removeClass("h-90");
          $("#contein_row_4").attr("style","height: 100vh !important");
          $("#contein_row_4 .contain_more_data").animate({
            opacity: "1",
            left: "0"
          },500);
        });
      }else{
        animation(4);
      }
    });
    $("#more-55").click(function(){
      if($(window).width()<1000){
        console.log("more 55");
        $("#contein_row_5 .col-f").animate({
          opacity: "0.2",
          left: "-100%",
          width: "100%"
        },500,function(){
          $("#contein_row_5 .col-f").removeClass("d-flex");
          $("#contein_row_5 .col-f").addClass("d-none");
          $("#contein_row_5 .contain_more_data").removeClass("d-none");
          $("#contein_row_5 .contain_more_data").addClass("d-flex");
          $("#contein_row_5").removeClass("h-90");
          $("#contein_row_5").attr("style","height: 100vh !important");
          $("#contein_row_5 .contain_more_data").animate({
            opacity: "1",
            left: "0"
          },500);
        });
      }else{
        animation(5);
      }
    });
    $("#more-66").click(function(){
      if($(window).width()<1000){
        console.log("more 66");
        $("#contein_row_6 .col-f").animate({
          opacity: "0.2",
          left: "-100%",
          width: "100%"
        },500,function(){
          $("#contein_row_6 .col-f").removeClass("d-flex");
          $("#contein_row_6 .col-f").addClass("d-none");
          $("#contein_row_6 .contain_more_data").removeClass("d-none");
          $("#contein_row_6 .contain_more_data").addClass("d-flex");
          $("#contein_row_6").removeClass("h-90");
          $("#contein_row_6").attr("style","height: 100vh !important");
          $("#contein_row_6 .contain_more_data").animate({
            opacity: "1",
            left: "0"
          },500);
        });
      }else{
        animation(6);
      }
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
          $("#contein_row_2.title h4").css("font-size","3em");
          $("#contein_row_2 .title_2").css("font-size","3em");
          $("#contein_row_2 #more-33").fadeOut();
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
            $("#contein_row_3 #more-33").fadeOut();
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
            $("#contein_row_4 #more-44").fadeOut();
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
            $("#contein_row_5 #more-55").fadeOut();
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
            $("#contein_row_6 #more-66").fadeOut();
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
var rows = [
  {
    id:1,
    keys:"cobertura",
    div:"contein_row_3",
    skills:"",
    titulo:"Cobertura en toda Guatemala"
  },
  {
    id:2,
    keys:"redes",
    div:"contein_row_5",
    skills:"",
    titulo:"Redes Ilimitadas"
  },
  {
    id:3,
    keys:"puntos de recarga",
    div:"contein_row_4",
    skills:"",
    titulo:"Puntos de Recarga"
  },
  {
    id:4,
    keys:"velocidad",
    div:"contein_row_2",
    skills:"",
    titulo:"El internet más veloz"
  },
  {
    id:5,
    keys:"combos",
    div:"contein_row_6",
    skills:"",
    titulo:"Combos Impresionantes"
  },
]
async function limpiarBusqueda(){
      await $("#alert1").animate({bottom:'0%'}, 100);
      await $("#alert2").animate({bottom:'0%'}, 100);
      await $("#alert3").animate({bottom:'0%'}, 100);
      await $("#alert4").animate({bottom:'0%'}, 100);
      await $("#alert5").animate({bottom:'0%'}, 100);

      await setTimeout(() => {
        $("#alert1").removeClass("d-flex");
        $("#alert1").addClass("d-none");
        $("#alert2").removeClass("d-flex");
        $("#alert2").addClass("d-none");
        $("#alert3").removeClass("d-flex");
        $("#alert3").addClass("d-none");
        $("#alert4").removeClass("d-flex");
        $("#alert4").addClass("d-none");
        $("#alert5").removeClass("d-flex");
        $("#alert5").addClass("d-none");
      }, 150);
}
function buscar(text){
    if(text==""){
      limpiarBusqueda()
    }else{
      console.log(text);
      var temp = []
      var result = rows.forEach(element => {
          var fin = element.keys.indexOf(text)
          if(fin!=-1){
            temp.push(element) ;
          }
      });
      result = temp
      // if(element.keys==text){
      //   return 
      // }
      console.log(result);
      console.log(result.length);
      if(result.length>0 && result.length<=5){
        result.forEach((element,l) => {
          var res = '<span class="m-auto w-100"><a style="color:#ffffff;" href="#'+element.div+'"><strong>'+element.titulo+'</strong></a></span>'
          if($("#alert"+(l+1)).hasClass("d-none")){
            $("#alert"+(l+1)).removeClass("d-none");
            $("#alert"+(l+1)).addClass("d-flex");
            $("#alert"+(l+1)).html(res);

            $("#alert"+(l+1)).animate({bottom:(80-(15*(l)))+'%'}, 300);
            // $("#alert"+(l+1)).animate({bottom:'65%'}, 300);
            // $("#alert"+(l+1)).animate({bottom:'50%'}, 300);
            // $("#alert"+(l+1)).animate({bottom:'35%'}, 300);
            // $("#alert"+(l+1)).animate({bottom:'20%'}, 300);
          }
        });
        
      }else{
        limpiarBusqueda();
      }
      
      
      // $("#animate1").animate({display:''}, 300);
    }
   
    // $("#alert1").removeClass("iniciar");
    // $("#alert1").addClass("fin");
    
}

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml15 .word',
//     scale: [14,1],
//     opacity: [0,1],
//     easing: "easeOutCirc",
//     duration: 300,
//     delay: function(el, i) {
//       return 800 * i;
//     }
//   }).add({
//     targets: '.ml15',
//     opacity: 1,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });




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