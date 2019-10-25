$(document).ready(function(){
  $("#test").submit(function(event){
    event.preventDefault();
    var favoriteDayNum = parseInt($("select#favoriteDay").val());
    var sportsNum = parseInt($("select#sports").val());
    var gamesNum = parseInt($("select#games").val());
    var carNum = parseInt($("select#car").val());
    var petNum = parseInt($("select#pet").val());
    console.log(petNum);
    var addNum = favoriteDayNum + sportsNum + gamesNum + carNum + petNum;

    if(addNum <=10){
      $(".csharp").show();
    }else if ( addNum === 20 ){
      $(".python").show();
    }else{
      $(".javascript").show();
    }
  });
});
