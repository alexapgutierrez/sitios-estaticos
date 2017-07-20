var goingOn = document.getElementById("goingOn")
var boxTwittear = document.getElementById("twittear")

boxTwittear.addEventListener("click", function(){
  goingOn.classList.add("active")
})


$(window).load(function(){
  $("#header").sticky({ topSpacing: 0 });
});
