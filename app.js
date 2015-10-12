$(document).ready(function(){
  var counterOne = 0
  var counterTwo = 0
  var turn = "player 1";
  var bub = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
  thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone,
  twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty]
  var i
  var play = true


    alert("Welcome to bubbles...lets go ...");



    $('.circle').click (function() {
      var audio = new Audio('Burst.mp3');
      audio.play()
      $(this).hide("explode");
      if (turn === "player 1") {
        counterOne++;
      } else {
        counterTwo++;
      }
      console.log("PLAYER1", counterOne, "PLAYER2", counterTwo);
    });

  $('.circle2').click (function() {
    var audio = new Audio('Pop2.mp3');
    audio.play()
    $(this).hide("explode");
    if (turn === "player 1") {
      counterOne++;
    } else {
      counterTwo++;
    }
    console.log("PLAYER1", counterOne, "PLAYER2", counterTwo);
  });




  function time1 (min, max) {
    return Math.random() * (max - min) + min;
  }


  for (var i = 0; i < bub.length; i++){
    var $span = $(bub[i]);
    setInterval(moveDiv, time1(500, 6000), $span);

  }

  function moveDiv($span) {
    $span.fadeOut(time1(300,700), function() {
      var maxLeft = $(window).width() - $span.width();
      var maxTop = $(window).height() - $span.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 1))
      var topPos = Math.floor(Math.random() * (maxTop + 1))

      $span.css({ left: leftPos, top: topPos }).fadeIn(time1(300,700));
    });
  };



  setTimeout(function(){ 
    var r = confirm("TIME IS UP, you have burst a delicious " + counterOne + " bubbles. player 2, ready to rock?");
    turn = "player 2";
    if (r == true) {
      setTimeout(function(){
        var t = confirm("good work player 2, you have popped a scrumtuous " + counterTwo + " bubbles")
        if (t == true) {
          $("body").prepend("<div id = 'bub'><p>B U B B L E S</p><p>player one, you have popped a very wholesome "+ counterOne + " bubbles</p><p>player two, on the other hand, you have burst a decent " + counterTwo +  " bubbles CLICK ANYWHERE YOU LIKE TO PLAY AGAIN ...</p></div>")
          $('#bub').click (function() {
            console.log("hello")
            location.reload();
          })
        }
      }, 500);
      

    }
  }, 500)


  
  
 
})




