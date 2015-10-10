$(document).ready(function(){
  moveDiv();
  moveDiv2();
  moveDiv3();
  moveDiv4();
  moveDiv5();
  moveDiv6();
  moveDiv7();
  moveDiv8();
  moveDiv9();
  moveDiv10();
  moveDiv11();
  moveDiv12();
  moveDiv13();
  moveDiv14();
  moveDiv15();


  function moveDiv() {

    var $span = $("#one");
    
    $span.fadeOut(700, function() {
      var maxLeft = $(window).width() - $span.width();
      var maxTop = $(window).height() - $span.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 1))
      var topPos = Math.floor(Math.random() * (maxTop + 1))

      $span.css({ left: leftPos, top: topPos }).fadeIn(700);
    });
  };

  setInterval(moveDiv, 2000);

  function moveDiv2() {

    var $span = $("#two");
    
    $span.fadeOut(700, function() {
      var maxLeft = $(window).width() - $span.width();
      var maxTop = $(window).height() - $span.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 1))
      var topPos = Math.floor(Math.random() * (maxTop + 1))

      $span.css({ left: leftPos, top: topPos }).fadeIn(700);
    });
  };

  setInterval(moveDiv2, 3000);

  function moveDiv3() {

    var $span = $("#three");
    
    $span.fadeOut(700, function() {
      var maxLeft = $(window).width() - $span.width();
      var maxTop = $(window).height() - $span.height();
      var leftPos = Math.floor(Math.random() * (maxLeft + 1))
      var topPos = Math.floor(Math.random() * (maxTop + 1))

      $span.css({ left: leftPos, top: topPos }).fadeIn(700);
    });
  };


  setInterval(moveDiv3, 3000);

});

function moveDiv4() {

  var $span = $("#four");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv4, 3000);

function moveDiv5() {

  var $span = $("#five");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv5, 3000);

function moveDiv6() {

  var $span = $("#six");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv6, 3000);

function moveDiv7() {

  var $span = $("#seven");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv7, 3000);


function moveDiv8() {

  var $span = $("#eight");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv8, 3000);

function moveDiv9() {

  var $span = $("#nine");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv9, 3000);


function moveDiv10() {

  var $span = $("#ten");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv10, 3000);

function moveDiv11() {

  var $span = $("#eleven");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv11, 3000);

function moveDiv12() {

  var $span = $("#twelve");

  $span.fadeOut(900, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(600);
  });
};


setInterval(moveDiv12, 4000);


function moveDiv13() {

  var $span = $("#thirteen");

  $span.fadeOut(400, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(900);
  });
};


setInterval(moveDiv13, 3900);

function moveDiv14() {

  var $span = $("#fourteen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv14, 3500);

function moveDiv15() {

  var $span = $("#fifteen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv15, 2000);

function moveDiv15() {

  var $span = $("#fifteen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv15, 2000);

function moveDiv16() {

  var $span = $("#sixteen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv16, 2000);

function moveDiv17() {

  var $span = $("#seventeen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv17, 2000);

function moveDiv18() {

  var $span = $("#eighteen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv18, 2000);

function moveDiv19() {

  var $span = $("#nineteen");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv19, 2000);

function moveDiv20() {

  var $span = $("#twenty");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv20, 2000);

function moveDiv21() {

  var $span = $("#twentyone");

  $span.fadeOut(700, function() {
    var maxLeft = $(window).width() - $span.width();
    var maxTop = $(window).height() - $span.height();
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))

    $span.css({ left: leftPos, top: topPos }).fadeIn(700);
  });
};


setInterval(moveDiv21, 2000);












































// $(document).ready(function(){
//   animateDiv();


//   for (var i=0; i <(".circle").length; i++) 
//     return ".circle[i]";


//   function makeNewPosition(){

//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height()-50;
//     var w = $(window).width()-50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];
//     console.log(nh, nw);    
    
//   }

//   function setFade(){
//     $(".circle").fadeToggle((1000),600);}

//     function animateDiv(){
//       var newq = makeNewPosition();
//       var oldq = $('.circle').offset();
//       var speed = calcSpeed([oldq.top, oldq.right, oldq.left, oldq.bottom], newq);

//       $('#one').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         animateDiv(),
//         setFade();   
//         // $('#two').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //   animateDiv();         
//         //   $('#three').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //     animateDiv(); 
//         //     $('#four').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //       animateDiv();   
//         //       $('#five').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //         animateDiv();         
//         //         $('#six').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //           animateDiv();
//         //           $('#seven').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //             animateDiv();   
//         //             $('#eight').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //               animateDiv();         
//         //               $('#nine').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                 animateDiv();
//         //                 $('#ten').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                   animateDiv();   
//         //                   $('#eleven').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                     animateDiv();         
//         //                     $('#twelve').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                       animateDiv();
//         //                       $('#thirteen').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                         animateDiv();   
//         //                         $('#fourteen').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                           animateDiv();         
//         //                           $('#fifteen').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                             animateDiv();
//         //                             $('#ten').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                               animateDiv();   
//         //                               $('#eleven').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                                 animateDiv();         
//         //                                 $('#twelve').animate({ top: newq[0], left: newq[1] }, speed, function(){
//         //                                   animateDiv();
//         //                                 }); }); }); }); }); }); }); }); }); });}); });
// });

// };
// setInterval(function(){
//   $(".circle").fadeToggle(1000);
// }, 600);


// function calcSpeed(prev, next) {

//   var x = Math.abs(prev[1] - next[1]);
//   var y = Math.abs(prev[0] - next[0]);

//   var greatest = x > y ? x : y;

//   var speedModifier = 0.03;

//   var speed = Math.ceil(greatest/speedModifier);

//   return speed;

// }

// });










// // $(document).ready(function(){

// // var colour = [FFE6FF, FF99FF, FFB2FF, FFCCFF, FFB2FF, FFC2FF, FFD1FF,
// // FFE0FF, FFF0FF, FFADFF, FFB8FF, FFC2FF, FFCCFF, FFD6FF, FFE0FF, FFEBFF, 
// // FFF5FF, E699FF, EBADFF, F0C2FF, F5D6FF, FAEBFF, CCCCFF, D6D6FF, E0E0FF,
// // EBEBFF, FFDBFF, FFE0FF, FFE6FF, FFEBFF, FFF0FF, FFF5FF, FFFAFF, B2B2FF,
// // C2C2FF, D1D1FF, E0E0FF, F0F0FF, FFB8FF, FFC2FF, FFCCFF, FFD6FF,FFE0FF]

