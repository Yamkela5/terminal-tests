  //module.exports=function countRegNumber(numberPlates){

     var number=numberPlates.split(',')
     var counting=number.length;

      console.log(number);
     console.log(counting);
    return counting;
   }

  countRegNumber('CA 182736,CY 523519,CJ 812328');
