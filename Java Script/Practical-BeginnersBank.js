document.body.style.backgroundColor="#90befc";

var correctName='Aditya';
var correctPassword='Adi';
var currentBalance=150000;
function withdraw(){
  var nameAttempt=document.getElementById('nameForm').value;
  var passwordAttempt=document.getElementById('passForm').value;
  var amountAttempt=document.getElementById('amountForm').value;
  var newBalance=currentBalance-amountAttempt;
    if (nameAttempt != correctName){
      document.getElementById('feedback').innerHTML="Incorrect name:( Try Again";
    }
    else if(passwordAttempt != correctPassword){
      document.getElementById('feedback').innerHTML="Incorrect password:( Try Again";
    }
    else if(amountAttempt > currentBalance){
      document.getElementById('feedback').innerHTML="Insufficient Funds:(";
    }
    else{
      document.getElementById('feedback').innerHTML="Withdraw Successful! Your Current balance is: "+newBalance;
    }
}
