var value =prompt("Enter the color ");
do{
    var fname = prompt("Enter your name");
    var flag=0;
    for(var i=0;i<fname.length;i++){
        if(!isNaN(fname[i])){
            alert(" enter only character");
            flag++;
            break;
        }
    }}
    while(flag!=0);
    
    do{
        var flag2=0
        var pnumber = prompt("Enter your phone number");
        if(isNaN(pnumber)){
            alert("Enter only Number"); 
            flag2++; 
        }
        if(pnumber.length!=8){
            alert("Phone numder should be 8 numbers");
            flag2++;
        }
    }
    while(flag2!=0 );
    
    do{
        var flag3=0;
        const Pattern1= /^010/;
        const Pattern2= /^011/;
        const Pattern3= /^012/;
        var mnumber = prompt("Enter your mobile number");
        if(!((Pattern1.test(mnumber))||(Pattern2.test(mnumber))||(Pattern3.test(mnumber)))){
            alert("mobile number is wrong");
            flag3++;
        }
      
        if((isNaN(mnumber))){
            alert("mobile numder should be numbers only");
            flag3++;
        }
        if(mnumber.length!=11){
            alert("mobile numder should be 11 numbers");
            flag3++;
        }
    }while(flag3!=0)


const Pattern =  /^[a-z]{3}@(?:[0-9]{3}\.)[a-z]{2,3}$/i;
do{
var flag4 =0;
var myemail= prompt("enter your email")
if(!(Pattern.test(myemail))){
   alert("email address is wrong");
    flag4++;

}

}while(flag4!=0)

var today = new Date().toLocaleDateString();
document.writeln("<h2 style=color:"+value+"> Welcome Dear : "+fname+"</h2>");
document.writeln("<h2 style=color:"+value+"> your phone number is : "+pnumber+" </h2>");
document.writeln("<h2 style=color:"+value+"> your mobile number is : "+mnumber+" </h2>");
document.writeln("<h2 style=color:"+value+"> your email address is :"+myemail+" </h2>");
document.writeln("<h2 style=color:"+value+">Today is : "+today+"</h2> ");



