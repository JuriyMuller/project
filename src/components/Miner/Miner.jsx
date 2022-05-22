import PropTypes from 'prop-types'
import React, { memo } from 'react'
import "./miner.scss"

const Miner = memo((props) => {
  return (
    <div className="miner">
        <div className="container miner-container">
            <h3 className="miner-subtitle">09. MINER</h3>
            <h2 className="miner-title">Compatible GPU Miner 
            Software</h2>
            <p className="miner-txt">Download one of these miners for your GPU</p>
            <div className="download">
                <a href="#" className="miner-windows">
                    <span className="miner-windows-title">Windows Lymcoin Miner</span>
                    <span className='miner-windows-item'>Download</span>
                </a>
                <a href="#" className="miner-linux">
                    <span className="miner-linux-title">Linux Lymcoin Miner</span>
                    <span className='miner-linux-item'>Download</span>
                </a>
            </div>
            <div className="miner-statistics">
                <div className="total-miners">
                    <span>87 278 <cite>Total miners</cite></span>
                </div>
                <div className="total-hashrate">
                    <span>2.82 Tsol/s <cite>Total hashrate</cite></span>
                </div>
            </div>
        </div>
    </div>
  )
})


export default Miner