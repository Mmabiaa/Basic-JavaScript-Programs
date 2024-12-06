
const myBtn = document.getElementById('myBtn');
const myLabel1 = document.getElementById('myLabel1');
const myLabel2 = document.getElementById('myLabel2');
const myLabel3 = document.getElementById('myLabel3');
const min = 1;
const max = 6;

let random1;
let random2;
let random3;

myBtn.onclick = function(){
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;
    random3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = random1;
    myLabel2.textContent = random2;
    myLabel3.textContent = random3;
}
