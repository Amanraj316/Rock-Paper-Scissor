let UserScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
let showmsg=document.querySelector("#msg");
let userS=document.querySelector("#userS");
let compS=document.querySelector("#compS");
let reset=document.querySelector("#restart");

reset.addEventListener("click",()=>{
    UserScore=0;
    CompScore=0;
    userS.innerText="0";
    compS.innerText="0";
    showmsg.innerText="Play Your Move!!";
})

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    let compChoice=Math.floor(Math.random()*3);
    return options[compChoice];
}

const drawGame=()=>{
    showmsg.innerText="Draw!!"
}

const showWinner=(userWin)=>{
    if(userWin){
        UserScore+=1;
        showmsg.innerText="You Win!!";
        userS.innerText=`${UserScore}`;
        console.log("You win!!");
    }else{
        CompScore+=1;
        compS.innerText=`${CompScore}`;
        showmsg.innerText="Computer Wins!!";
        console.log("You loose");
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
        console.log("Game was draw");
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }else{
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})