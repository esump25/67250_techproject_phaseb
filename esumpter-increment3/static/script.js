var x = 5
var y = 7
var z = x + y 
console.log(z)
A = "Hello"
B = "world!"
var C = A + B
console.log(C)
function sumnPrint(x1, x2){
    var sum = x1 + x2
    console.log(sum)
}
sumnPrint(x, y);
sumnPrint(A, B);
if (C.length > z) {
    console.log(C)
    if (C.length < z) {
    console.log(z)
    }
} else {
    console.log("good job!")
}
L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];


function findBanana(item) {
    if (item == "Banana") {
        alert("Found the Banana!");
    }
}
//L1.forEach(findBanana);
//L2.forEach(findBanana);

//Beginning of the new code for increment 3
var now = new Date();
var hours = now.getHours();
function greeting(x) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if (x < 5 || x >= 20) {
            greetingElement.innerHTML = "Good night from MonoMuse!";
        } else if (x < 12) {
            greetingElement.innerHTML = "Good morning from MonoMuse!";
        } else if (x < 18) {
            greetingElement.innerHTML = "Good afternoon from MonoMuse!";
        } else {
            greetingElement.innerHTML = "Good evening from MonoMuse!";
        }
    } 
}
greeting(hours);

function addYear(){
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        var existingText = yearElement.innerHTML;
        yearElement.innerHTML = currentYear + " " + existingText;
    }
}
