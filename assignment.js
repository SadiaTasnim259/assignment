 function kilometerToMeter(km){
     var meter= km*1000;
     return meter;
 }
  var meter= kilometerToMeter(5);
  console.log(meter);


  function budgetCalculator(watchItem,phoneItem,laptopItem){
    var watch= watchItem*50;
    var phone= phoneItem*100;
    var laptop=laptopItem*500;
    var total= watch+ phone+ laptop;
    return total;
  }
    var budget= budgetCalculator(3,3,2);
    console.log(budget);


  function hotelCost(days){
      var cost=0;
      if(days<=10){
          cost=days*100;
      }
      else if(days<=20){
          var firstDays=10*100;
          var remaining=days-10;
          var secondDays= remaining*80;
          cost= firstDays+secondDays;
      }
      else{
        var firstDays=10*100;
        var secondDays=10*80;
        var remaining=days-20;
        var thirdDays=remaining*50;
        cost= firstDays+secondDays+thirdDays;
      }
      return(cost);
  }
  var totalDays=hotelCost(25);
  console.log(totalDays);


  function megaFriend(friend){
  var max = friend[0];
  for(var i=0; i<friend.length; i++){
      var element = friend[i];
      if(element.length > max.length){
          max = element;
      }
  }
  return max;
}
  var friend= ['sumi','tania','nandini','lindaaaa','nusrat','sadia'];
  var bigname = megaFriend (friend);
  console.log (bigname);
  