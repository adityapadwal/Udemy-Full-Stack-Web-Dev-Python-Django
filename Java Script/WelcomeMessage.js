
var hour = new Date().getHours();
if(hour>=4 && hour<=11){
  document.body.style.backgroundColor="#fcf47c";
  document.getElementById('wlcmMsg()').innerHTML="Good Morning!";
  document.getElementById('welcomeImg()').src="morning.jfif";
}
else if(hour>=12 && hour<=18){
  document.body.style.backgroundColor="#ebb92f";
  document.getElementById('wlcmMsg()').innerHTML="Good Afternoon!";
  document.getElementById('welcomeImg()').src="afternoon.jfif";
}
else if(hour>=19 && hour<=22){
  document.body.style.backgroundColor="#e69840";
  document.getElementById('wlcmMsg()').innerHTML="Good Evening!";
  document.getElementById('welcomeImg()').src="evening.jfif";
}
else /*if(hour>=23 && hour<=3)*/{
  document.body.style.backgroundColor="#383735";
  document.getElementById('wlcmMsg()').innerHTML="Good Night!";
  document.getElementById('welcomeImg()').src="night.jfif";
}
