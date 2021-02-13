let button = document.getElementById('btn')
let err = document.getElementById('error')
let spin = document.getElementById('spiner')
let answer = document.getElementById('y')
let url = ""
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
                console.log(data.result)
            })
        }
    });
}
button.addEventListener('click', getFibonacci)