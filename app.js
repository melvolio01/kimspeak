const btn = document.getElementById('insult-button');
const victim = document.getElementById('name-box');
const insultText = document.getElementById('insult');
const kimage = document.getElementById('kim-im');

let yourName;
let firstWord = [];
let secondWord = [];
let thirdWord = [];
let imageSrcs = ['images/kim.png', 'images/rocketman.png', 'images/flyingkim.png', 'images/cartmankim.png', 'images/trumpkim.png'];

btn.addEventListener('click', function(e){
    if(victim.value !== '') {
    let randImage = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];
    let randFirst = firstWord[Math.floor(Math.random() * firstWord.length)];
    let randSecond = secondWord[Math.floor(Math.random() * secondWord.length)];
    let randThird = thirdWord[Math.floor(Math.random() * thirdWord.length)];

    yourName = victim.value;
    victim.value = '';

    insultText.innerHTML = `<h3>${yourName}, you are a ${randFirst}, ${randSecond} ${randThird}!</h3>`;
    kimage.setAttribute('src', `${randImage}`);
    } else {
        insultText.innerHTML = `<h3>Ha ha ha, you are such a dotard. You don't even know your own name!</h3>`;
    kimage.setAttribute('src', `${randImage}`);
    }
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
    i += 2;
}

console.log(thirdWord);

