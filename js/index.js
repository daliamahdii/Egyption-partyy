 /// <reference types="../@types/jquery" />

$("div.list").on("click",function(){
 $("div.screen").animate({width:'230px'},500);
 $(".screen ul").show()
 $(".screen ul i").show()
  $("div.list").css({marginLeft:"220px"})
 })



 
$(".closeicon").on("click",function(){
  $(".screen").animate({width:"0px"},500 ,function(){
  $(".screen ul").hide(0);
  
    $(".list").css({marginLeft:"0px"})
   
  })
})
    



$(".screen a").on("click",function(){
  const currentSection=$(this).attr('href')
  const currentScrollTop=$(currentSection).offsit().top
  $('html,body').animate({scrollTop:currentScrollTop},1000)
  
})


$(".singer h2").on("click",function(){
  $(this).next().slideToggle();
  $(".singer div").not($(this).next()).slideUp()

})

let countDownDate = new Date ("oct 30,2024" ).getTime();
let counter = setInterval(() =>{
  let dateNow = new Date().getTime();
  let dateDiff =countDownDate - dateNow ;
  
  let days=Math.floor(dateDiff /(1000 * 60 * 60 *24));
  let hours=Math.floor((dateDiff %(1000 * 60 * 60 *24))/(1000 *60 *60));
  let minutes=Math.floor((dateDiff %(1000 * 60 * 60 ))/(1000 *60 ));
  let seconds=Math.floor((dateDiff %(1000 * 60 ))/ 1000);
  document.querySelector("#days").innerHTML=days;
  document.querySelector("#hours").innerHTML=hours;
  document.querySelector("#minutes").innerHTML=minutes;
  document.querySelector("#seconds").innerHTML=seconds;
  if (dateDiff <0){
    clearInterval(counter);
  }

},1000)


function countChar(val){
  let len =val.value.length;
  if(len>=100){
    val.value=val.value.substring(0,100);
    $("#charNum").html('your available character finished');
  }else{
    $("#charNum").text(100 - len);
  }
};










 