import Image from 'next/image'
import { Container, Row, Col, Button  } from 'react-bootstrap'

import Pay from '../../../public/features/pay.png'
import Secure from '../../../public/features/secure.png'
import Global from '../../../public/features/global.png'

const Feature = ({
  image,
  title
}) => {
  return (
    <Col lg={4} style={{ textAlign: 'center' }}>
      <div style={{
        marginBottom: 20
      }}>
        <Image
          src={image}
          alt={title}
          width={112}
          height={112}
        />
      </div>
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
            image={Pay}
            title='Pay for everyday items'
          />
          <Feature
            image={Secure}
            title='Keep your funds secure'
          />
          <Feature
            image={Global}
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