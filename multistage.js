
// multiple condition:
var money =25;

var juice = 30;
var cock = 20;
var tea = 10;

if(money >= juice){
    console.log("i will drink juice");
}

else if (money >= cock){
    console.log("i will drink cock");
}

else if (money >= tea){
    console.log("i will drink tea");
}

else{
    console.log(" i am on diet");
}



//-------------- nested condition:---------------
var graduate = false;
var cgpa = 3.90;

if (graduate === true){
    if(cgpa >= 3.5){
        console.log("you can apply for the job");
    }
    else{
        console.log("your cgpa is low you cannot apply");
    }
}

else{
    console.log("you are not eligible for the job");
}

console.log(6 != 6);