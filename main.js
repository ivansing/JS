/*Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may 
not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach()
 when the order is important.
*/
const numbers = [45,4,9,16,25];
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
let i, len, text2;

for (let num = 0; num < numbers.length; num++) {
    text += "The number is " + num + "<br>";
}  

document.getElementById("forloop").innerHTML = text;

for (i = 0, len = cars.length, text2 = ""; i < len; i++) {
    text2 += cars[i] + "<br>";
}

document.getElementById("forloop2").innerHTML = text2;


const person= {fname: "Jhon", lname:"Doe", age:25};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

document.getElementById("forin").innerHTML = txt;




    
    let txt2 = "";
    numbers.forEach(myFunction);
    document.getElementById("forEach").innerHTML = txt2;
    
    function myFunction(value, index, array) {
        txt2 += value + "<br>";
    }

/*The For Of Loop
The JavaScript for of statement loops through the values of an iterable 
object.

It lets you loop over iterable data structures such as Arrays, Strings, 
Maps, NodeLists, and more:*/

let text3 = "";

for (let x of cars) {
    text3 += x + "<br>";
}

document.getElementById("forof").innerHTML = text3;
  