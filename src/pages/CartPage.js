import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { updateQuantity, removeFromCart } from '../redux/cartSlice';

function CartPage() {
  const { items, totalItems, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container className="my-4">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Plant</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <Image src={item.thumbnail} alt={item.name} width={50} /> {item.name}
              </td>
              <td>${item.price}</td>
              <td>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                >
                  +
                </Button>
              </td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button as={Link} to="/products" variant="secondary" className="me-2">
        Continue Shopping
      </Button>
      <Button variant="primary">Checkout</Button>
    </Container>
  );
}

export default CartPage;