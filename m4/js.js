

let button = document.getElementById('btn')
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
    let num4 = document.getElementById('fname').value
    document.getElementById('y').innerText = fibionacci(num4)
    changeUrl()
}

function changeUrl(num4) {
    num4 = document.getElementById('fname').value
    url = `http://localhost:5050/fibonacci/${num4}`
    // console.log(url)
    fetch(url).then(response => {
        response.json().then(data => {
            document.getElementById('y').innerText = data.result;
        });
    });
}
button.addEventListener('click', getFibonacci)