import PropTypes from 'prop-types'
import React, { memo } from 'react'
import "./donate.scss"

const Donate = memo((props) => {
  return (
    <div className="donate">
        <div className="container">
            <h3 className="donate-subtitle">
            11. DONATE
            </h3><br />
            <h2 className="donate-title">
            Donate to Support 
            Development
            </h2><br />
            <p className="donate-txt">
            Lymcoin is not a pre-mined coin, so all of its development is funded
            by kind people like you.
            </p>
            <div className="donate-cards">
                <div className="donate-cards-lymcoin">
                    <span className="donate-cards-lymcoin-code">177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</span>
                    <cite>Lymcoin Wallet Address</cite>
                </div>
                <div className="donate-cards-bitcoin">
                    <span className="donate-cards-bitcoin-code">177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</span>
                    <cite>Lymcoin Wallet Address</cite>
                </div>
            </div>
        </div>
    </div>
  )
})

Donate.propTypes = {}

export default Donate