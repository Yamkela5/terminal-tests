module.exports=function countAllPaarl(regNumbr){
  var list = regNumbr.split(', ');
  var number =[];

  for(var i=0;i<list.length;i++){

      if(list[i].startsWith('CJ')){
        number.push(list[i]);
 }
}
return number;
};
// module.exports = function countAllPaarl(regNo){
//   var newRegNo = regNo.split(',');
//   var paarlReg = [];
//   for (var i=0; i<newRegNo.length; i++){
//     if (newRegNo[i].startsWith('CJ')){
//       paarlReg.push(newRegNo[i])
//     }
//   }
//   return paarlReg;
// };
