const btn = document.getElementById('insult-button');
const victim = document.getElementById('name-box');
const insultText = document.getElementById('insult');
const kimage = document.getElementById('kim-im');

let yourName;
let firstWord = [];
let secondWord = [];
let thirdWord = [];
let images = [];


btn.addEventListener('click', function(e){
    yourName = victim.value;
    victim.value = '';
    insultText.innerHTML = `<h3>${yourName}, you are a ${firstWord[0]}, ${secondWord[0]} ${thirdWord[0]}!</h3>`;
    kimage.setAttribute('src', 'rocketman.png');

});

// Remove excess spaces
let trimmedInsults = insultWords.replace(/\s+/g,' ').trim();

// Then split to array
let insultArr = trimmedInsults.split(' ');

for(let i = 0; i < insultArr.length; i++){
    firstWord.push(insultArr[i]);
    i += 2;
}

for(let i = 1; i < insultArr.length; i++){
    secondWord.push(insultArr[i]);
    i += 2;
}

for(let i = 2; i < insultArr.length; i++){
    thirdWord.push(insultArr[i]);
}

