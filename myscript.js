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
createContainer(enteringArray);

let previousNumber = document.getElementById('id-0-0');
previousNumber.classList.toggle('selectCell');

const element = document.getElementById('container');

element.onclick = function (event) {

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
    let number;
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
            number = document.createElement('span');
            if (inputArray[i][j] !== 0) {
                number.innerHTML = inputArray[i][j];
                cell.classList.add("default");
            }
            count++;
            cell.classList.add("cell");
            cell.id = `id-${i}-${j}`;
            cell.classList.add("cell");
            if (i === 2 || i === 5) {
                cell.classList.add("separatingRowLine");
            }
            if (j === 2 || j === 5) {
                cell.classList.add("separatingColLine");
            }
            cell.appendChild(number);
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
            allCells[i].firstChild.innerHTML = '';
        }
        allCells[i].firstChild.classList.remove('repeating-number')
    }
}

function inputNumber(value) {
    let cell = document.querySelector('.selectCell');
    if (cell.className.indexOf("default")) {
        let coordinates = getId(cell.id);
        cell.firstChild.innerHTML = value;
        enteringArray[coordinates[0]][coordinates[1]] = value;
        // checkSquare(coordinates[0], coordinates[1], value);
        // checkColumn(coordinates[0], coordinates[1], value);
        // checkRow(coordinates[0], coordinates[1], value);
    }
}

