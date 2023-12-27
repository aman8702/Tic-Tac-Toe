
let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-btn");
let turn0=true;
let msgContainer=document.querySelector(".msgcontainer");
let Msg=document.querySelector("#msg");
const winpatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>{
    turn0=true;
    enabledbox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
    
    
});
const enabledbox =() =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const disabledbox =() =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbox(); 
}
const checkwinner = () => {
    for(let pattern of winpatterns){
       let pos1val= boxes[pattern[0]].innerText ;
       let pos2val= boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!= "" && pos3val!=""){
            if (pos1val===pos2val && pos1val==pos3val  ) {
                console.log("Winner",pos1val);
                showwinner(pos1val);
        }

    }
}
};
resetbtn.addEventListener("click",resetgame);
