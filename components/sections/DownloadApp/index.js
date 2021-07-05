import Image from 'next/image'
import { Container, Row, Col, Button  } from 'react-bootstrap'

import androidLogo from '../../../public/android-download.png'
import iosLogo from '../../../public/appstore-download.png'
import humanDownload from '../../../public/download-image.png'

const ProviderLogo = ({
  provider
}) => {
  return (
    <div className='mr-2'>
      <Image
        src={provider === 'android' ? androidLogo : iosLogo}
        alt={provider === 'android' ? 'Playstore Download' : 'Appstore Download'}
        width={189}
        height={58}
      />
    </div>    
  )
}

const DownloadApp = () => {
  return (
    <div
      className="baxe-container"
      style={{
        position: 'relative',
        top: -100,
        backgroundColor: '#000',
        minHeight: 200
      }}
    >
      <Container fluid>
        <Row>
          <Col lg={8} style={{ paddingTop: 40, paddingBottom: 50 }}>
            <h4 style={{
              fontWeight: '800',
              color: '#FFF'
            }}>A new digital age</h4>
            <h4 style={{ color: '#FFF' }}>has arrived...</h4>
            <h6 style={{ color: '#FFF' }}>Our world is becoming more connected everyday thanks to the power of the internet, and those who do not embrace this digital age, will be left behind.</h6>
            <p style={{ color: '#FFF', fontSize: 14 }}>
              BAXE harnesses revolutionary new technologies to create a truly borderless and connected global economy.
              <br />
              <br />
              With this technology, new opportunities will be created for people from all corners of the globe.
              Your smart device or computer is all you need to be a part of what will become a monumental
              step forward in human history.
              <br />
              <br />
              Become one of the first to be a part of this global revolution by downloading the free BAXE App now.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <ProviderLogo provider='android' />
              <ProviderLogo provider='ios' />
            </div>
          </Col>
          <Col>
            <div style={{
              width: '100%',
              position: 'absolute ',
              top: -80,
              zIndex: 99
            }}>
              <Image
                src={humanDownload}
                alt='Baxe Values'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DownloadApp