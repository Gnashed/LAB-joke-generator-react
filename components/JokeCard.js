import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function JokeCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '2rem' }}>Joke Generator</Card.Title>
        <Card.Text>
          Welcome to Joke Generator v2!
        </Card.Text>
        <Button variant="primary">Get a joke</Button>
      </Card.Body>
    </Card>
  );
}
