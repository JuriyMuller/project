
import React, { memo } from 'react'
import "./benefits.scss"
import pieChart from "../../images/pie-chart.svg"
import suitcase from "../../images/suitcase.svg"
import objective from "../../images/objective.svg"
import clock from "../../images/clock.svg"
import nextId from "react-id-generator";

const Benefits = memo((props) => {
  
    let lymcoinBenefits =[
        {
            id:nextId(),
            img:pieChart,
            title:"Lymcoin Benefits",
            content:"Use Lymcoin to make instant"},
        {
            id:nextId(),
            img:suitcase,
            title:"Lymcoin Benefits",
            content:"Use Lymcoin to make instant"},
        {
            id:nextId(),
            img:objective,
            title:"Lymcoin Benefits",
            content:"Use Lymcoin to make instant"
        },
        {
            id:nextId(),
            img:clock,
            title:"Lymcoin Benefits",
            content:"Use Lymcoin to make instant"
        },
    ]
  return (
    <div className="benefits">
        <div className="container benefits-container">
            <div className="inner">
            <div className="benefits-subtitle">02. BENEFITS</div>
            <div className="benefits-title">Lymcoin Benefits</div>
            <div className="wrapper">
               
                    {lymcoinBenefits.map((item)=>(
                         <div key={item.id} className="benefits-item">
                        
                        <img 
                        key={item.id}
                        src={item.img} 
                        className="benefits-img" />
                        <h2 
                        key={item.id} 
                        className="benefits-item-title">{item.title}</h2>
                        <p 
                        key={item.id} 
                         className="benefits-item-txt">{item.content}</p>
                         </div>
                        )
                        
                    
                        
                    )}
                
            </div>
            </div>
        </div>
    </div>
  )
})

Benefits.propTypes = {}

export default Benefits