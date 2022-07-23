
// document.getElementById('test').appendChild(table);
const rows = 20;
const cols = 20;

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

function addArrayInTheTable(inputArray) {
    let count = 1;
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = inputArray[i][j];
            count++;
            tr.append(td);
            let tdId = "tdID" + '-' + i + '-' + j;
            td.classList.add(tdId);
        }
    }
    document.getElementById('mainTable').appendChild(table);
}

addArrayInTheTable(createArray());

// tdElement.onclick = (event) => console.log(event.target.className);
// console.log(parseInt(event.target.className))

const tdElement = document.getElementById('mainTable');
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