module.exports=function regCheck(registrationNumber,location) {
  var andiyaz=registrationNumber.endsWith(location);

  return andiyaz;

}
  //console.log(regCheck('DV 23  GP', 'GP'));
  // console.log(regCheck('DV 23 LP GP', 'MP'));
  // console.log(regCheck('CY189-012', 'CY'));
