import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import JokeCard from '../components/JokeCard';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({}); // I believe this means, since the data we got back from our API call is an object, we set the state to an empty obj for now???
  // Thinking about creating another useState to keep track of the Card Text

  const setBtn = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => { // obj is the joke data???
      // Updating our setJoke func state from line 8???
      setJoke({
        setup: obj.setup,
        delivery: obj.delivery,
      });

      setBtn('Get Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <JokeCard btnText={btnText} joke={joke} />

      {btnText === 'Get a Joke' || btnText === 'Get a New Joke' ? (
        <Button variant="primary" onClick={getAJoke}>
          {btnText}
        </Button>
      ) : (
        <Button variant="primary" onClick={() => setBtn('Get a new Joke')}>
          {btnText}
        </Button>
      )}
    </div>
  );
}

export default Home;
