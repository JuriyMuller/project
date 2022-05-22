import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ChartOne from '../../images/chart.svg'
import ChartTwo from '../../images/chart(1).svg'
import "./charts.scss"

const Charts = memo((props) => {
  return (
    <div className="charts">
        <div className="container">
            <h3 className="charts-subtitle">08. CHARTS</h3>
            <h2 className="charts-title">Lymcoin Charts</h2>
            <div className="charts-wrapper">
                <div className="current-price">
                    <span className='current-price-title'>Current Price</span>
                    <span className="current-price-item">$541.27</span>
                    <img src={ChartOne} alt="" className="current-price-chart" />
                </div>
                <div className="market-cap">
                    <span className="market-cap-title">Market Cap </span>
                    <span className="market-cap-item">$147 547 106</span>
                    <img src={ChartTwo} alt="" className="market-cap-chart" />
                    </div> 
            </div>
        </div>
    </div>
  )
})



export default Charts