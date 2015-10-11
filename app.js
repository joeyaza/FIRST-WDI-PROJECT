$(document).ready(function(){
  var counter = 0;
  var bub = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
  thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone,
  twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight,
  twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive,
  thirtysix, thirtyseven, thirtyeight, thirtynine, forty];
  var i;

    $('.circle').on("click", function() {
      $(this).remove();
      counter++;
      console.log(counter.length);
      if (counter.length == 29){
        alert("all popped!");
      }
    })

    function time1 (min, max) {
      return Math.random() * (max - min) + min;
    }

    // function time2 (min, max) {
    //   return Math.random() * (800 - 400) + 400 ;
    // }



  function moveDiv($span) {
    // console.log($span)
    $span.fadeOut(time1(300,700), function() {
      var maxLeft = $(window).width() - $span.width();
      var maxTop = $(window).height() - $span.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 1))
      var topPos = Math.floor(Math.random() * (maxTop + 1))

      $span.css({ left: leftPos, top: topPos }).fadeIn(time1(300,700));
    });
  };

  // setTimeout(function(){ alert("TIME IS UP"); }, 10000);

  for (var i = 0; i < bub.length; i++){
    var $span = $(bub[i]);
    setInterval(moveDiv, time1(2000, 7000), $span);

  }

})



  // function moveDiv2() {

  //   var $span = $("#two");
    
  //   $span.fadeOut(700, function() {
  //     var maxLeft = $(window).width() - $span.width();
  //     var maxTop = $(window).height() - $span.height();
  //     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
  //     var topPos = Math.floor(Math.random() * (maxTop + 1))

  //     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  //   });
  // };

  // setInterval(moveDiv2, 3000);

//   function moveDiv3() {

//     var $span = $("#three");
    
//     $span.fadeOut(700, function() {
//       var maxLeft = $(window).width() - $span.width();
//       var maxTop = $(window).height() - $span.height();
//       var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//       var topPos = Math.floor(Math.random() * (maxTop + 1))

//       $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//     });
//   };


//   setInterval(moveDiv3, 3000);

// });

// function moveDiv4() {

//   var $span = $("#four");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv4, 3000);

// function moveDiv5() {

//   var $span = $("#five");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv5, 3000);

// function moveDiv6() {

//   var $span = $("#six");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv6, 3000);

// function moveDiv7() {

//   var $span = $("#seven");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv7, 3000);


// function moveDiv8() {

//   var $span = $("#eight");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv8, 3000);

// function moveDiv9() {

//   var $span = $("#nine");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv9, 3000);


// function moveDiv10() {

//   var $span = $("#ten");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv10, 3000);

// function moveDiv11() {

//   var $span = $("#eleven");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv11, 3000);

// function moveDiv12() {

//   var $span = $("#twelve");

//   $span.fadeOut(900, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(600);
//   });
// };


// setInterval(moveDiv12, 4000);


// function moveDiv13() {

//   var $span = $("#thirteen");

//   $span.fadeOut(400, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(900);
//   });
// };


// setInterval(moveDiv13, 3900);

// function moveDiv14() {

//   var $span = $("#fourteen");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv14, 3500);

// function moveDiv15() {

//   var $span = $("#fifteen");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv15, 2000);

// function moveDiv15() {

//   var $span = $("#fifteen");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv15, 2000);

// function moveDiv16() {

//   var $span = $("#sixteen");

//   $span.fadeOut(400, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(900);
//   });
// };


// setInterval(moveDiv16, 1000);

// function moveDiv17() {

//   var $span = $("#seventeen");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv17, 3500);

// function moveDiv18() {

//   var $span = $("#eighteen");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv18, 4000);

// function moveDiv19() {

//   var $span = $("#nineteen");

//   $span.fadeOut(600, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
//   });
// };


// setInterval(moveDiv19, 2000);

// function moveDiv20() {

//   var $span = $("#twenty");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv20, 2000);

// function moveDiv21() {

//   var $span = $("#twentyone");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv21, 2000);

// function moveDiv22() {

//   var $span = $("#twentytwo");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv22, 2000);

// function moveDiv23() {

//   var $span = $("#twentythree");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv23, 3000);

// function moveDiv24() {

//   var $span = $("#twentyfour");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv24, 7000);

// function moveDiv25() {

//   var $span = $("#twentyfive");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv25, 1000);

// function moveDiv26() {

//   var $span = $("#twentysix");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv26, 1200);

// function moveDiv27() {

//   var $span = $("#twentyseven");

//   $span.fadeOut(1000, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(1500);
//   });
// };


// setInterval(moveDiv27, 3000);

// function moveDiv28() {

//   var $span = $("#twentyeight");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv28, 2000);

// function moveDiv29() {

//   var $span = $("#twentynine");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv29, 2500);

// function moveDiv30() {

//   var $span = $("#thirty");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv30, 4500);

// function moveDiv31() {

//   var $span = $("#thirtyone");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv31, 2000);

// function moveDiv32() {

//   var $span = $("#thirtytwo");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv32, 2000);

// function moveDiv33() {

//   var $span = $("#thirtythree");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv33, 3000);

// function moveDiv34() {

//   var $span = $("#thirtyfour");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv34, 7000);

// function moveDiv35() {

//   var $span = $("#thirtyfive");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv35, 1000);

// function moveDiv36() {

//   var $span = $("#thirtysix");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv36, 1200);

// function moveDiv37() {

//   var $span = $("#thirtyseven");

//   $span.fadeOut(1000, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(1500);
//   });
// };


// setInterval(moveDiv37, 3000);

// function moveDiv38() {

//   var $span = $("#thirtyeight");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv38, 2000);

// function moveDiv39() {

//   var $span = $("#thirtynine");

//   $span.fadeOut(700, function() {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(700);
//   });
// };


// setInterval(moveDiv39, 2500);

// // soundManager.setup({
// //   url: "./swf/",
// //   preferFlash: true,
// //   onready: myPlayer.setup.bind(myPlayer)

// // })








































// // $(document).ready(function(){
// //   animateDiv();


// //   for (var i=0; i <(".circle").length; i++) 
// //     return ".circle[i]";


// //   function makeNewPosition(){

// //     // Get viewport dimensions (remove the dimension of the div)
// //     var h = $(window).height()-50;
// //     var w = $(window).width()-50;
    
// //     var nh = Math.floor(Math.random() * h);
// //     var nw = Math.floor(Math.random() * w);
    
// //     return [nh,nw];
// //     console.log(nh, nw);    
    
// //   }

// //   function setFade(){
// //     $(".circle").fadeToggle((1000),600);}

// //     function animateDiv(){
// //       var newq = makeNewPosition();
// //       var oldq = $('.circle').offset();
// //       var speed = calcSpeed([oldq.top, oldq.right, oldq.left, oldq.bottom], newq);

// //       $('#one').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         animateDiv(),
// //         setFade();   
// //         // $('#two').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //   animateDiv();         
// //         //   $('#three').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //     animateDiv(); 
// //         //     $('#four').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //       animateDiv();   
// //         //       $('#five').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //         animateDiv();         
// //         //         $('#six').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //           animateDiv();
// //         //           $('#seven').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //             animateDiv();   
// //         //             $('#eight').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //               animateDiv();         
// //         //               $('#nine').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                 animateDiv();
// //         //                 $('#ten').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                   animateDiv();   
// //         //                   $('#eleven').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                     animateDiv();         
// //         //                     $('#twelve').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                       animateDiv();
// //         //                       $('#thirteen').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                         animateDiv();   
// //         //                         $('#fourteen').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                           animateDiv();         
// //         //                           $('#fifteen').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                             animateDiv();
// //         //                             $('#ten').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                               animateDiv();   
// //         //                               $('#eleven').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                                 animateDiv();         
// //         //                                 $('#twelve').animate({ top: newq[0], left: newq[1] }, speed, function(){
// //         //                                   animateDiv();
// //         //                                 }); }); }); }); }); }); }); }); }); });}); });
// // });

// // };
// // setInterval(function(){
// //   $(".circle").fadeToggle(1000);
// // }, 600);


// // function calcSpeed(prev, next) {

// //   var x = Math.abs(prev[1] - next[1]);
// //   var y = Math.abs(prev[0] - next[0]);

// //   var greatest = x > y ? x : y;

// //   var speedModifier = 0.03;

// //   var speed = Math.ceil(greatest/speedModifier);

// //   return speed;

// // }

// // });










// // // $(document).ready(function(){

// // // var colour = [FFE6FF, FF99FF, FFB2FF, FFCCFF, FFB2FF, FFC2FF, FFD1FF,
// // // FFE0FF, FFF0FF, FFADFF, FFB8FF, FFC2FF, FFCCFF, FFD6FF, FFE0FF, FFEBFF, 
// // // FFF5FF, E699FF, EBADFF, F0C2FF, F5D6FF, FAEBFF, CCCCFF, D6D6FF, E0E0FF,
// // // EBEBFF, FFDBFF, FFE0FF, FFE6FF, FFEBFF, FFF0FF, FFF5FF, FFFAFF, B2B2FF,
// // // C2C2FF, D1D1FF, E0E0FF, F0F0FF, FFB8FF, FFC2FF, FFCCFF, FFD6FF,FFE0FF]

