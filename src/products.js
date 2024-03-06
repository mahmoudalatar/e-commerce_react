import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./store/slices/productSlice.js";
import { addToCart } from "./store/slices/cartSlice.js";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch(fetchProduct);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        {products.map((item) => {
          return (
            <Col key={item.id} className="mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "18rem" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      height: "3rem",
                    }}
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      overflow: "auto",
                      textOverflow: "ellipsis",
                      height: "10rem",
                    }}
                  >
                    {item.description}
                  </Card.Text>
                  <Card.Text>{item.price}$</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
