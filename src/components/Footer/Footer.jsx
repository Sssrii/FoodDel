import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'; // ✅ Adjust the path if needed

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis doloribus nemo fugit explicabo neque, incidunt iusto a? Facilis debitis, ut cupiditate adipisci minima distinctio impedit necessitatibus quia hic dicta et?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+18-205-456-8700</li>
                <li>contact@tomato.com</li>
            </ul>

        </div>

      </div>
      <hr/>
      <p className="footer-copyright">copyright 2025 @ Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
