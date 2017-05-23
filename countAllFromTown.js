module.exports=function countAllFromTown(regNumbr){
   var car  = regNumbr.split(',');
   var list =[];
  console.log(car);

  for(var i=0;i<car.length;i++){

      if(car[i].startsWith('CL')){
        list.push(car[i]);

 }
}
return list.length;
};
