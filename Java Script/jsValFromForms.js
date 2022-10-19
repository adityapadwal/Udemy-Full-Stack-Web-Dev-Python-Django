var correctName="Aditya";
var correctPass="Adi31";

function returnInfo(){
  var nameVar=document.getElementById('nameForm').value;
    var namePass=document.getElementById('passForm').value;
  if(nameVar==correctName && namePass==correctPass){
    document.body.style.backgroundColor="yellow";
    alert("Access Granted :)");
  }
  else{
    document.body.style.backgroundColor="grey";
    alert("Access Denied :(")
  }
}
function Calculator(){
  var one = document.getElementById('num1').value;
  var two = document.getElementById('num2').value;
  var result=one*two;
  alert("Your multiplication result is: "+result);
}
