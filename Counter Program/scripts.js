// A simple counter program.

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');

let count = 0;

//Function to increase count
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

//Function to decrease count
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

//Function to increase count
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// Author - Mmabiaa 