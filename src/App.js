import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import imeg1 from "./imegas/imeg1.jpg";
import imeg2 from "./imegas/imeg2.jpg";
import imeg3 from "./imegas/imeg3.jpg";
import imeg4 from "./imegas/imeg4.jpg";
import imeg5 from "./imegas/imeg5.jpg";
import imeg6 from "./imegas/imeg6.jpg";
import imeg7 from "./imegas/imeg7.jpg";

import {
  NavDropdown,
  Nav,
  Container,
  Navbar,
  Carousel,
  Form,
  Button,
  CardGroup,
  Card,
} from "react-bootstrap";
import ProfileComponent from "./profile/ProfileComponent";
const handleName = (name) => {
  return alert(`Hello , My Name Is ${name}`);
};
function App() {
  return (
    <div className="App">
      {/* tag Navbar  */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">smart home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* tag Carousel */}
      <div className="Carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imeg1}
              height
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>smart home company</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imeg2}
              height
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>smart home company</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imeg3} alt="Third slide" />

            <Carousel.Caption>
              <h3>smart home company</h3>
              <p>
                {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* tag form */}
      <div className="form">
        <ProfileComponent
          name="emhemmad-ageela"
          bio="I am emhammad Aqeela, and I work as an employee in the Ministry of Agriculture, and I work the rest of the time as freelance work in a phone shop"
          handleName={handleName}
          profession="programmer"
        >
          {" "}
          <img src={imeg7} width="270px" alt="myprofile"></img>{" "}
        </ProfileComponent>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/*  tag cards */}
      <div className="CardGroup">
        <CardGroup>
          <Card className="card">
            <Card.Img variant="top" src={imeg4} height="250px" />
            <Card.Body>
              <Card.Title style={{ color: "red" }}>
                Hommer Electric Mixer
              </Card.Title>
              <Card.Text>
                Bowl Size and Capacity.we have the most standard sizes are 4.5
                to 5.5 quarts,mixer Attachments Most mixers will come with a
                paddle, whisk, and dough hook attachments,Speeds,Power,Locking
                Power Heads.,Stability,Comfort,Cleaning.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={imeg5} height="250px" />
            <Card.Body>
              <Card.Title style={{ color: "red" }}>
                Hommer Electric Fryer
              </Card.Title>
              <Card.Text>
                Temperature Control First and foremost, you have to be able to
                keep your oil at the proper temperature at all times,Frying
                Capacity,Oil Filtration ..{" "}
              </Card.Text>
            </Card.Body>

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Img variant="top" src={imeg6} height="250px" />
            <Card.Body>
              <Card.Title style={{ color: "red" }}>
                Hommer Electric Oven
              </Card.Title>
              <Card.Text>
                Convection Heating convection heating uses a fan to circulate
                hot air around inside your oven,temperature probe.a temperature
                probe plugs into the side of your oven wall,glass doors,timer
                and delayed start,dual Ovens..
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      {/* tag footer */}
      <div className="footer">
        <footer className="page-footer font-small blue pt-4 footer1">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <hr className="clearfix w-100 d-md-none pb-0" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Email address : arooh7546@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!">Phone Number : 00218925345580</a>
                  </li>
                  <li>
                    <a href="#!">Other Ph Num : 00218925340125</a>
                  </li>
                  <li>
                    <a href="#!">Address : libya-sabha</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram-square"></i>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
