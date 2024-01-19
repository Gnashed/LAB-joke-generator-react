import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import JokeCard from '../components/JokeCard';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
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
      <JokeCard joke={joke} btnText={btnText} />
      {btnText === 'Get a Joke' || btnText === 'Get a New Joke' ? (
        <Button
          variant="primary"
          onClick={getAJoke}
        >
          {btnText}
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => setButton('Get a New Joke')}
        >
          {btnText}
        </Button>
      )}
    </div>
  );
}

export default Home;
