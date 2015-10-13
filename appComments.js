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
  // this function begins when the window is loaded and starts the bubbles moving.
  function time1 (min, max) {                             
    // this is the function to randomise the time the bubble stays on the screen and the fade in/out time
    return Math.random() * (max - min) + min;
  }


  for (var i = 0; i < bub.length; i++){ 
    // to loop through my array of bubbles
    var $span = $(bub[i]);
    setInterval(moveDiv, time1(700, 6000), $span);

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
  // brings up the initial title on the screen, introducing the game 
  $("#bub2").click(function(){
    // clicking on the title fades out the title and calls the function game and playerOnePlays
    $("#bub2").fadeOut("slow");
    playerOnePlays()
    game();
  })


  function game() {
    // this function defines what happens when a bubble is clicked on.
    //firstly a sound is played, also it fades out the bubble to hide (then re-appear somewhere else on the page.)
    // finally, it adds a point to the players counter.
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
  // this is a function to define what happens when player one has played, so 
  // after a lapsed amount of time. in this case 25 seconds. 
  // this 
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
  // same as player one but for second player, when time has lapsed brings up 
  // the counters and allows you to play again
  setTimeout(function(){ 
    $("body").prepend("<div id = 'bub'><p>B U B B L E S</p><p>PLAYER ONE YOU POPPED A WHOLESOME "+ counterOne + " BUBBLES</p><p>PLAYER TWO YOU BURST A SCRUMTUOUS " + counterTwo +  " BUBBLES</p> <p>CLICK ANYWHERE YOU LIKE TO PLAY AGAIN</p></div>")
    $("#bub").click(function(){
      $("#bub").fadeOut("slow");
    })
    $('#bub').click (function() {
     location.reload()
   });
  }, 20000)
}
})




