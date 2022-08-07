const rows = 9;
const cols = 9;


let enteringArray;


function init() {
    let defaultArray; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        defaultArray =
            [[0, 1, 9, 0, 0, 0, 0, 0, 2],
                [7, 2, 0, 9, 0, 3, 5, 0, 8],
                [0, 8, 0, 0, 0, 4, 0, 9, 7],
                [0, 0, 0, 4, 0, 0, 0, 8, 5],
                [8, 0, 0, 1, 6, 2, 0, 3, 0],
                [0, 6, 7, 0, 0, 0, 0, 1, 9],
                [0, 0, 0, 0, 4, 0, 9, 0, 6],
                [9, 4, 0, 0, 0, 6, 8, 0, 0],
                [6, 5, 2, 0, 9, 1, 0, 0, 3]]; // displayName() uses variable declared in the parent function
    }

    displayName();
    return defaultArray;
}

init();
enteringArray = init();

function createArray() {
    let iter = 1;
    let mainArray = [];
    for (let i = 0; i < rows; i++) {
        let childArray = [];
        for (let j = 0; j < cols; j++) {
            // childArray[j] = [iter++];
            childArray[j] = [iter++];
        }
        mainArray[i] = childArray;
    }
    return mainArray;
}

let array = createArray()
// createContainer(array);
createContainer(enteringArray);

let previousNumber = document.getElementById('id-0-0');
previousNumber.classList.toggle('selectCell');

const element = document.getElementById('container');

element.onclick = function (event) {
    // let id = event.target.id;
    // getId(id);
    const selectedElement = document.getElementById(event.target.id)//target-ячейка, event.target.id-id ячейки

    if (selectedElement.id === 'container') {
        return;
    }

    // null, undefined, false, 0
    if (previousNumber) {
        previousNumber.classList.toggle('selectCell');
    }

    // let test = document.getElementsByClassName("selectCell");
    selectedElement.classList.toggle('selectCell');
    previousNumber = selectedElement;
    // inputNumber();
    // selectingSquare();
}


function onCellClick(event) {
    if (previousNumber) {
        previousNumber.classList.toggle('selectCell');
    }

    const selectedElement = document.getElementById(event.target.id)//target-ячейка, event.target.id-id ячейки
    selectedElement.classList.toggle('selectCell');
    previousNumber = selectedElement;
}

function getId(id) {
    let arrayId = id.split("-");
    arrayId.splice(0, 1);
    let i = parseInt(arrayId[0]);
    let j = parseInt(arrayId[1]);
    return arrayId;
}


function createContainer(inputArray) {
    let count = 1;
    let cell;
    const div = document.createElement('div');
    div.id = "container";
    div.setAttribute('ondblclick', "return false")
    div.setAttribute('onselectstart', "return false")
    div.setAttribute('onmousedown', "return false")
    div.setAttribute('ondragstart', "return false")
    div.setAttribute('ondrop', "return false")
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cell = document.createElement('div');
            if (inputArray[i][j] !== 0) {
                cell.innerHTML = inputArray[i][j];
                cell.classList.add("default");
            }
            count++;
            // let Id = "id" + '-' + i + '-' + j;
            cell.id = `id-${i}-${j}`;
            cell.classList.add("cell");
            if (i === 2 || i === 5) {
                cell.classList.add("separatingRowLine");
            }
            if (j === 2 || j === 5) {
                cell.classList.add("separatingColLine");
            }
            div.appendChild(cell);
        }
    }
    document.getElementById('mainContainer').appendChild(div);
}

function clearContainer() {
    enteringArray = init();
    let allCells = document.querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].className.indexOf("default")) {
            allCells[i].innerHTML = '';
        }
        allCells[i].classList.remove('repeating-number')
    }
}

function inputNumber(value) {
    let cell = document.querySelector('.selectCell');
    if (cell.className.indexOf("default")) {
        let coordinates = getId(cell.id);
        enteringArray[coordinates[0]][coordinates[1]] = value;
        cell.innerHTML = value;
        checkSquare(coordinates[0], coordinates[1], value);
        checkColumn(coordinates[0], coordinates[1], value);
        checkRow(coordinates[0], coordinates[1], value);
    }
}

function selectingSquare() {
    let selectedI, selectedJ;
    let selectCell = document.querySelector('.selectCell')
    let id = getId(selectCell.id);
    selectedI = id[0];
    selectedJ = id[1];
    if (selectedI < 3 && selectedJ < 3) {
        console.log('Square 1')
        someFunction(0, 0);
    } else if (selectedI < 3 && selectedJ > 2 && selectedJ < 6) {
        console.log('Square 2')
        someFunction(0, 3);
        ;
    } else if (selectedI < 3 && selectedJ > 5) {
        console.log('Square 3')
        someFunction(0, 6);

    } else if (selectedI > 2 && selectedI < 6 && selectedJ < 3) {
        console.log('Square 4')
        someFunction(3, 0);

    } else if (selectedI > 2 && selectedI < 6 && selectedJ > 2 && selectedJ < 6) {
        console.log('Square 5')
        someFunction(3, 3);

    } else if (selectedI > 2 && selectedI < 6 && selectedJ > 5) {
        console.log('Square 6')
        someFunction(3, 6);

    } else if (selectedI > 5 && selectedJ < 3) {
        console.log('Square 7')
        someFunction(6, 0);

    } else if (selectedI > 5 && selectedJ > 2 && selectedJ < 6) {
        console.log('Square 8')
        someFunction(6, 3);

    } else if (selectedI > 5 && selectedJ > 5) {
        console.log('Square 9')
        someFunction(6, 6);
    }
}

function someFunction(a, b) {
    let rows = a + 3;
    let cols = b + 3;
    for (let i = a; i < rows; i++) {
        for (let j = b; j < cols; j++) {
            let cellSquare = document.getElementById(`id-${i}-${j}`);
            cellSquare.classList.toggle('selectSquare')
        }
    }
}

function checkSquare(inputI, inputJ, inputValue) {
    let startRow, startCol;
    if (inputI < 3 && inputJ < 3) {
        console.log('Square 1')
        startRow = 0;
        startCol = 0;
    } else if (inputI < 3 && inputJ > 2 && inputJ < 6) {
        console.log('Square 2')
        startRow = 0;
        startCol = 3;
    } else if (inputI < 3 && inputJ > 5) {
        console.log('Square 3')
        startRow = 0;
        startCol = 6;

    } else if (inputI > 2 && inputI < 6 && inputJ < 3) {
        console.log('Square 4')
        startRow = 3;
        startCol = 0;

    } else if (inputI > 2 && inputI < 6 && inputJ > 2 && inputJ < 6) {
        console.log('Square 5')
        startRow = 3;
        startCol = 3;

    } else if (inputI > 2 && inputI < 6 && inputJ > 5) {
        console.log('Square 6')
        startRow = 3;
        startCol = 6;

    } else if (inputI > 5 && inputJ < 3) {
        console.log('Square 7')
        startRow = 6;
        startCol = 0;

    } else if (inputI > 5 && inputJ > 2 && inputJ < 6) {
        console.log('Square 8')
        startRow = 6;
        startCol = 3;

    } else if (inputI > 5 && inputJ > 5) {
        console.log('Square 9')
        startRow = 6;
        startCol = 6;
    }
    let rows = startRow + 3;
    let cols = startCol + 3;
    for (let i = startRow; i < rows; i++) {
        for (let j = startCol; j < cols; j++) {
            if (i == inputI && j == inputJ) continue;
            if (enteringArray[i][j] === inputValue) {
                let repeatingArrayNumber = document.getElementById(`id-${i}-${j}`);
                let repeatingInputNumber = document.getElementById(`id-${inputI}-${inputJ}`);
                let previousNumber = repeatingArrayNumber;
                if (previousNumber) {
                    previousNumber.classList.toggle('repeating-number');
                }

                // let test = document.getElementsByClassName("selectCell");
                repeatingArrayNumber.classList.toggle('repeating-number');
                previousNumber = repeatingArrayNumber;

                repeatingArrayNumber.classList.toggle('repeating-number');
                repeatingInputNumber.classList.toggle('repeating-number');

            }
        }
    }
}

function checkColumn(inputI, inputJ, inputValue) {

    for (let i = 0; i < 8; i++) {
        if (i == inputI) continue;
        if (enteringArray[i][inputJ] === inputValue) {
            let repeatingArrayNumber = document.getElementById(`id-${i}-${inputJ}`);
            let repeatingInputNumber = document.getElementById(`id-${inputI}-${inputJ}`);
            let previousNumber = repeatingArrayNumber;
            if (previousNumber) {
                previousNumber.classList.toggle('repeating-number');
            }

            // let test = document.getElementsByClassName("selectCell");
            repeatingArrayNumber.classList.toggle('repeating-number');
            previousNumber = repeatingArrayNumber;

            repeatingArrayNumber.classList.toggle('repeating-number');
            repeatingInputNumber.classList.toggle('repeating-number');
        }
    }
}
function checkRow(inputI, inputJ, inputValue) {

    for (let j = 0; j < 8; j++) {
        if (j == inputJ) continue;
        if (enteringArray[inputI][j] === inputValue) {
            let repeatingArrayNumber = document.getElementById(`id-${inputI}-${j}`);
            let repeatingInputNumber = document.getElementById(`id-${inputI}-${inputJ}`);
            let previousNumber = repeatingArrayNumber;
            if (previousNumber) {
                previousNumber.classList.toggle('repeating-number');
            }

            // let test = document.getElementsByClassName("selectCell");
            repeatingArrayNumber.classList.toggle('repeating-number');
            previousNumber = repeatingArrayNumber;

            repeatingArrayNumber.classList.toggle('repeating-number');
            repeatingInputNumber.classList.toggle('repeating-number');
        }
    }
}
