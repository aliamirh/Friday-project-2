$(document).ready(function(){
  $("#test").submit(function(event){
    event.preventDefault();
    var favoriteDay = parseInt($("select#favoriteDay").val());
    var sports = parseInt($("select#sports").val());
    var games = parseInt($("select#games").val());
    var car = parseInt($("select#car").val());
    var pet = parseInt($("select#pet").val());
