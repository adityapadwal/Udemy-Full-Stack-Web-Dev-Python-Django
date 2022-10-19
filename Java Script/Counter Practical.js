var  value= 0;
var colorArray=["#ffabab","#ff8f8f","#f05959","#d43131","#5c1313","#3d0909"];

function add(){
  value+=1;
  if(value > 6)
  {
    alert("Don't go above 6");
  }
  else
  {
    document.getElementById('count').innerHTML=('Count: '+value);
  }
  if(value == 0)
  {
    document.body.style.backgroundColor="#ffffff";
  }
  else
  {
    document.body.style.backgroundColor=colorArray[value-1];
  }
}

function sub(){
  value-=1;
  if(value < 0)
  {
    alert("Don't go below 0");
  }
  else
  {
    document.getElementById('count').innerHTML=('Count: '+value);
  }
  if(value == 0)
  {
    document.body.style.backgroundColor="#ffffff";
  }
  else
  {
    document.body.style.backgroundColor=colorArray[value-1];
  }
}
