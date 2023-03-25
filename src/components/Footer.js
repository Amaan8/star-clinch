import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col
          xs={12}
          sm={6}
          className="d-flex align-items-center justify-content-sm-start justify-content-center"
        >
          <img src="/logo.png" alt="logo" width="50px" />
          <span className="p-2 fs-2 fw-bold">StarClinch</span>
        </Col>
        <Col
          xs={12}
          sm={6}
          className="d-flex justify-content-sm-end justify-content-center"
        >
          <FacebookIcon className="m-2" />
          <TwitterIcon className="m-2" />
          <YouTubeIcon className="m-2" />
          <InstagramIcon className="m-2" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={8}>
          <Row>
            <Col xs={6}>
              <h3>FOR BUYERS</h3>
              <ul className="list-unstyled text-info">
                <li role="button">Our Buyers</li>
                <li role="button">Browse</li>
                <li role="button">Post your Requirement</li>
                <li role="button">Entertainment on EMI</li>
              </ul>
            </Col>
            <Col xs={6}>
              <h3>FOR BUYERS</h3>
              <ul className="list-unstyled text-info">
                <li role="button">Our Buyers</li>
                <li role="button">Browse</li>
                <li role="button">Post your Requirement</li>
                <li role="button">Entertainment on EMI</li>
              </ul>
            </Col>
            <Col xs={6}>
              <h3>ABOUT US</h3>
              <ul className="list-unstyled text-info">
                <li role="button">Our Story</li>
                <li role="button">Careers</li>
              </ul>
            </Col>
            <Col xs={6}>
              <h3>ABOUT US</h3>
              <ul className="list-unstyled text-info">
                <li role="button">Our Story</li>
                <li role="button">Careers</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs={8} sm={6} md={4}>
          <h3>REGISTERED OFFICE ADDRESS:</h3>
          <p>
            VINSM Globe Private Limited Percept House, Ground Floor East of
            Kailash, New Delhi CIN: U52605DL2012PTC236944 Phone: +91 11 498 498
            01
          </p>
          <p role="button" className="text-info">
            Contact Us
          </p>
        </Col>
      </Row>
      <p className="text-center mt-5">
        © Copyright 2015-2023 |{" "}
        <span className="text-info">VINSM Globe Pvt. Ltd.</span> | All Rights
        Reserved.
      </p>
    </Container>
  );
};

export default Footer;
