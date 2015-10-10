$(document).ready(function(){
    animateDiv();
    makeNewPosition();

  
    
});

function setFade(){
    $(".circle2").fadeToggle((1000),600);}


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    // for (var i=0; i <.target.id)

    var newq = makeNewPosition();
    var oldq = $('.circle').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    


    $('#one').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.03;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

























































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

