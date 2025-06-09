function animateScore(scoreElement) {
    scoreElement.classList.add("bounce");
    setTimeout(() => {
        scoreElement.classList.remove("bounce");
    }, 1000);
}

const ObjectImg1={
    Rock:"rock.png",
    Paper:"paper.png",
    Scissors:"scissors.png",
}

let Choices=document.querySelectorAll(".choices");
let message=document.querySelector(".msg");
let U=document.querySelector(".UserScore");
let W=document.querySelector(".CompScore");
let UserImg=document.querySelector("#userbox");
let CompImg=document.querySelector("#compbox");
let userScore=0;
let compScore=0;
let YTName=prompt("Enter Your Name");
let oper3=document.querySelector("#ABCDE");
let oper4=document.querySelector("#ABCD");
oper3.innerText=`${YTName} Chooses`;

let compChoice=()=>{
    let P=["Rock","Paper","Scissors"];
    let C=Math.floor((Math.random())*3);
    oper4.innerText=`Computer Chooses ${P[C]}`;
    return P[C];
}

let PlayGame=(A)=>{
    let B=compChoice();
    UserImg.setAttribute("src",ObjectImg1[A]);
    CompImg.setAttribute("src",ObjectImg1[B]);
    if (A===B){
        message.innerText="Draw! Try Again";
        message.style.backgroundColor="black";
        message.style.color="white";
    }
    else{
        let user=true;
        if(A==="Rock"){
            user=B==="Scissors"?true:false;
        }
        else if(A==="Paper"){
            user=B==="Rock"?true:false;
        }
        else{
            user=B==="Paper"?true:false;
        }
        gameResult(A,B,user);
    }
}

Choices.forEach((Choice)=>{
    Choice.addEventListener("click",()=>{
        let userChoice=Choice.getAttribute("id");
        oper3.innerText=`${YTName} Chooses ${userChoice}`;
        PlayGame(userChoice);
    })
});

let gameResult=(A,B,user)=>{
    if (user){
        userScore++;
        U.innerText=userScore;
        message.innerText="Congrats!You Won";
        message.style.backgroundColor="green";
        message.style.color="yellow";
    }
    else{
        compScore++;
        W.innerText=compScore;
        message.innerText="Oh No!You Lost";
        message.style.backgroundColor="red";
        message.style.color="yellow";
    }
}