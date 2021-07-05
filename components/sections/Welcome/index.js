import Image from 'next/image'
import { Container, Row, Col, Button  } from 'react-bootstrap'

import WelcomeImage from '../../../public/welcome-image.png'

import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.WelcomeContainer}>
      <Container fluid>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <h4>Welcome to the</h4>
            <h4 style={{ fontWeight: '800' }}>Digital Economy</h4>
            <p>Click to the button to watch the video</p>
            <Button style={{ backgroundColor: '#008779', borderColor: '#008779'}}>
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