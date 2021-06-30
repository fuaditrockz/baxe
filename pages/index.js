import { Container } from 'react-bootstrap'
import { Header, Footer } from '../components/partials'

import Banner from '../components/sections/Banner'
import Welcome from '../components/sections/Welcome'
import DownloadApp from '../components/sections/DownloadApp'
import Features from '../components/sections/Features'

export default function Home() {
  return (
    <>
      <Header />
      <Container fluid>
        <Banner />
      </Container>
      <Welcome />
      <DownloadApp />
      <Features />
      <Footer />
    </>
  )  
}
