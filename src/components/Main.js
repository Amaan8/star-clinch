import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://dummyjson.com/products?limit=8&skip=3"
      );
      const data = await response.json();
      setProducts(data.products);
    };
    getProducts();
  }, []);

  const selectItem = (e) => {
    if (e.target.innerHTML === "Select") {
      e.target.innerHTML = "Selected";
    } else {
      e.target.innerHTML = "Select";
    }
  };

  const showPic = (pic, id) => {
    const img = document.getElementById(id);
    img.src = pic;
  };

  return (
    <Container className="py-5 text-center">
      <h1 className="fw-bold mb-3">Products</h1>
      <p className="fs-4 mb-5">Select a product that matches your vibe.</p>
      <Row className="justify-content-center">
        {products.map((p) => (
          <Col xs={12} md={6} lg={4} key={p.id} className="mb-4">
            <Card className="h-100 text-white border-0">
              <Card.Img
                variant="top"
                src={p.thumbnail}
                height="300vw"
                id={p.id}
                className="border border-dark rounded-5"
              />
              <Card.Body className="border rounded-5 bg-black bg-gradient">
                <Card.Title className="pb-3 fs-2">{p.title}</Card.Title>
                <Card.Text className="fs-4">Brand: {p.brand}</Card.Text>
                <Card.Text className="fs-4">Rating: {p.rating}</Card.Text>
                <div className="mb-3 d-flex justify-content-evenly">
                  <img
                    src={p.images[0]}
                    alt=""
                    width="90vw"
                    height="70vw"
                    className="rounded-3"
                    role="button"
                    onClick={() => showPic(p.images[0], p.id)}
                  />
                  <img
                    src={p.images[1]}
                    alt=""
                    width="90vw"
                    height="70vw"
                    className="rounded-3"
                    role="button"
                    onClick={() => showPic(p.images[1], p.id)}
                  />
                  <img
                    src={p.images[2]}
                    alt=""
                    width="90vw"
                    height="70vw"
                    className="rounded-3"
                    role="button"
                    onClick={() => showPic(p.images[2], p.id)}
                  />
                </div>
                <Button
                  variant="dark"
                  size="lg"
                  className="w-100 bg-black border-0 border-top fs-2"
                  onClick={selectItem}
                >
                  Select
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Main;
