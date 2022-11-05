const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//      delayedColorChange('orange', 1000)
//      delayedColorChange('yellow', 1000)
//      delayedColorChange('green', 1000)
//      delayedColorChange('blue', 1000)
//      delayedColorChange('indigo', 1000)
//      delayedColorChange('violet', 1000)

async function rainbow() {
     await delayedColorChange('red', 500)
     await delayedColorChange('orange', 500)
     await delayedColorChange('yellow', 500)
     await delayedColorChange('green', 500)
     await delayedColorChange('blue', 500)
     await delayedColorChange('indigo', 500)
     await delayedColorChange('violet', 500)
     return ('All done!')
 }

rainbow();

//  rainbow().then(() => console.log('End of rainbow'))

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price);
//     } catch (e) {
//         console.log('ERR!', e)

//     }
// }
const jokes = document.querySelector('#joke');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    //console.log(jokeText);
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { accept: 'application' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        //console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "No joke available. Sorry!"
    }

}

button.addEventListener('click', addNewJoke);
