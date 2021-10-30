const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 898; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    const newImg = document.createElement('img');
    label.innerText = `#${i}`;
    newImg.src = `${baseUrl}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
