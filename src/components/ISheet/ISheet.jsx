
import React, { memo } from 'react'
import "./isheet.scss"
import alpha from "../../images/alpha.png"
import dp from "../../images/denvers-properties.png"
import fad from "../../images/frameo-architecture-d'interieur.png"
import remoteStudio from "../../images/remote-studio.png"
import remark from "../../images/remark.png"
import copixel from "../../images/copixel.png"

const ImplementationSheet = memo((props) => {
  return (
    <div className="i-sheet">
        <div className="container i-sheet-container">
            <h3 className="i-sheet-subtitle">04. ROADMAP</h3>
            <br />
            <h2 className="i-sheet-title">Implementation Sheet</h2>
            <br />
            <p className="i-sheet-desc">
              At Lymcoin we have one focus - creating a viable data marketplace to start returning value
            to token holders in the shortest time possible.
            </p>


            <div className="i-sheet-one-chart">
              <span id='one-item' className='i-sheet-one-chart-item'>
                <cite className='date'> November 2017</cite>
               </span>
              <span id='two-item' className='i-sheet-one-chart-item'>Tracking services for different smart contract types
              <cite className='date'>March 2018</cite>
              </span>
              <span id='three-item' className='i-sheet-one-chart-item'>
              Release of a decentralized app for affiliate networks
              <cite className='date'>May 2020</cite>
              </span>
              </div>
              <div className="i-sheet-two-chart"> 
              <span id='four-item' className='i-sheet-two-chart-item'>
              Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)
                <cite className='date'>January 2018</cite>
              </span>
              <span id='five-item' className='i-sheet-two-chart-item'>
              Release of a decentralized app for merchants / affiliates
                <cite className='date'>March 2019</cite>
              </span>
              <span id='six-item' className='i-sheet-two-chart-item'>
              Launch of the world's first decentralized affiliate network based on the HOQU platform
                <cite className='date'>September 2020</cite>
              </span>
              </div>
            <div className="companies">
              <a href="#" className="companies-link">
                <img src={copixel} alt="" className="companies-link-item" />
              </a>
              <a href="#" className="companies-link">
              <img src={remark} alt="" className="companies-link-item" />
              </a>
              <a href="#" className="companies-link">
                <img src={remoteStudio} alt="" className="companies-link-item" />
              </a>
              <a href="#" className="companies-link">
                <img src={fad} alt="" className="companies-link-item" />
              </a>
              <a href="#" className="companies-link">
                <img src={dp} alt="" className="companies-link-item" />
              </a>
              <a href="#" className="companies-link">
                <img src={alpha} alt="" className="companies-link-item" />
              </a>
            </div>
             
           
        </div>
    </div>
  )
})


export default ImplementationSheet