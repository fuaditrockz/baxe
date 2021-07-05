import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const Footer = () => {
  return (
    <div
      className="baxe-container footer-container"
      style={{
        backgroundColor: '#000',
      }}
    >
      <Container fluid>
        <Row>
          <Col lg={6} md={12} style={{ display: 'flex', alignItems: 'center' }}>
            <div className='contact-text'>
              <h6 style={{ color: '#FFF' }}>CONTACT US</h6>
              <h3 style={{ color: '#FFF', fontWeight: 'bold' }}>
                Know More <br/> About Our <br/> Business
              </h3>
            </div>
            <div className='contact-text-mobile'>
              <h6 style={{ color: '#FFF' }}>CONTACT US</h6>
              <h3 style={{ color: '#FFF', fontWeight: 'bold' }}>
                Know More About Our Business
              </h3>
            </div>
          </Col>
          <Col lg={5} md={12}>
            <Form>
              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control placeholder="First name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control placeholder="Last name" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={8} placeholder="Messages" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer