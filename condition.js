// basic conditional operations:

var productPrice = 35000;
var myMoney = 150000;

if(productPrice <= myMoney){
    console.log("Hurray!! , i can but the Product")
}
else{
    console.log("Oh!! No , i cannot buy the product");
}

// handle multiple conditions:

var graduated = true;
var salary = 50000;
var richkid = false;
var cars = 1;

// condition duitai full fill korte hbe
if(graduated === true && salary >20000){
    console.log("cholo prem kori");
}
else{
    console.log("Prem kora jabe nah");
}


// j kono akta condition full fill korte prlei hbe]
if(graduated === true ||  richkid == true){
    console.log("cholo prem kori");
}
else{
    console.log("Prem kora jabe nah");
}


// complex condition
if( ( (graduated== true || richkid == true) && cars >=1) || (salary>=60000) ){
    console.log("Tomak biye kora jay");
}
else{
    console.log("nah tmr bow palar murod nai");
}


