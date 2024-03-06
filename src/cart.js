import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeFromCart } from "./store/slices/cartSlice.js";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  console.log(totalPrice);
  return (
    <Container className="mt-5 pt-3">
      <Button variant="danger" onClick={() => dispatch(clear())}>
        Clear
      </Button>
      <h1>{totalPrice}</h1>
      <Table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>
                <Image src={item.image} style={{ height: "6rem" }} />
              </td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
