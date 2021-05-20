// apiScript.js    
const div = document.createElement('div');
document.body.appendChild(div);
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => div.innerText = `${data.joke}`);
};

window.onload = () => fetchJoke();