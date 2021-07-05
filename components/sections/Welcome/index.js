import Image from 'next/image'
import { Container, Row, Col, Button  } from 'react-bootstrap'

import WelcomeImage from '../../../public/welcome-image.png'

const Welcome = () => {
  return (
    <div
      className="baxe-container"
      style={{
        position: 'relative',
        top: -94
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
            <div style={{
              width: '100%',
              marginTop: 20
            }}>
              <Image
                src={WelcomeImage}
                alt='Baxe Values'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Welcome