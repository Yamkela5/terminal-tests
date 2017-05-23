module.exports=function yearsAgo(year)
{
 var date =new Date();
//var yamkela=new Date(year);

//var car=yamkela.getFullYear();
var OutCome = date.getFullYear();

  var size = OutCome - year;


 return size ;
}
//yearsAgo (2004)
