let Choices=document.querySelectorAll(".box");
let msg=document.querySelector("#message");
let Hs=document.querySelector("#user-score");
let Cs=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;

Choices.forEach((Choice)=>{
    Choice.addEventListener("click",()=>{
        let userChoice=Choice.getAttribute("id");
        mainGame(userChoice);
    })
});

let getCompChoice=()=>{
    const options = ["rock", "paper", "scissor"];
    let g=Math.floor(Math.random()*3);
    return options[g];
};

let mainGame=(userChoice)=>{
    let compChoice=getCompChoice();
    if (userChoice===compChoice){
        msg.innerText="Draw! Try again";
        msg.style.backgroundColor="black";
        msg.style.color="white";
    }
    else{
        let user=true
        if (userChoice==="rock"){
            user=compChoice==="scissor"?true:false;
        }
        else if (userChoice==="paper"){
            user=compChoice==="rock"?true:false;
        }
        else{
            user=compChoice==="paper"?true:false;
        };
        gameResult(user,userChoice,compChoice);
    }
};

let gameResult=(user,userChoice,compChoice)=>{
    if (user){
        userScore++
        Hs.innerText=userScore;
        msg.innerText="Congratulation!You Won";
        msg.style.backgroundColor="green";
        msg.style.color="yellow";
    }
    else{
        compScore++
        Cs.innerText=compScore;
        msg.innerText="Oh No!You Lost";
        msg.style.backgroundColor="red";
        msg.style.color="yellow";
    }
}