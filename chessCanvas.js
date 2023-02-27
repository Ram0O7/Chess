import { chessPieces, chessThemes } from "./chessMetaData.js";
const chessBoard = document.getElementById("board");
const mainPieces = ["pawn", "rook", "knight", "bishop", "queen", "king"];

const CreateChessCanvas = () => {
    //defining single square peace
    const squire = (row, column) => {
        const box = document.createElement("button");
        box.classList.add("squire");
        if ((row + column) % 2 === 0) {
            box.style.backgroundColor = "#b0c4de";
        } else {
            box.style.backgroundColor = "#ffffff";
        }
        chessBoard.append(box);
    };
    // creating 64 squire boxes and checking for dark and light instances using, (i+j) odd or even
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            squire(i, j);
        }
    }

    const squires = document.querySelectorAll(".squire");

    //positioning pawns at their specified positions
    squires.forEach((squire, index) => {
        const chessOfficialsWhite = [chessPieces.white.rook, chessPieces.white.knight, chessPieces.white.bishop];
        const chessOfficialsBlack = [chessPieces.black.rook, chessPieces.black.knight, chessPieces.black.bishop];
        if (index < 3)
            squire.innerText = chessOfficialsWhite[index];
        if (index === 3)
            squire.innerText = chessPieces.white.queen;
        if (index === 4)
            squire.innerText = chessPieces.white.king;
        if (index >= 5 && index <= 7)
            squires[index].innerText = chessOfficialsWhite.reverse()[index - 5];
        if (index >= 8 && index <= 15)
            squire.innerText = chessPieces.white.pawn;
        if (index >= 48 && index <= 55)
            squire.innerText = chessPieces.black.pawn;
        if (index >= 56 && index <= 58)
            squires[index].innerText = chessOfficialsBlack[index - 56];
        if (index === 59)
            squire.innerText = chessPieces.black.queen;
        if (index >= 60)
            squires[index].innerText = chessOfficialsBlack.reverse()[index - 61]
        if (index === 60)
            squire.innerText = chessPieces.black.king;
    })

    function identifyPawn(squire, index) {
        if ((index >= 48 && index <= 56) || (index >= 9 && index <= 16))
            squire.classList.add("pawn");
        if (index === 1 || index === 8 || index === 57 || index === 64)
            squire.classList.add("rook");
        if (index === 2 || index === 7 || index === 58 || index === 63)
            squire.classList.add("knight");
        if (index === 3 || index === 6 || index === 59 || index === 62)
            squire.classList.add("bishop");
        if (index === 4 || index === 60)
            squire.classList.add("queen");
        if (index === 5 || index === 61)
            squire.classList.add("king");
    }

    
    function setNextMove(pawn, position) {
        function rearrageEl() {
            position.classList.remove("selected");
            position.innerText = pawn.innerText;
            pawn.innerText = "";
            position.removeEventListener("click", rearrageEl);
        }
        position.addEventListener("click", rearrageEl);
    }
    
    function getMovePositions(squire, currentPos) {
        squires.forEach(squire => squire.classList.remove("selected"));
        if (squire.classList.contains("pawn")) {
            if (squire.classList.contains("black"))
            squires[currentPos - 8].classList.add("selected");
            if (squire.classList.contains("white"))
            squires[currentPos + 8].classList.add("selected");
        }
        //set element to next move
        squires.forEach(pos => {
            if (pos.classList.contains("selected")) {
                setNextMove(squire, pos);
            }
        })
    }

    function prepareMove(squire,index) {
        squires.forEach(squire => squire.style.color = "");
        squire.style.color = "green";
        identifyPawn(squire, index + 1);
        getMovePositions(squire, index);
        squire.removeEventListener("click", prepareMove);
    }

    squires.forEach((squire, index) => {
        if (index >= 0 && index <= 15) {
            squire.classList.add("white");
        }
        if (index >= 47 && index <= 63) {
            squire.classList.add("black")
        }
        if (squire.innerText !== "") {
            squire.style.cursor = "pointer";
            squire.addEventListener("click",() => prepareMove(squire,index));
        }
    })
}

export default CreateChessCanvas;