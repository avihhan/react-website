import React from 'react'
import './Footer.css'

import facebook from './social_media_icons/logo-facebook.svg'
import twitter from './social_media_icons/logo-twitter.svg'
import instagram from './social_media_icons/logo-instagram.svg'
import linkedin from './social_media_icons/logo-linkedin.svg'

function Footer () {
  return (
    <footer className='footer'>
      <div class='footer-links'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </div>
      <div class="footer-social">
			<a href="#"><img src={facebook} alt="facebook"></img></a>
			<a href="#"><img src={twitter} alt="twitter"></img></a>
			<a href="#"><img src={instagram} alt="instagram"></img></a>
			<a href="#"><img src={linkedin} alt="linkedin"></img></a>
		</div>
    </footer>
  )
}

export default Footer
