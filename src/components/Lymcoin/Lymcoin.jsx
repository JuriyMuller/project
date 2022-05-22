
import React, { memo } from 'react'
import img from "../../images/welcome.svg"
import "./lymcoin.scss"

const Lymcoin = memo((props) => {
  return (
    <div className='lymcoin'>
        <div className="container lymcoin-container">
            <img className='lymcoin-img' src={img} alt="" />
            <div className="lymcoin-content">
                <h3 className="lymcoin-subtitle">01. WELCOME</h3>
                <h2 className="lymcoin-title">Lymcoin is Digital Cash You Can Spend Anywhere</h2>
                <p className="lymcoin-txt">Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
                </div>
            


        </div>
    </div>
  )
})

export default Lymcoin