
function fibionacci(num4) {
       
    let num1 = 1;
    let num2 = 1;
    for (let i = 3; i <= num4; i++) {
      let num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
    }
    return num2;
  }
  let num4 = 7
  let num1 = fibionacci(num4)
  fibionacci(num4)

let num2 = num4

document.getElementById('y').innerText = num1
document.getElementById('x').innerText = num2