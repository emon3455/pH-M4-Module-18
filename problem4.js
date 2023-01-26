var a = 5;
var b = 8;
var c = 8;

if (a===b || a===c){
    console.log("Isosceles");
}
else if (b===a || b===c){
    console.log("Isosceles");
}

else if (c===a || c===b){
    console.log("Isosceles");
}

else{
    console.log("Not Isosceles");
}