import { useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Monstera', price: 25, thumbnail: '/assets/monstera.jpg', category: 'Foliage' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 35, thumbnail: '/assets/fiddle-leaf.jpg', category: 'Foliage' },
  { id: 3, name: 'Snake Plant', price: 15, thumbnail: '/assets/snake-plant.jpg', category: 'Succulents' },
  { id: 4, name: 'Aloe Vera', price: 10, thumbnail: '/assets/aloe-vera.jpg', category: 'Succulents' },
  { id: 5, name: 'Pothos', price: 12, thumbnail: '/assets/pothos.jpg', category: 'Vines' },
  { id: 6, name: 'Ivy', price: 18, thumbnail: '/assets/ivy.jpg', category: 'Vines' },
];

function ProductListingPage() {
  const dispatch = useDispatch();
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <Container className="my-4">
      <h2>Our Houseplants</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <Row>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <Col md={4} key={plant.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={plant.thumbnail} alt={plant.name} />
                    <Card.Body>
                      <Card.Title>{plant.name}</Card.Title>
                      <Card.Text>${plant.price}</Card.Text>
                      <Button
                        variant="success"
                        onClick={() =>
                          dispatch(addToCart({ id: plant.id, name: plant.name, price: plant.price, thumbnail: plant.thumbnail }))
                        }
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default ProductListingPage;