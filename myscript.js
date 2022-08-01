const rows = 9;
const cols = 9;

const defaultArray =
    [[0, 1, 9, 0, 0, 0, 0, 0, 2],
        [7, 2, 0, 9, 0, 3, 5, 0, 8],
        [0, 8, 0, 0, 0, 4, 0, 9, 7],
        [0, 0, 0, 4, 0, 0, 0, 8, 5],
        [8, 0, 0, 1, 6, 2, 0, 3, 0],
        [0, 6, 7, 0, 0, 0, 0, 1, 9],
        [0, 0, 0, 0, 4, 0, 9, 0, 6],
        [9, 4, 0, 0, 0, 6, 8, 0, 0],
        [6, 5, 2, 0, 9, 1, 0, 0, 3]];
let enteringArray = defaultArray;

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
let previousElement = document.getElementById('id-0-0');
previousElement.classList.toggle('selectCell');

const element = document.getElementById('container');

element.onclick = function (event) {
    // let id = event.target.id;
    // getId(id);

    const selectedElement = document.getElementById(event.target.id)//target-ячейка, event.target.id-id ячейки

    if (selectedElement.id === 'container') {
        return;
    }

    // null, undefined, false, 0
    if (previousElement) {
        previousElement.classList.toggle('selectCell');
    }

    // let test = document.getElementsByClassName("selectCell");
    selectedElement.classList.toggle('selectCell');
    previousElement = selectedElement;
    // inputNumber();
    selectingSquare();

}


function onCellClick(event) {
    if (previousElement) {
        previousElement.classList.toggle('selectCell');
    }

    const selectedElement = document.getElementById(event.target.id)//target-ячейка, event.target.id-id ячейки
    selectedElement.classList.toggle('selectCell');
    previousElement = selectedElement;
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
    enteringArray = defaultArray;
    let allCells = document.querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].className.indexOf("default")) {
            allCells[i].innerHTML = '';
        }
    }
    console.log(defaultArray);
}

function inputNumber(value) {
    let cell = document.querySelector('.selectCell');
    if (cell.className.indexOf("default")) {
        let coordinates = getId(cell.id);
        enteringArray[coordinates[0]][coordinates[1]] = value;
        cell.innerHTML = value;
    }
}

function selectingSquare() {
    let i, j;
    let selectedI, selectedJ;
    let allCells = document.querySelectorAll('.cell');
    let selectCell = document.querySelector('.selectCell')
    let temp = getId(selectCell.id);
    selectedI = temp[0];
    selectedJ = temp[1];
    for (let k = 0; k < allCells.length; k++) {
        if (selectedI < 3 && selectedJ < 3) {
            console.log('Square 1')
            // someFunction(0, 0)
            allCells[0].classList.toggle('selectSquare');
            allCells[1].classList.toggle('selectSquare');
            allCells[2].classList.toggle('selectSquare');
            allCells[9].classList.toggle('selectSquare');
            allCells[10].classList.toggle('selectSquare');
            allCells[11].classList.toggle('selectSquare');
            allCells[18].classList.toggle('selectSquare');
            allCells[19].classList.toggle('selectSquare');
            allCells[20].classList.toggle('selectSquare');
        } else if (selectedI < 3 && selectedJ > 2 && selectedJ < 6) {
            console.log('Square 2')
            // someFunction(0, 3)
            allCells[3].classList.toggle('selectSquare');
            allCells[4].classList.toggle('selectSquare');
            allCells[5].classList.toggle('selectSquare');
            allCells[12].classList.toggle('selectSquare');
            allCells[13].classList.toggle('selectSquare');
            allCells[14].classList.toggle('selectSquare');
            allCells[21].classList.toggle('selectSquare');
            allCells[22].classList.toggle('selectSquare');
            allCells[23].classList.toggle('selectSquare');

        } else if (selectedI < 3 && selectedJ > 5) {
            console.log('Square 3')
            // someFunction(0, 6)
            allCells[6].classList.toggle('selectSquare');
            allCells[7].classList.toggle('selectSquare');
            allCells[8].classList.toggle('selectSquare');
            allCells[15].classList.toggle('selectSquare');
            allCells[16].classList.toggle('selectSquare');
            allCells[17].classList.toggle('selectSquare');
            allCells[24].classList.toggle('selectSquare');
            allCells[25].classList.toggle('selectSquare');
            allCells[26].classList.toggle('selectSquare');

        } else if (selectedI > 2 && selectedI < 6 && selectedJ < 3) {
            console.log('Square 4')
            // someFunction(3, 0)
            allCells[27].classList.toggle('selectSquare');
            allCells[28].classList.toggle('selectSquare');
            allCells[29].classList.toggle('selectSquare');
            allCells[36].classList.toggle('selectSquare');
            allCells[37].classList.toggle('selectSquare');
            allCells[38].classList.toggle('selectSquare');
            allCells[45].classList.toggle('selectSquare');
            allCells[46].classList.toggle('selectSquare');
            allCells[47].classList.toggle('selectSquare');

        } else if (selectedI > 2 && selectedI < 6 && selectedJ > 2 && selectedJ < 6) {
            console.log('Square 5')
            // someFunction(3, 3)
            allCells[30].classList.toggle('selectSquare');
            allCells[31].classList.toggle('selectSquare');
            allCells[32].classList.toggle('selectSquare');
            allCells[39].classList.toggle('selectSquare');
            allCells[40].classList.toggle('selectSquare');
            allCells[41].classList.toggle('selectSquare');
            allCells[48].classList.toggle('selectSquare');
            allCells[49].classList.toggle('selectSquare');
            allCells[50].classList.toggle('selectSquare');

        } else if (selectedI > 2 && selectedI < 6 && selectedJ > 5) {
            console.log('Square 6')
            // someFunction(3, 6)
            allCells[33].classList.toggle('selectSquare');
            allCells[34].classList.toggle('selectSquare');
            allCells[35].classList.toggle('selectSquare');
            allCells[42].classList.toggle('selectSquare');
            allCells[43].classList.toggle('selectSquare');
            allCells[44].classList.toggle('selectSquare');
            allCells[51].classList.toggle('selectSquare');
            allCells[52].classList.toggle('selectSquare');
            allCells[53].classList.toggle('selectSquare');

        } else if (selectedI > 5 && selectedJ < 3) {
            console.log('Square 7')
            // someFunction(6, 0)
            allCells[54].classList.toggle('selectSquare');
            allCells[55].classList.toggle('selectSquare');
            allCells[56].classList.toggle('selectSquare');
            allCells[63].classList.toggle('selectSquare');
            allCells[64].classList.toggle('selectSquare');
            allCells[65].classList.toggle('selectSquare');
            allCells[72].classList.toggle('selectSquare');
            allCells[73].classList.toggle('selectSquare');
            allCells[74].classList.toggle('selectSquare');

        } else if (selectedI > 5 && selectedJ > 2 && selectedJ < 6) {
            console.log('Square 8')
            // someFunction(6, 3)
            allCells[57].classList.toggle('selectSquare');
            allCells[58].classList.toggle('selectSquare');
            allCells[59].classList.toggle('selectSquare');
            allCells[66].classList.toggle('selectSquare');
            allCells[67].classList.toggle('selectSquare');
            allCells[68].classList.toggle('selectSquare');
            allCells[75].classList.toggle('selectSquare');
            allCells[76].classList.toggle('selectSquare');
            allCells[77].classList.toggle('selectSquare');

        } else if (selectedI > 5 && selectedJ > 5) {
            console.log('Square 9')
            // someFunction(6, 6)
            allCells[60].classList.toggle('selectSquare');
            allCells[61].classList.toggle('selectSquare');
            allCells[62].classList.toggle('selectSquare');
            allCells[69].classList.toggle('selectSquare');
            allCells[70].classList.toggle('selectSquare');
            allCells[71].classList.toggle('selectSquare');
            allCells[78].classList.toggle('selectSquare');
            allCells[79].classList.toggle('selectSquare');
            allCells[80].classList.toggle('selectSquare');
        }
    }
}

// function someFunction(i, j) {
//     let allCells = document.querySelectorAll('.cell');
//     let id;
//     // for (let k = 0; k < allCells.length; k++) {
//     for (let k = 0; k < allCells.length; k++) {
//         for (i; i < i + 3; i++) {
//             for (j; i < j + 3; j++) {
//                 id = getId(allCells[k].id);
//                 if (i === id[0] && j === id[1])
//                     console.log(allCells[k].id);
//
//             }
//         }
//     }
// }

// selectingSquare();

