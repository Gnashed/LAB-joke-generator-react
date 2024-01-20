import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function JokeCard({ joke, btnText }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '2rem' }}>Joke Generator</Card.Title>
        <Card.Text>
          {joke.setup}
        </Card.Text>
        <Button variant="primary">
          {btnText}
        </Button>
      </Card.Body>
    </Card>
  );
}

// Note to self - prop validation.

JokeCard.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
