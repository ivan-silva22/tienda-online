import { Container, Form, Nav, Button, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 mb-5 rounded">
      <Container fluid>
        <Navbar.Brand href="#">TecnoManía</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Productos</Nav.Link>
            <Nav.Link href="#action2">Sobre nosotros</Nav.Link>
            <Nav.Link href="#action3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
                id="Cart3--Streamline-Bootstrap"
                height="20"
                width="20"
              >
                <path
                  d="M0 1.5A0.5 0.5 0 0 1 0.5 1H2a0.5 0.5 0 0 1 0.485 0.379L2.89 3H14.5a0.5 0.5 0 0 1 0.49 0.598l-1 5a0.5 0.5 0 0 1 -0.465 0.401l-9.397 0.472L4.415 11H13a0.5 0.5 0 0 1 0 1H4a0.5 0.5 0 0 1 -0.491 -0.408L2.01 3.607 1.61 2H0.5a0.5 0.5 0 0 1 -0.5 -0.5M3.102 4l0.84 4.479 9.144 -0.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0 -4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0 -4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0 -2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0 -2"
                  strokeWidth="1"
                ></path>
              </svg>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
