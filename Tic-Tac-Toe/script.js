let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const reset=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.style.color="grey";
            box.innerText="O";
            turnO=false;
        }else{
            box.style.color="black"
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        chechWin();
    })
})

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const chechWin=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("Win!!!",pos1);
                showWinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);