var timer=60;
var hitvalue=0;
var result=0; 



function makebubble(){
    let bubble= document.querySelector(".bottom-container");
let many="";
for(var i=1;i<=168;i++){
    many+= ` <div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
bubble.innerHTML=many;
}



function runtimer (){
   var timercount =setInterval(() => {
    if(timer>0){
     timer--;
     document.querySelector("#timer").textContent=timer;
    }
    else {
      clearInterval(timercount);
      document.querySelector(".bottom-container").innerHTML="<h1>Game Over</h1>"

    }
   }, 1000);

}



function runhitval(){
    hitvalue=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitvalue;
}

function score(){
   
    result+=10;
    document.querySelector("#scorevalue").innerHTML=result;
}
document.querySelector(".bottom-container").addEventListener('click' , function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitvalue){
        score();
        makebubble();
        runhitval();

    }
});
runhitval();
makebubble();
runtimer();