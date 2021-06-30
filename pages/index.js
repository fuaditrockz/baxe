import { Container } from 'react-bootstrap'
import { Header } from '../components/partials'

import Banner from '../components/sections/Banner'

export default function Home() {
  return (
    <>
      <Header />
      <Container fluid>
        <Banner />
      </Container>
    </>
  )  
}
