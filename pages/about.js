import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import { Header, Footer, Footer2, VideoBAXE } from '../components/partials'

import RegularBanner from '../components/sections/RegularBanner'

export default function About() {
  const [showVideo, setShowVideo] = useState(false)

  const closeVideo1 = () => {
    setShowVideo(false)
  }

  const openVideo1 = () => {
    setShowVideo(true)
  }

  const openVideo2 = () => {
    setShowVideo(true)
  }
  
  return (
    <>
      <VideoBAXE
        isVideoShow={showVideo}
        onClickBackground={closeVideo1}
        onEndVideo={closeVideo1}
        videoID="L-zgF2f86i8"
      />
      <VideoBAXE
        isVideoShow={showVideo}
        onClickBackground={closeVideo1}
        onEndVideo={closeVideo1}
        videoID="3_2065uJzcU"
      />
      <Header />
      <Container fluid>
        <RegularBanner />
      </Container>
      <Footer />
      <Footer2 />
    </>
  )  
}
