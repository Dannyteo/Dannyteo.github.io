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
		const config = { headers: { accept: 'application/json' } };
		//const config = { headers: { "Accept": "application/json"}};
		const res = await axios.get("https://icanhazdadjoke.com/", config);
        	return res.data.joke;
	}catch (e) {
        return "No joke available. Sorry!"
  }
};

/*const getDadJoke = async () => {
    try {
        const config = { headers: { accept: 'application/json' } };
        //const config = { headers: {accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        // 'https://icanhazdadjoke.com/', config);
        //console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "No joke available. Sorry!"
    }

} */

button.addEventListener('click', addNewJoke);
