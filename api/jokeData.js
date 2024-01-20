const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(Object.values(data));
      console.warn(data);
    })
    .catch(reject);
});

export default getJoke;
