import PropTypes from 'prop-types'
import React, { memo } from 'react'
import "./footer.scss"

const Footer = memo((props) => {
  return (
    <div className="footer">
        <div className="container footer-container">
            <h2 className="footer-title">
            I’d Like to Learn More
            About Lymcoin
            </h2>
            <form>
                <input className='footer-input' type="email" placeholder='Enter your Email' />
                <button className='footer-btn' type="submit">Sign in</button><br />
                <input className='footer-checkbox' type="checkbox"  /><label>I have read and agree to the terms & conditions</label>
            </form>
            <div className="footer-social-network">
                <a href="#" className="twitter"></a>
                <a href="#" className="facebook"></a>
                <a href="#" className="youtube"></a>
                <a href="#" className="skype"></a>
                <a href="#" className="pinterest"></a>
            </div>
            <span className="copy">AncoraThemes &copy; 2019. All Rights Reserved.</span>
        </div>
    </div>
  )
})


export default Footer