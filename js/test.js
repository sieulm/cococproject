// C1:
function count(start, stop, interval) {
  var a = 0;
  for (let i = start; i<= stop; i++) {
    setTimeout(function(){
      console.log(i);
    },interval * a);
    a++;
  }
}

// C2:
// function count(start, stop, interval) {
//   var a = 1;
//   for (let i = start; i <= stop; i++) {
//     if (i === start) {
//       console.log(i);
//     } else (
//       setTimeout(function(){
//             console.log(i);
//         },interval * a)
//     )
//     a++
//   }
// }

count(2, 15, 1000);
