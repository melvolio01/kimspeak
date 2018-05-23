const btn = document.getElementById('insult-button');
const victim = document.getElementById('name-box');
const insultText = document.getElementById('insult');
const kimage = document.getElementById('kim-im');
let yourName;

btn.addEventListener('click', function(e){
    yourName = victim.value;
    victim.value = '';
    insultText.innerHTML = `<h3>${yourName}, you are a mugwump!</h3>`;
    kimage.setAttribute('src', 'rocketman.png');

});
