module.exports=function totalPhoneBill(data) {
var total = 0;
var cost=data.split(', ')

  for (var i=0;i<cost.length;i++){
  switch (cost[i]){
    case 'call' :
   total += 2.75;
    break;
    case 'sms' :
      total += 0.65;
      break;

}
  }


return 'R' + total.toFixed(2);
}
//totalPhoneBill('call, sms, call, sms, sms');
