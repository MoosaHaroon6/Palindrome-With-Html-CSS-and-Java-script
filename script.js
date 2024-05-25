let userInput = document.querySelectorAll(".palindrome-Input")[0];
let checkingBtn = document.querySelectorAll("#check-btn");
let divEl = document.querySelectorAll(".user-words")[0];
let wordsArr = [];


function check(str) {
    let reversedString = str.split('').reverse().join('');
    let userInputValue = userInput.value.toLowerCase();
    wordsArr.push(userInputValue);
    printAll()
    userInput.value += '';
    if (userInputValue === "") {
        divEl.value += '';
        alert("Error")
    }
    else if (userInputValue === reversedString) {
        divEl.innerHTML += `
        <h3>OUTPUT</h3>
        <br>
        <p>This Word <span class="for-palindrome">${userInputValue}</span> is a Palindrome</p>
        `
    }
    else {
        divEl.innerHTML += `
        <h3>OUTPUT</h3>
        <p>This Word <span>${userInputValue}</span> is not a Palindrome</p>
        `
        // divEl.value= ''
    }
}

function printAll() {
    divEl.innerHTML = '';
    for (let i = 0; i < wordsArr.length; i++) {
        divEl.innerHTML += `
        <p id="para-${i}">${wordsArr[i]}</p>
        `
    }
}
