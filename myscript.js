
// document.getElementById('test').appendChild(table);
const rows = 9;
const cols = 9;

function createArray() {
    let iter = 1;
    let mainArray = [];
    for (let i = 0; i < rows; i++) {
        let childArray = [];
        for (let j = 0; j < cols; j++) {
            childArray[j] = [iter++];
        }
        mainArray[i] = childArray;
    }
    return mainArray;
}

function addArrayInTheContainer(inputArray){
    let count = 1;
    let cell;
    const div = document.createElement('div');
    div.classList.add("container");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cell = document.createElement('div');
            cell.innerHTML = inputArray[i][j];
            count++;
            let Id = "ID" + '-' + i + '-' + j;
            cell.classList.add("cell",Id);
            div.appendChild(cell);
        }
    }
    document.getElementById('mainContainer').appendChild(div);
}

addArrayInTheContainer(createArray());

// tdElement.onclick = (event) => console.log(event.target.className);
// console.log(parseInt(event.target.className))

const tdElement = document.getElementById('mainContainer');
tdElement.onclick = getID;

function getID() {
    let className = event.target.className;
    let arrayClassName = Array.from(className)
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