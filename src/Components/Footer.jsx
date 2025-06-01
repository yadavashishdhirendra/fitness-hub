import React, { Fragment } from 'react'
import '../Styles/Footer.scss'
import Logo from '../Assets/Icon/logo__arfanutrition.png'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-row">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212121" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,128C240,139,300,213,360,240C420,267,480,245,540,240C600,235,660,245,720,250.7C780,256,840,256,900,245.3C960,235,1020,213,1080,213.3C1140,213,1200,235,1260,213.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}

        <div className='footer-naming-row'>
          <img src={Logo} alt="" />
          <div>
            <h3>ELEVATE YOUR POTENTIAL</h3>
            <p>Mazgoan, Mumbai – 400010</p>
            <p>Phone: <a href="">+91 9321137570</a></p>
            <p>Email: <a href="">support@muscleblast.in</a></p>
          </div>
        </div>

        <div className="footer-grid-row">
          <div>
            <img src={Logo} alt="" />
            <div>
              <h3>ELEVATE YOUR POTENTIAL</h3>
              <p>Mazgoan, Mumbai – 400010</p>
              <p>Phone: <a href="">+91 9321137570</a></p>
              <p>Email: <a href="">support@muscleblast.in</a></p>
            </div>
          </div>
          <div>
            <h3>Footer Menu</h3>
            <ul>
              <li><a href="">Instagram profile</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Latest News</a></li>
            </ul>
          </div>
          <div>
            <h3>Our stores</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Catalogue</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3>Useful Links</h3>
            <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Returns</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">FAQ’s</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Our Sitemap</a></li>
            </ul>
          </div>
        </div>


        <p>&copy; 2025 Arman Nutirtion - Elevate Your Potential. All Rights Reserved.</p>

      </footer>
    </Fragment>
  )
}

export default Footer
