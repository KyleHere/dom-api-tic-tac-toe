let currentPlayerSymbol= "x";
let squareValues = ["", "", "" , "", "", "", "", "", ""];
let gameStatus = ""

const checkGameStatus =  ( )=>{
    for(let i = 0; i < squareValues.length; i += 3){
        if(squareValues[i] === squareValues[i+1] === squareValues[i+2]){
            gameStatus = squareValues[i];
        }
    }
    for(let i = 0; i < 3; i++){
        if()
    }
}

window.addEventListener("DOMContentLoaded", () => {
    console.log(document.getElementById("tic-tac-toe-board"))
    document
        .getElementById("tic-tac-toe-board")

        .addEventListener("click", event => {
            const targetId = event.target.id;
            console.log(targetId)

            if(!targetId.startsWith("square-")) return;

            const squareIndex = Number.parseInt(targetId[targetId.length-1]);

            if(squareValues[squareIndex] !== "")  return;

            const img = document.createElement("img");
            img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`;

            event.target.appendChild(img);

            squareValues[squareIndex] = currentPlayerSymbol;

            if(currentPlayerSymbol === "x"){
                currentPlayerSymbol = "o"
            } else {
                currentPlayerSymbol = "x";
            };
        });

})
