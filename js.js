let button = document.getElementById('btn')
let err = document.getElementById('error')
let spin = document.getElementById('spiner')
let spin1 = document.getElementById('spiner2')
let answer = document.getElementById('y')
let ulResult = document.getElementById('ulist')
let nothing = ""
let url = ""
let url2 = "http://localhost:5050/getFibonacciResults"
let num4 = ""

function fibionacci(num4) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1
    for (let i = 2; i <= num4; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
}
function getFibonacci() {
    spin.classList.remove("visually-hidden")
    num4 = document.getElementById('fname').value
    if (num4 > 50){
        err.classList.remove("visually-hidden")
        spin.classList.add("visually-hidden")
    }
    else{
        err.classList.add("visually-hidden")
        changeUrl()
    } 
}
function changeUrl(num4) {
    num4 = document.getElementById('fname').value
    url = `http://localhost:5050/fibonacci/${num4}`
     fetch(url).then(response => {
        if (!response.ok){
            response.text().then(text => {
                answer.innerText = `Server Error: ${text}`;
            });    
        }
        else{
            response.json().then(data => {
                answer.innerText = data.result;
                // console.log(data.result)
            })
        }
    });
}
button.addEventListener('click', callServer )



function callServer(){
    fetch(url2).then(response =>{
        response.json().then(data => {
            funcServer(data)
        })
    })
}
function funcServer(data){
    spin1.classList.add("visually-hidden")
    for (let i = 0; i < data.results.length; i++) {
        const {number , result , createdDate} = data.results[i]
        // let stuff = data.results[i].number
        // let stuff1 = data.results[i].result
        // let stuff2 = new Date(data.results[i].createdDate)
        let line = document.createElement("li")
        myData1 = nothing + "Fibionacci " + number + " is " + result + " Calculated at: " + new Date(createdDate)
        line.innerHTML = myData1
        ulResult.appendChild(line)
    }
    getFibonacci()
}
callServer()





// let newString = `The Fibonacci of ${data.results[i].number} is ${data.results[i].result} Calculated at: ${data.results[i].createdDate}"`

// document.getElementById('example').innerText = newString





// for (let i = 0; i < data.results.length; i++) {
//     console.log(data.results[i].number)
//     console.log(data.results[i].result)
//     console.log(data.results[i].createdDate)}



// numb.innerText = data.results[i].number
// result.innerText = data.results[i].result
// date.innerHTML = data.results[i].createdDate