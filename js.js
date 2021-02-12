// fetch

// let getUrl = `"http://localhost:5050/fibonacci/:${}"`

// fetch(getUrl).then(function(response){
  
// })

// fetch

//const input = document.getElementById('fname')
//let hey = input.value

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
let button = document.getElementById('btn')
button.addEventListener('click', function() {
  
const num4 = document.getElementById('fname').value
console.log(num4)
  document.getElementById('y').innerText = fibionacci(num4)
})






// document.getElementById('btn').addEventListener('click',function(){
//   let form = document.getElementById('fname').value
// document.getElementById('y').innerText = fibionacci(form)
// })


// raz code
// function getFibonacci(){

// }
// const input = document.getElementById('fname')

// button.addEventListener('click', getFibonacci)