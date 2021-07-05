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
    <Col lg={2} md={4}>
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

const Footer2 = () => {
  return (
    <div className='footer-bottom'>
      <Container fluid>
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
          <Col lg={2} md={12} style={{ display: 'flex', justifyContent: 'center'}}>
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
          <Col lg={6} md={12} style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
  );
}

export default Footer2