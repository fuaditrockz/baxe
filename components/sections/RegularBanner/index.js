import { Container, Row, Col, Jumbotron, Button  } from 'react-bootstrap'
import { IoMdPlayCircle } from 'react-icons/io'
import Image from 'next/image'

import styles from './RegularBanner.module.css'

const RegularBanner = () => {
  const renderTop = () => {
    return (
      <Container fluid className={styles.TopBanner}>
        <Row>
          <Col lg={6} md={10}>            
            <h1 style={{ color: '#fff', fontWeight: 'bold' }}>About us</h1>
            <p style={{ color: '#fff' }}>
              Read more about us
            </p>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
   <Jumbotron className={styles.RegularBanner}>
     {renderTop()}
   </Jumbotron> 
  )
}

export default RegularBanner