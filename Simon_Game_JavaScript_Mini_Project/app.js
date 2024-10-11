let gamesq= [];
let usersq= [];

let btns = ["yellow", "red","purple"," green"] ;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){

   if(started == false){
    console.log("Sdas");
    started = true;

    levelup();
   }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400); 


}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },400); 


}
function levelup(){

    usersq = [];

    level++;

    h2.innerText = `Level ${level}`;

    //random btn choose 

    let randindx = Math.floor(Math.random()*3);

    let randcolor = btns[randindx];

    let randbtn = document.querySelector(`.${randcolor}`);
gamesq.push(randcolor);
    btnflash(randbtn);


}

function checkAns(idx){

//let idx = level-1;

if(usersq[idx] == gamesq[idx]){
    if(usersq.length == gamesq.length){
       setTimeout( levelup, 1000);
    }
}else{
    h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key  to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
}

}

function btnpress(){ 

    let btn = this;

    userflash(btn);
    let usercolor = btn.getAttribute("id");
    usersq.push(usercolor);

    checkAns(usersq.length-1);
      
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}

function reset(){
    started = false;
    gamesq = [];
    usersq = [];
    level = 0;
}