import { Container, Row, Col, Button  } from 'react-bootstrap'

const Feature = ({
  image,
  title
}) => {
  return (
    <Col lg={4} style={{ textAlign: 'center' }}>
      <img
        src={image}
        alt={title}
        style={{
          width: 112,
          marginBottom: 20
        }}
      />
      <p style={{ fontWeight: 'bold' }}>{title}</p>
    </Col>
  )
}

const Features = () => {
  return (
    <div
      className="baxe-container"
      style={{
        position: 'relative',
        top: -100,
        minHeight: 200,
        padding: '0 200px'
      }}
    >
      <Container fluid>
        <Row>
          <Col
            lg={12}
            style={{
              padding: '80px 0 40px',
              textAlign: 'center',
              marginBottom: 50
            }}
          >
            <h1 style={{ fontWeight: '800', }}>
              What can BAXE do for you?
            </h1>
          </Col>
          <Feature
            image='/features/pay.png'
            title='Pay for everyday items'
          />
          <Feature
            image='/features/secure.png'
            title='Keep your funds secure'
          />
          <Feature
            image='/features/global.png'
            title='PTransfer your funds across the globe'
          />
          <Col lg={12} style={{ textAlign: 'center', marginTop: 30 }}>
            <Button>
              Watch Now
             </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features