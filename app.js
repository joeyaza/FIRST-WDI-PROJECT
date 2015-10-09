



// $(document).ready(function(){

// // var colour = [FFE6FF, FF99FF, FFB2FF, FFCCFF, FFB2FF, FFC2FF, FFD1FF,
// // FFE0FF, FFF0FF, FFADFF, FFB8FF, FFC2FF, FFCCFF, FFD6FF, FFE0FF, FFEBFF, 
// // FFF5FF, E699FF, EBADFF, F0C2FF, F5D6FF, FAEBFF, CCCCFF, D6D6FF, E0E0FF,
// // EBEBFF, FFDBFF, FFE0FF, FFE6FF, FFEBFF, FFF0FF, FFF5FF, FFFAFF, B2B2FF,
// // C2C2FF, D1D1FF, E0E0FF, F0F0FF, FFB8FF, FFC2FF, FFCCFF, FFD6FF,FFE0FF]
    
    setInterval(function(){
        $("#1").fadeToggle(1000);
    }, 200);

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(){
//     var newq = makeNewPosition();
//     $('#1').animate({ top: newq[0], left: newq[1] }, function(){
//       animateDiv();        
//     });
    
// };

// });