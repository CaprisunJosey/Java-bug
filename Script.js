/*console.log("Hello from uverjava");alert("welcome");
document.querySelector("p").style.backgroundColor="green";
document.querySelector(".box");
document.querySelector("#demo");
document.getElementById("demo").innerHTML="hi";
document.getElementById("demo").innerText="text";
document.write("Hello World")*/

const button = document.querySelector("button");
button.addEventListener("click",function()
{console.log("Button Clicked")});

let score=50; 
score=score + 10;
console.log(score);


{
    let x=2
    console.log(x);
}

let x = 5;
x+=3;
console.log(x);

let BigInt= 123456789;
console.log(BigInt);

for (let i=0; i<5; i++) {
    console.log("counting:"+i);
}

let j = 0;
while (j<5) { 
    console.log("counting:" + j);
    j++;
}