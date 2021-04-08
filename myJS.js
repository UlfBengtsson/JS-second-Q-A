const arrayOfBoxes = [
    [["red"],["blue"],["green"]],
    [["blue"],["green"],["red"]],
    [["green"],["red"],["blue"]]
];
const myBoard = document.getElementById("board");
var greenBoxes = [];

function makeBox(color, y, x) {
    let newBox = document.createElement("div");

    newBox.id = "y" + y + "x" + x;
    newBox.classList.add("box");
    newBox.classList.add(color + "Box");
    myBoard.appendChild(newBox);

    if(color == "green") {
        greenBoxes.push(newBox);
    }
}

for (let y = 0; y < arrayOfBoxes.length; y++) {

    //console.log(arrayOfBoxes[y]);

    for (let x = 0; x < arrayOfBoxes[y].length; x++) {

        //console.log(arrayOfBoxes[y][x][0]);
        makeBox(arrayOfBoxes[y][x], y, x);
    }
    
}

//console.log(greenBoxes);

//----- form code ---------------------------------------

document.getElementById("bigLetters").addEventListener('change' , inspectKey);

function inspectKey(event) {
    console.log(event);
    console.log(event.target.value);
    document.getElementById("bigLetters").value = event.target.value.toUpperCase();
}
