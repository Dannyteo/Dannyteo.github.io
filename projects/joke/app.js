const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
     await delayedColorChange('red', 2000)
     await delayedColorChange('orange', 2000)
     await delayedColorChange('yellow', 2000)
     await delayedColorChange('green', 2000)
     await delayedColorChange('blue', 2000)
     await delayedColorChange('indigo', 2000)
     await delayedColorChange('violet', 2000)
     return ('All done!')
 }

 rainbow().then(() => console.log('End of rainbow'))

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log('ERR!', e)

    }
}
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
        const config = { headers: { accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        //console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "No joke available. Sorry!"
    }

}

button.addEventListener('click', addNewJoke);
