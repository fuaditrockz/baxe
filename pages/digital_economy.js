import { Container } from 'react-bootstrap'

import { Header, Footer2 } from '../components/partials'

import RegularBanner from '../components/sections/RegularBanner'
import WhatIsBaxe from '../components/sections/WhatIsBaxe'
import OurPartners from '../components/sections/OurPartners'

export default function DigitalEconomy() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner />
        <WhatIsBaxe />
        <OurPartners />
      </Container>
      <Footer2 />
    </>
  )  
}
