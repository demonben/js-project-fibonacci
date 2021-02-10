
// fetch
let getUrl = `"http://localhost:5050/fibonacci/:${}"`

fetch(getUrl).then(function(response){
  
})

// fetch
function fibionacci(num4) {   
  let num1 = 0;
  let num2 = 1;
  let num3 = 1
  for (let i = 2; i <= num4; i++) {
    let num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  return num2;
}

document.getElementById('validateBtn').addEventListener('click',function(){
  let form = document.getElementById('fname').value
document.getElementById('y').innerText = fibionacci(form)
})
