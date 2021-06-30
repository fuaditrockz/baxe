import Image from 'next/image'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { FiInstagram, FiTwitter, FiLinkedIn, FiFacebook } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'

import logo from '../../public/logo.png'
import ivce from '../../public/ivce.png'

const Menu = ({
  title,
  menus
}) => {
  return (
    <Col lg={2}>
      <h6 style={{ color: '#fff', fontWeight: 'bold'}}>{title}</h6>
      <ul>
        {menus.map((i, index) => {
          return (
            <li key={index}>
              <a href={i.link} style={{ color: '#fff'}}>
                {i.menu}
              </a>
            </li>
          )
        })}
      </ul>
    </Col>
  )
}

const Footer = () => {
  return (
    <div
      className="baxe-container footer-container"
      style={{
        backgroundColor: '#000',
      }}
    >
      <Container fluid>
        <Row className="footer-top">
          <Col lg={6} style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <h6 style={{ color: '#FFF' }}>CONTACT US</h6>
              <h3 style={{ color: '#FFF', fontWeight: 'bold' }}>
                Know More <br/> About Our <br/> Business
              </h3>
            </div>
          </Col>
          <Col lg={5}>
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
        <Row>
          <Col lg={2}>
            <Image
              src={logo}
              alt="Baxe Logo"
              height={43.94}
              width={158}
            />
            <p style={{ color: '#fff', fontSize: 16, marginTop: 20 }}>
              BAXE harnesses revolutionary new technologies to create a truly borderless and connected global economy.
            </p>
          </Col>
          <Menu
            title="About"
            menus={[
              { link: '#', menu: 'What is BAXE?' },
              { link: '#', menu: 'Why use BAXE?' },
              { link: '#', menu: 'Our Team' },
              { link: '#', menu: 'Our Partners' }
            ]}
          />
          <Menu
            title="The Digital Economy"
            menus={[
              { link: '#', menu: 'What is the Digital Economy?' },
              { link: '#', menu: "What's next?" },
            ]}
          />
          <Menu
            title="BAXE for Business"
            menus={[
              { link: '#', menu: 'How it works?' },
            ]}
          />
          <Menu
            title="Mobile App"
            menus={[
              { link: '#', menu: 'How to use?' },
              { link: '#', menu: 'Download' },
            ]}
          />
          <Menu
            title="Support"
            menus={[]}
          />
        </Row>
        <Row>
          <Col lg={2}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <a href='#' style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <FiFacebook />
              </a>
              <a href='#' style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <FiTwitter />
              </a>
              <a href='#' style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <FiInstagram />
              </a>
              <a href='#' style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <AiFillLinkedin />
              </a>
            </div>
          </Col>
          <Col lg={6} style={{ height: 70, display: 'flex', alignItems: 'center'}}>
            <p style={{
              color: '#fff',
              fontFamily: `'Montserrat', sans-serif`,
              fontWeight: 'bold'
            }}>
              © 2021 BAXE
            </p>
          </Col>
          <Col lg={4} style={{ textAlign: 'center'}}>
            <Image
              src={ivce}
              alt="Baxe Logo"
              height={80}
              width={157}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer