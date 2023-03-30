import React from 'react'
import Navbar from './navbar/Navbar.js'
import Text_transition from './text_transitions/Text_transition.js'
import Logo from './logo/logo.js'
import Footer from './footer/Footer.js'
import BackgroundImg from './background/Background.js'
import './text/Text.css'


function HomePage () {
  return (
    <div className='App'>
      <Navbar />
      <Text_transition />
      <BackgroundImg />
      <Logo />
      <div className="bottom-right">
        ~~Avihhan
      </div>
      <Footer />
      {/* Rest of the app goes here */}
    </div>
  )
}

export default HomePage
