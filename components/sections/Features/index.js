import Image from 'next/image'
import { Container, Row, Col, Button, Carousel  } from 'react-bootstrap'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'

import Pay from '../../../public/features/pay.png'
import Secure from '../../../public/features/secure.png'
import Global from '../../../public/features/global.png'
import Funds from '../../../public/features/funds.png'
import Reduce from '../../../public/features/reduce.png'
import Trade from '../../../public/features/trade.png'
import Conduct from '../../../public/features/conduct.png'
import Manage from '../../../public/features/manage.png'
import Baxe from '../../../public/features/baxe.png'

import styles from './Features.module.css'

const Feature = ({
  image,
  title
}) => {
  return (
    <Col lg={4} md={4} style={{ textAlign: 'center' }}>
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
    <div className={styles.FeaturesContainer}>
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
          <Col lg={12}>
            <Carousel
              
              style={{ height: 250 }}
              nextIcon={
                <p style={{ color: '#F69B11', fontSize: 40 }}>
                  <IoMdArrowDroprightCircle />
                </p>
              }
              prevIcon={
                <p style={{ color: '#F69B11', fontSize: 40 }}>
                  <IoMdArrowDropleftCircle />
                </p>
              }
            >
              <Carousel.Item>
                <Container>
                  <Row>
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
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <Row>
                    <Feature
                      image={Funds}
                      title='Receive funds from anywhere in the world'
                    />
                    <Feature
                      image={Reduce}
                      title='Reduce transaction costs'
                    />
                    <Feature
                      image={Trade}
                      title='Trade with people from any country'
                    />
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <Row>
                    <Feature
                      image={Conduct}
                      title='Conduct business transactions'
                    />
                    <Feature
                      image={Manage}
                      title='Manage your business operations'
                    />
                    <Feature
                      image={Baxe}
                      title='Connect you to the BAXE community'
                    />
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={12} style={{ textAlign: 'center', marginTop: 30 }}>
            <Button style={{ backgroundColor: '#008779', borderColor: '#008779'}}>
              Watch Now
             </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features