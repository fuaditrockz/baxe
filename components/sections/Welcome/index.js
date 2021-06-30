import { Container, Row, Col, Button  } from 'react-bootstrap'

const Welcome = () => {
  return (
    <div
      className="baxe-container"
      style={{
        position: 'relative',
        top: -100
      }}
    >
      <Container fluid>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <h4>Welcome to the</h4>
            <h4 style={{ fontWeight: '800' }}>Digital Economy</h4>
            <p>Click to the button to watch the video</p>
            <Button>
              Watch Now
            </Button>
            <img
              src='/welcome-image.png'
              alt='Baxe Values'
              style={{
                width: '100%',
                marginTop: 20
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Welcome