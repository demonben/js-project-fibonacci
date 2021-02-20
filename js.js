let button = document.getElementById('btn')
let err = document.getElementById('error')
let spin = document.getElementById('spiner')
let spin1 = document.getElementById('spiner2')
let answer = document.getElementById('y')
let ulResult = document.getElementById('ulist')
let divResult = document.getElementById('try')
let checkBox = document.getElementById('checkbox')
let nothing = ""
let url = ""
let url2 = "http://localhost:5050/getFibonacciResults"
let num4 = ""



function fibionacci(num4) {
    err.classList.add("visually-hidden")
    num4 = document.getElementById('fname').value
    let num1 = 0;
    let num2 = 1;
    let num3 = 1
    for (let i = 2; i <= num4; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    if (num4 > 50) {
        err.classList.remove("visually-hidden")
    }
    else if (num4 == 42) {
        answer.style.color = 'red'
        answer.innerText = "Server Error: 42 is the meaning of life"
    }
    else {
        answer.innerText = num3
        return num3;
    }
}
function getFibonacci() {
    spin.classList.remove("visually-hidden")
    num4 = document.getElementById('fname').value
    if (num4 > 50) {
        err.classList.remove("visually-hidden")
        spin.classList.add("visually-hidden")
    }
    else {
        err.classList.add("visually-hidden")
        spin.classList.add("visually-hidden")
    }
}
function changeUrl(num4) {
    num4 = document.getElementById('fname').value
    url = `http://localhost:5050/fibonacci/${num4}`
    fetch(url).then(response => {
        if (!response.ok) {
            response.text().then(text => {
                let answer42 = `Server Error: ${text}`
                answer.style.color = 'red'
                answer.innerText = answer42;
                console.log(answer42)
            });
        }
        else {
            response.json().then(data => {
                answer.innerText = data.result;
            })
        }
    });
}

button.addEventListener('click', () => {
    if (checkBox.checked == false) {
        fibionacci()
    }
    else {
        spin.classList.remove("visually-hidden")
        document.getElementById('ulist').remove()
        callServer()
        changeUrl()
    }
})

function callServer() {
    fetch(url2).then(response => {
        response.json().then(data => {
            funcServer(data)
        })
    })
}
function funcServer(data) {
    spin1.classList.add("visually-hidden")
    let ul = document.createElement("ul")
    ul.id = "ulist"
    document.getElementById('try').appendChild(ul)
    spin.classList.add("visually-hidden")
    getFibonacci()

    for (let i = 0; i < data.results.length; i++) {
        const { number, result, createdDate } = data.results[i]

        let numberElement = document.createElement("span")
        numberElement.innerText = number
        numberElement.style.fontWeight = "900"

        let resultElement = document.createElement("span")
        resultElement.innerText = result
        resultElement.style.fontWeight = "900"

        
        let line = document.createElement("li")

        
        line.innerHTML = "The Fibionacci of "
        line.appendChild(numberElement)
        line.innerHTML += " is "
        line.appendChild(resultElement)
        line.innerHTML += " Calculated at: " + new Date(createdDate)
        document.getElementById('ulist').appendChild(line)

    }
}
onload = callServer()






// SORT DATA    
// document.addEventListener('change', sortData)

// async function sortData() {
//     const response = await fetch("http://localhost:5050/getFibonacciResults")

//     const data = await response.json()
//     let sortedResult;
//     let select = document.getElementById('select').value
//     // console.log(select)
//     if (select === "Number Asc") {
//         // console.log(arr.sort(function (a, b) {
//         //     return b - a
//         // }))
// sortedResult = data.results.sort((a,b)=>{
//     a.number - b.number
// })

//         // console.log("Number Asc")
//     }
//     else if (select === "Number Desc") {
// sortedResult = data.results.sort((a,b)=>{
//      b.number - a.number
// })

//         console.log("number desc")
//     }

//     else if (select === "Date Asc") {
// sortedResult = data.results.sort((a,b)=>{
//      a.createdDate - b.createdDate

// })

//         console.log("date asc")
//     }

//     else if (select === "Date Desc") {
//         sortedResult = data.results.sort((a, b) => {
//              b.createdDate - a.createdDate
//         })
//         console.log(sortedResult)
//         console.log("date desc")
//     }
//     console.log()
//     funcServer(sortData)
// }


// let stuff = data.results[i].number
        // let stuff1 = data.results[i].result
        // let stuff2 = new Date(data.results[i].createdDate)
        // myData1 = nothing + "Fibionacci " + number + " is " + result + " Calculated at: " + new Date(createdDate)
