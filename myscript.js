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
    // const div = document.querySelector(".container");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            cell = document.getElementsByClassName("container");
            // console.log(element.target.className);
            cell.innerHTML = inputArray[i][j];
            count++;
            // div.appendChild(cell);
        }
    }
    // document.getElementById('mainContainer').appendChild(div);
}

addArrayInTheContainer(createArray());

// element.onclick = (event) => console.log(event.target.className);
// console.log(parseInt(event.target.className))

const element = document.getElementById('mainContainer');
element.onclick = function (event) {
    let className = event.target.className;
    getId(className)
}

// const element = document.getElementById('mainContainer');
// element.onclick = getId;

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


function createContainer() {
    let count = 1;
    let cell;
    const div = document.createElement('div');
    div.classList.add("container");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cell = document.createElement('div');
            cell.innerHTML = '';
            count++;
            let Id = "id" + '-' + i + '-' + j;
            cell.classList.add("cell", Id);
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

createContainer();