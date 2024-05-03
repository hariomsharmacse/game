const boxes = document.querySelectorAll('.box');
const winningMsg = document.getElementById('msg');
const btn = document.getElementById('game-btn');
let turnX = true;
const winsPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnX){
            box.innerText = "✔️";
            turnX = false;
        }else{
            box.innerText = "❌";
            turnX = true;
        }
        box.disabled = true;
        checkWin();
    })
})


function checkWin(){
    for(let win of winsPattern){
        let pattern0 = boxes[win[0]].innerText;
        let pattern1 = boxes[win[1]].innerText;
        let pattern2 = boxes[win[2]].innerText;
        if(pattern0 != "" && pattern1 != "" && pattern2 != ""){
            if(pattern0 == pattern1 && pattern1 == pattern2){
                winningMsg.innerText = `Congratulations winner is ${pattern0}`;
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }
    }
}

btn.addEventListener('click', () => {
    turnX = true;
    winningMsg.innerText = "";
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
})