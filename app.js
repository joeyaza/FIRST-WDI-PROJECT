
$(document).ready(function(){
  var counterOne = 0
  var counterTwo = 0
  var turn = "player 1";
  var bub = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
  thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone,
  twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty] // my bubbles
  var i
  var play = true
  begin()



  function begin(){                                        
  // 
    function time1 (min, max) {                             
    //
      return Math.random() * (max - min) + min;
    }


    for (var i = 0; i < bub.length; i++){
      var $span = $(bub[i]);
      setInterval(moveDiv, time1(500, 6000), $span);

    }

    function moveDiv($span) {                                   
    // this makes the bubbles move around randomly
      $span.fadeOut(time1(300,700), function() {                  
      // takes the width and height of window then
        var maxLeft = $(window).width() - $span.width();          
        // gives random point here
        var maxTop = $(window).height() - $span.height();         
        // 3 factors - fade in, out time and duration between fading in/out
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos }).fadeIn(time1(300,700));
      });
    };


    $("body").prepend("<div id='bub2'><p> B U B B L E S </p><p>  CLICK    ME    TO    START    POPPING  </p></div>")
    $("#bub2").click(function(){
      $("#bub2").fadeOut("slow");
      playerOnePlays()
      game();
      // setTimeout();
    })


    function game() {

      $('.circle').click (function() {
        var audio = new Audio('sounds/Burst.mp3');
        audio.play()
        $(this).hide('explode');
        if (turn === "player 1") {
          counterOne++;
        } else {
          counterTwo++;
        }
        console.log("PLAYER1", counterOne, "PLAYER2", counterTwo);
      });

      $('.circle2').click (function() {
        var audio = new Audio('sounds/Pop2.mp3');
        audio.play()
        $(this).hide('explode');
        if (turn === "player 1") {
          counterOne++;
        } else {
          counterTwo++;
        }
        console.log("PLAYER1", counterOne, "PLAYER2", counterTwo);
      });
    }
    }

    function playerOnePlays() {
      setTimeout(function(){ 
        $("body").prepend("<div id='bub3'><p>PLAYER ONE YOU POPPED A DELICIOUS " + counterOne + " BUBBLES</p><p>PLAYER TWO, READY TO POP?</p></div>")
        $("#bub3").click(function(){
          $("#bub3").fadeOut("slow");
          turn = "player 2";
          playerTwoPlays()
            })
      }, 20000);
    }

    function playerTwoPlays() {
      setTimeout(function(){ 
        $("body").prepend("<div id = 'bub'><p>B U B B L E S</p><p>PLAYER ONE YOU POPPED A WHOLESOME "+ counterOne + " BUBBLES</p><p>PLAYER TWO YOU BURST A DECENT " + counterTwo +  " BUBBLES</p> <p>CLICK ANYWHERE YOU LIKE TO PLAY AGAIN</p></div>")
        $("#bub").click(function(){
          $("#bub").fadeOut("slow");
        })
        $('#bub').click (function() {
         location.reload()
       });
      }, 20000)
    }


      // setTimeout(function(){ 
      //   $("body").prepend("<div id='bub3'><p>PLAYER ONE YOU POPPED A DELICIOUS " + counterOne + " BUBBLES</p><p>PLAYER TWO, READY TO POP?</p></div>")
      // $("#bub3").click(function(){
      //   $("#bub3").fadeOut("slow");
      //   turn = "player 2";
      //   game();
      //   // setTimeout2();
      //   setTimeout(function(){ 
      //     $("body").prepend("<div id = 'bub'><p>B U B B L E S</p><p>PLAYER ONE YOU POPPED A WHOLESOME "+ counterOne + " BUBBLES</p><p>PLAYER TWO YOU BURST A DECENT " + counterTwo +  " BUBBLES</p> <p>CLICK ANYWHERE YOU LIKE TO PLAY AGAIN</p></div>")
      //     $("#bub").click(function(){
      //       $("#bub").fadeOut("slow");
      //       })
      //       $('#bub').click (function() {
      //        location.reload()
      //        });
      //     }, 2000)
      // })
      //   }, 2000);

      // setTimeout(function(){ 
      //   $("body").prepend("<div id = 'bub'><p>B U B B L E S</p><p>PLAYER ONE YOU POPPED A WHOLESOME "+ counterOne + " BUBBLES</p><p>PLAYER TWO YOU BURST A DECENT " + counterTwo +  " BUBBLES</p> <p>CLICK ANYWHERE YOU LIKE TO PLAY AGAIN</p></div>")
      //   $("#bub").click(function(){
      //     $("#bub").fadeOut("slow");
      //     })
      //     $('#bub').click (function() {
      //      location.reload()
      //      });
      //   }, 20000)






      //   var r = confirm("TIME IS UP, you have burst a delicious " + counterOne + " bubbles. player 2, ready to rock?");
      //   turn = "player 2";
      //   if (r == true) {
      //     setTimeout(function(){
      //       var t = confirm("good work player 2, you have popped a scrumtuous " + counterTwo + " bubbles")
      //       if (t == true) {
      //         $("body").prepend("<div id = 'bub'><p>B U B B L E S</p><p>PLAYER ONE YOU POPPED A WHOLESOME "+ counterOne + " BUBBLES</p><p>PLAYER TWO YOU BURST A DECENT " + counterTwo +  " BUBBLES</p> <p>CLICK ANYWHERE YOU LIKE TO PLAY AGAIN</p></div>")
      //         $('#bub').click (function() {
      //           console.log("hello")
      //           location.reload();
      //         })
      //       }
      //     }, 10000);


      //   }
      // }, 10000)


  })




