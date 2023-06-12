var fNum = prompt("Enter First Number : ");
var secNum = prompt ("Enter Second Number : ");

fNum = parseInt(fNum, 10);
secNum = parseInt(secNum, 10);

var add, sub, mult, divide, modul;

add = fNum + secNum;

sub = fNum - secNum;

mult = fNum * secNum;

divide = fNum / secNum;

modul = fNum % secNum;

console.log("Addition is " + add + "<br/>");

console.log("Subtraction is " + sub + "<br/>");

console.log("Multiply is " + mult + "<br/>");

console.log("Divide is " + divide + "<br/>");

console.log("Modulus is " + modul + "<br/>");

