/*
let ime = "igor"
duzinaimena = ime.length
console.log(duzinaimena)


var zadnjeslovoimena = ime[ime.length -1]
console.log(zadnjeslovoimena)



function slova (imenica, zamenica, pridev, prilog){
    var result = "";
    
    result += "Pas " +imenica+ " je " + zamenica + " i " + pridev + " " + prilog
    return result;
}
console.log(slova("Mona","velika","trci","brzo"))
console.log(slova("Dino","velik","trcao","sporo"))




var ourArray = [18,64,99]
ourArray[1] = 45;
console.log(ourArray)  //64 promenjen u 45



ourArray.push("slobo","slobodan");
console.log(ourArray);  // dodaje ova dva elementa na array



console.log(ourArray.pop()); // ostao samo slobodan, ostalo skinuto 



var niz1 = [2344,324324,342466]
let removeFromArray = niz1.shift();
console.log(niz1); //izbacen prvi element niza



// POCINJU FUNKCIJE
function ourReusableFunction() {
    console.log("Heyya, World")
}
ourReusableFunction();



function ourFunctionWithArgs(a,b){
    console.log(a+b);
}
ourFunctionWithArgs(3,6) // passing the values into function



//FUNKCIJA KOJA OBJASNJAVA DA LOCAL VARIABLA IDE PRE GLOBAL VARIABLE
let spoljna = "majica"

function odeca(){
   let spoljna = "cipele"
    return spoljna
}
console.log(odeca()); //prikazuje cipele a ne majicu
console.log(spoljna);// prikazuje majica




function outTrueOrFalse(isItTrue) {
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log(outTrueOrFalse(true))




function testEqual(val) {
    if (val === 12){
        return "equal";
    }
    return "Not Equal"
}
console.log(testEqual("12"));//nije isto posto je string a ne number



//FUNKCIJA VECE OD
function testGreaterThan(val){
    if (val > 10){
        return "vece od 10"
    }

    if (val > 100){
        return "vece od 100"
    }
    return "10 ili manje"
}
console.log(testGreaterThan(1));



//TEST LOGICAL AND &&
function testLogicalAnd(val){
    if(val >= 25  && val <= 50){
        return "vrednost je od 25 do 50"
    }
    return "nije u ovom rasponu brojeva"
}
console.log(testLogicalAnd(43));

//ELSE IF
function testElseIf(broj){
    if (broj > 10){
        return "broj veci od 10"
    }
    else if(broj > 100){
        return "broj veci od 100"
    }
    else{
        return "broj manji od 10"
    }
}
console.log(testElseIf(44))

//CHAIN ELSE IF
function chain(ha){
    if (ha < 5){
        return "manji od 5"
    }
    else if (ha <10){
        return "manji od 10"
    }
    else if (ha < 15){
        return "manji od 15"
    }
    else if (ha < 20){
        return "manji od 20"
    }
    else{
        return "velki broj"
    }
    
}
console.log(chain(18));




//function ISLESS
function isLess(a,b){
   return a<b;
}
console.log(isLess(12,13));




//WHILE LOOP
let myArray = [];
let i=0;
while(i < 50){
    myArray.push(i);
    i++;
}
console.log(myArray);



//FOR LOOP
let our = [];

for (let i = 1; i < 6; i++){
    our.push(i);
}
console.log(our);



let ourr = [];

for (let i = 1; i < 6000000; i*=33){
    ourr.push(i);
}
console.log(ourr);

*/

//random function
function randomFunction(){
    return (Math.random())*10;//*10 sam ja dodao 
}
console.log(randomFunction());



//PARSE INT FUNCTION
function convertToInteger(str){
    return parseInt(str);
}
a = convertToInteger("033");
console.log(a);




