// var login = "admin"
// var password = "password"
// if (typeof window !== 'undefined') {
//     console.log('You are on the browser')
// } else {
//     console.log('You are on the server')
// }
// var inputLogin=document.getElementById("login")
// console.log(inputLogin);
// var inpetPassvord=document.getElementById("password");
// console.log(inpetPassvord);
// if (login != inputLogin){
//     console.log("Error!!!")
// }
// const inpLogin=document.querySelector("#login")
// addEventListener("click",check)
// function check(){
//     let inpLogin=document.querySelector("#login")
//     if(inpLogin.textContent==login) console.log("Right")
//     else console.log("Error")
// }


// var table = document.createElement('table')
// var tableTr = document.createElement('tr')
// var tableTd = document.createElement('td')
// // table.appendChild(tableTr)
// // tableTr.appendChild(tableTd)
//
// var n = 5, m = 5;
// var mas = [];
// for (var i = 1; i < m; i++) {
//     mas[i] = [];
//     table.appendChild(tableTr)
//     for (var j = 1; j < n; j++) {
//         tableTr.appendChild(tableTd)
//         let ind = String(i) + String(j)
//         tableTd.innerHTML=ind
//         mas[i][j] = ind;
//     }
// }
// document.getElementById('test').appendChild(table);
//
// console.log(mas);

//______________________________________________________________________________________

// let table = document.createElement('table');
// let count = 1;
//
// // let rows = prompt('Сколько строк создать в таблице?', 0);
// // let cols = prompt('Сколько столбцов создать в таблице?', 0);
// let rows = 9
// let cols = 9
//
// for (let i = 0; i < rows; i++) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < cols; j++) {
//         let td = document.createElement('td');
//         td.innerHTML = count;
//         count++;
//         tr.append(td);
//     }
// }
// document.getElementById('test').appendChild(table);
const rows = 20;
const cols = 20;
function createArray(){
    let iter = 1;
    let mainArray = [];
    for (let i = 0; i < rows; i++) {
        var childArray = [];
        for (let j = 0; j < cols; j++) {
            childArray[j] = [iter++];
        }
        mainArray[i] = childArray;
        // console.log(childArray);
    }
    // console.log(mainArray);
    return mainArray;
}

function addArrayInTheTable(inputArray){
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
            let tdId = "tdID" + i + '-' + j;
            td.classList.add(tdId);
        }
    }
    document.getElementById('mainTable').appendChild(table);
}
// createArray();
addArrayInTheTable(createArray());

// tdElement.onclick = (event) => console.log(event.target.className);
// console.log(parseInt(event.target.className))

const tdElement = document.getElementById('mainTable');
tdElement.onclick = getID;
function getID(){
    let className = event.target.className;
    let arrayClassName = Array.from(className)
    var id='';
    var jd='';
    for (let index=0;index<arrayClassName.length;index++){
            if (!isNaN(arrayClassName[index])){
                tempI = arrayClassName[index];
                id=id+tempI;
                // console.log("i=" + id)
            }
            else if (arrayClassName[index] === '-') {
                for (;index<arrayClassName.length-1;index++) {
                    let tempJ = arrayClassName[index + 1];
                    jd = jd + tempJ;
                    // console.log("j=" + jd);
                }
            }
    }
    var num = className.replace(/\D+/, '')
    console.log(num);
    id=parseInt(id);
    jd=parseInt(jd);
    console.log("i=" + id)
    console.log("j=" + jd)
    let content = event.target.textContent;
    console.log(content)
}
