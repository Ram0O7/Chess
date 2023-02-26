import { chessPieces, chessThemes } from "./chessMetaData.js";
const chessBoard = document.getElementById("board");

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

    const pawns = document.querySelectorAll(".squire");

    //positioning pawns at their specified positions
    pawns.forEach((pawn, index) => {
        const chessOfficialsWhite = [chessPieces.white.rook, chessPieces.white.knight, chessPieces.white.bishop];
        const chessOfficialsBlack = [chessPieces.black.rook, chessPieces.black.knight, chessPieces.black.bishop];
        if (index < 3)
            pawn.innerText = chessOfficialsWhite[index];
        if (index === 3)
            pawn.innerText = chessPieces.white.queen;
        if (index === 4)
            pawn.innerText = chessPieces.white.king;
        if (index >= 5 && index <= 7)
            pawns[index].innerText = chessOfficialsWhite.reverse()[index - 5];
        if (index >= 8 && index <= 15)
            pawn.innerText = chessPieces.white.pawn;
        if (index >= 48 && index <= 55)
            pawn.innerText = chessPieces.black.pawn;
        if (index >= 56 && index <= 58)
            pawns[index].innerText = chessOfficialsBlack[index - 56];
        if (index === 59)
            pawn.innerText = chessPieces.black.queen;
        if (index >= 60)
            pawns[index].innerText = chessOfficialsBlack.reverse()[index - 61]
        if (index === 60)
            pawn.innerText = chessPieces.black.king;
    })

    pawns.forEach(pawn => {
        if (pawn.innerText !== "") {
            pawn.style.cursor = "pointer";
        }
    })
}

export default CreateChessCanvas;