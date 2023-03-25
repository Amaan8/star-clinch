import { Navbar, Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container className="py-2">
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            StarClinch
          </Navbar.Brand>
          <Navbar.Text className="text-white">Hello, Manish</Navbar.Text>
        </Container>
      </Navbar>
      <Container className="py-5 text-center">
        <h1 className="fw-bold mb-5">Shortlist</h1>
        <h2 className="mb-4 fw-normal">Details:</h2>
        <Row className="justify-content-center">
          <Col xs={6} sm={4}>
            <h2>Event Date</h2>
            <p className="fs-4 pt-2">2023-02-22</p>
          </Col>
          <Col xs={6} sm={4}>
            <h2>Location</h2>
            <p className="fs-4 pt-2">Delhi, India</p>
          </Col>
          <Col xs={6} sm={4}>
            <h2 className="pb-2">Budget</h2>
            <span className="fs-4 bg-black text-white p-2 rounded fw-bold">
              Rs 500,000
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
