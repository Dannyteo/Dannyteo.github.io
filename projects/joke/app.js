// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('It worked!!!(Page1)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('It worked!!!(Page2)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('It worked!!!(Page3)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page4')
//     })
//     .then((data) => {
//         console.log('It worked!!!(Page4)')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('Oh no! A request failed!')
//         console.log(err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 2000)
//     await delayedColorChange('orange', 2000))
//     await delayedColorChange('yellow', 2000))
//     await delayedColorChange('green', 2000))
//     await delayedColorChange('blue', 2000))
//     await delayedColorChange('indigo', 2000))
//     await delayedColorChange('violet', 2000))

// async function hello() {
// }

// const sing = async () => {
//     throw "Oh, there's an error!"
//     return ('lalalala....')
// }

// sing()
//     .then((data) => {
//         console.log('Promise resolved with:', data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const login = async (username, password) => {
//     if (!username || !password) throw "invalid credentials!"
//     if (password === 'DannyTeo') return 'Welcome!'
//     throw 'Invalid password!'
// }

// login('sarah')
//     .then(msg => {
//         console.log('Logged in!')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log('Error!')
//         console.log(err)
//     })

// async function rainbow() {
//     await delayedColorChange('red', 2000)
//     await delayedColorChange('orange', 2000)
//     await delayedColorChange('yellow', 2000)
//     await delayedColorChange('green', 2000)
//     await delayedColorChange('blue', 2000)
//     await delayedColorChange('indigo', 2000)
//     await delayedColorChange('violet', 2000)
//     return ('All done!')
// }

// rainbow().then(() => console.log('End of rainbow'))

//280. Handling errors in Async functions

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequestPromise('/page1');
//         console.log(data1);
//         let data2 = await fakeRequestPromise('/page2');
//         console.log(data2);
//         let data3 = await fakeRequestPromise('/page3');
//         console.log(data3);
//         let data4 = await fakeRequestPromise('/page4');
//         console.log(data4);
//     } catch (e) {
//         console.log('Caught an error!');
//         console.log(e);
//     }
// }

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price);
//     } catch {
//         console.log('Something went wrong!')
//     }

// }

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Error!");
//     })

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