// document.getElementById('test').appendChild(table);
const rows = 10;
const cols = 10;

function createArray() {
    let iter = 1;
    let mainArray = [];
    for (let i = 1; i < rows; i++) {
        let childArray = [];
        for (let j = 1; j < cols; j++) {
            childArray[j] = [iter++];
        }
        mainArray[i] = childArray;
    }
    return mainArray;
}

// function addArrayInTheContainer(inputArray){
//     let count = 1;
//     let cell;
//     const div = document.createElement('div');
//     div.classList.add("container");
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             cell = document.createElement('div');
//             cell.innerHTML = inputArray[i][j];
//             count++;
//             let Id = "ID" + '-' + i + '-' + j;
//             cell.classList.add("cell",Id);
//             if(i=== 2 || i===5){
//                 cell.classList.add("separating-row-line");
//             }
//             if(j=== 2 || j===5){
//                 cell.classList.add("separating-col-line");
//             }
//             div.appendChild(cell);
//         }
//     }
//     document.getElementById('mainContainer').appendChild(div);
// }

// addArrayInTheContainer(createArray());

// tdElement.onclick = (event) => console.log(event.target.className);
// console.log(parseInt(event.target.className))

const tdElement = document.getElementById('mainContainer');
tdElement.onclick = function (event) {
    let className = event.target.className;
    getId(className)
}

// const tdElement = document.getElementById('mainContainer');
// tdElement.onclick = getId;

function getId(className) {
    let arrayId = className.split("-");
    arrayId.splice(0, 1);
    let id = parseInt(arrayId[0]);
    let jd = parseInt(arrayId[1]);
    const num = className.replace(/\D+/, '');
    console.log(num);
    console.log("i=" + id);
    console.log("j=" + jd);
    let content = event.target.textContent;
    console.log(content);
    // return arrayId;
}


function createContainer(inputArray) {
    let count = 1;
    let cell;
    const div = document.createElement('div');
    div.classList.add("container");
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            cell = document.createElement('div');
            cell.innerHTML = inputArray[i][j];
            count++;
            let Id = "id" + '-' + i + '-' + j;
            cell.classList.add("cell", Id);
            if (i === 3 || i === 6) {
                cell.classList.add("separatingRowLine");
            }
            if (j === 3 || j === 6) {
                cell.classList.add("separatingColLine");
            }
            div.appendChild(cell);
        }
    }
    document.getElementById('mainContainer').appendChild(div);
}

// function generateDivs(array) {
//     let count = 1;
//     const div = document.createElement('div');
//     div.classList.add("container");
//     for (let i = 1; i < rows; i++) {
//         for (let j = 1; j < cols; j++) {
//             let cell = document.createElement('div');
//             cell.innerHTML = '';
//             // cell.id = `${i}-${j}`;
//             let Id = "id" + '-' + i + '-' + j;
//             cell.classList.add("cell", Id)
//             if (i === 3 || i === 6) {
//                 cell.classList.add("separatingRowLine");
//             }
//             if (j === 3 || j === 6) {
//                 cell.classList.add("separatingColLine");
//             }
//
//             for (let k = 0; k < array.length; k++) {
//                 if (array[k].cellI === i && array[k].cellJ === j) {
//                     cell.innerHTML = array[k].value;
//                 }
//             }
//
//             div.appendChild(cell);
//         }
//     }
//     document.getElementById('mainContainer').appendChild(div);
// }
//
// function test() {
//     const array = [
//         {cellI: 2, cellJ: 2, value: 9}, // k = 0
//         {cellI: 3, cellJ: 3, value: 5}, // k = 1
//         {cellI: 4, cellJ: 4, value: 7}, // k = 2
//     ];
//
//     generateDivs(array);
// }
//
// test();

createContainer(createArray());