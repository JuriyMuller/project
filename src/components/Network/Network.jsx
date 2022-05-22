import PropTypes from 'prop-types'
import React, { memo } from 'react'
import "./network.scss"
import bittrex from "../../images/bittrex.png"
import bitfinex from "../../images/bitfinex.png"
import poloniex from "../../images/poloniex.png"

const Network = memo((props) => {
  return (
    <div className="network">
        <div className="container network-container">
            <div className="network-subtitle">
            05. NETWORK
            </div>
            <div className="network-title">Growing Global 
            Network
            </div>
            <p className="network-txt">Lymcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have adopted our coin already. There is much more to come. Stay tuned.</p>
            <div className="network-items">
              <span>50<span>+</span>
              <cite>Exchanges</cite></span>
              <span>180<span>+</span>
              <cite>Companies</cite>
              </span>
            </div>
            <div className="network-companies">
              <a href="#" className="network-companies-link">
                <img src={bittrex} className="network-companies-item" />
              </a>
              <a href="#" className="network-companies-link">
                <img src={bitfinex} className="network-companies-item" />
              </a>
              <a href="#" className="network-companies-link">
                <img src={poloniex}className="network-companies-item" />
              </a>
            </div>
            
        </div>
    </div>
  )
})


export default Network