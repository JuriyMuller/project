import React, { memo } from 'react'
import "./wallets.scss"
import wallets from "../../images/wallets.svg"

const Wallets = memo((props) => {
  return (
    <div className="wallets">
        <div className="container">
            <div className="wallets-wrapper">
                <div className="wallets-img">
                    <img src={wallets} alt="" />
                </div>
                <div className="wallets-content">
                    <h3 className="wallets-subtitle">06. WALLETS</h3>
                    <div className="wallets-title">Lymcoin Wallets</div>
                    <div className="wallets-buttons">
                        <a href="#" className="wallets-buttons-item active">contuct us</a>
                        <a href="#" className="wallets-buttons-item">contuct us</a>
                        <a href="#" className="wallets-buttons-item">contuct us</a>
                        <a href="#" className="wallets-buttons-item">contuct us</a>
                    </div>
                    <div className="wallets-cards">
                        <div className="android">
                            <h3 className="android-title">Android Lymcoin Wallet</h3>
                            <a href="#" className="download">Download</a>
                        </div>
                        <div className="apple">
                            <h3 className="apple-title">OSX Lymcoin Wallet</h3>
                            <a href="#" className="download">Download</a>
                        </div>
                        <div className="windows">
                            <h3 className="windows-title">Windows Lymcoin Wallet</h3>
                            <a href="#" className="download">Download</a>
                        </div>
                        <div className="linux">
                            <h3 className="linux-title">Linux Lymcoin Wallet</h3>
                            <a href="#" className="download">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})


export default Wallets