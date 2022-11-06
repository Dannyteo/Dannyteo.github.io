const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

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
	try{
		const config = { headers: { accept: "application/json" } };
		const res = await axios.get("https://icanhazdadjoke.com/", config);
        	return res.data.joke;
	}catch (e) {
        return "No joke available. Sorry!"
  }
};

/*const getDadJoke = async () => {
    try {
        const config = { headers: { accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "No joke available. Sorry!"
    }

}*/

button.addEventListener('click', addNewJoke);
