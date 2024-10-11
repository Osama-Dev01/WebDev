// let para = document.createElement("p");
// para.innerText = " hey yoo mN";
// document.querySelector('body').append(para);

// para.classList.add('red');\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let bt = document.createElement("button");
// let imput = document.createElement("input");
// bt.innerText = " Click me";

let btn = document.querySelector("button");


btn.addEventListener("click" , function(){

let h3 = document.querySelector("h3");
let c = getc();
h3.innerText = c;

let div = document.querySelector("div");
div.style.backgroundColor = c;

});

function getc(){
    let red= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;    
}
