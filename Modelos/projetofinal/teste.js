// function convertDate(inputFormat) {
//     function pad(s) { return (s < 10) ? '0' + s : s; }
//     var d = new Date(inputFormat);
//     return [pad(d.getUTCDate()), pad(d.getUTCMonth()+1), d.getUTCFullYear()].join('/');
//   }
  
//   console.log(convertDate('2022-12-31')); // output: "01/03/2022"
  

function convertDateBack(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [d.getUTCFullYear() + "-" + pad(d.getUTCMonth()+1) + "-" + pad(d.getUTCDate())];
}

console.log(convertDateBack('10/10/1994'))