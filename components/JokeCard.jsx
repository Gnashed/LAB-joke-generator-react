import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function JokeCard({ joke, btnText }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '2rem' }}>Joke Generator</Card.Title>
        <Card.Text>
          Welcome to Joke Generator v2!
        </Card.Text>
        <Button variant="primary">
          {/* TODO: Debug. Displays two buttons. 2nd btn works while the 1st doesn't. */}
          {btnText !== 'Get Punchline' ? joke.punchline : ''}
        </Button>
      </Card.Body>
    </Card>
  );
}

JokeCard.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
