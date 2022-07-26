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
createContainer(createArray());
const element = document.getElementById('container');
element.onclick = function (event) {
    let id = event.target.id;
    getId(id);
    let target=document.getElementById(event.target.id)
    target.classList.toggle('selectCell');
}

function getId(id) {
    let arrayId = id.split("-");
    arrayId.splice(0, 1);
    let i = parseInt(arrayId[0]);
    let j = parseInt(arrayId[1]);
    const num = id.replace(/\D+/, '');
    console.log(num);
    console.log("i=" + i);
    console.log("j=" + j);
    let content = event.target.textContent;
    console.log(content);
    // return arrayId;
}


function createContainer(inputArray) {
    let count = 1;
    let cell;
    const div = document.createElement('div');
    div.id="container";
    div.setAttribute('ondblclick',"return false")
    div.setAttribute('onselectstart',"return false")
    div.setAttribute('onmousedown',"return false")
    div.setAttribute('ondragstart',"return false")
    div.setAttribute('ondrop',"return false")
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            cell = document.createElement('div');
            cell.innerHTML = inputArray[i][j];
            count++;
            // let Id = "id" + '-' + i + '-' + j;
            cell.id = `id-${i}-${j}`;
            cell.classList.add("cell");
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


