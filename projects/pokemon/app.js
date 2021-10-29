// const btn = document.querySelector('#v2');
// btn.onclick = function () {
//     console.log('You clicked me!');
//     console.log('I hope it works!');
// }

// function scream() {
//     console.log('aaaaaaaaaaahhhh!!!');
//     console.log('Stop it!!!');
// }

// btn.onmouseenter = scream;
// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('dblclick', function () {
//     alert('Clicked!');
// })

const conatiner = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 898; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    const newImg = document.createElement('img');
    label.innerText = `#${i}`;
    newImg.src = `${baseUrl}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    conatiner.appendChild(pokemon);
