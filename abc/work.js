var persent = 0

function eatcount(){
  $(".monsterText").html("We are<br>SQUARE<br>MONSTER!")
}

var timer = 
setInterval(function(){
$(".bar").css("width",persent+"%")
persent+=1
if (persent>100){
$(".pageLoading").addClass("complete")
clearInterval(timer)
setTimeout(eatcount,3000)}
},30)