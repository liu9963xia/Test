var time=6;
var oDiv=document.querySelector(".main_div");
function run () {
	time--;
	var h1=document.querySelector("h1");
	h1.innerText=time;
	if (time==0) {
		clearInterval(timer);
		h1.style.display="none";
//		oDiv.style.transition="background-image 0.5s"
	}
}
var timer=null;
timer=setInterval(run,1000);
