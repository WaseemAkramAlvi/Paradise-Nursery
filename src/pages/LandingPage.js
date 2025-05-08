import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: 'url(/assets/background.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container className="text-center">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your one-stop shop for beautiful houseplants
          to brighten your home. Explore our collection and bring nature indoors!
        </p>
        <Button as={Link} to="/products" variant="primary">
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default LandingPage;