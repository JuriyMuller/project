import PropTypes from 'prop-types';
import React, { memo } from 'react';
import nextId from "react-id-generator";
import "./events.scss"

const Events = memo((props) => {
   
    let card= [
        {
            id:nextId,
            day:16,
            date:"April 2019",
            title:"Ethyl Voting",
            txt:"“The Ethyl Community Fund Proposal has started their voting.”",
            btnTxt:"Read more",
        },
        {
            id:nextId,
            day:30,
            date:"May 2019",
            title:"Chainges Conference",
            txt:"Join the first world-class quality blockchain and cryptocurrency conference",
            btnTxt:"Read more",
        },
        {
            id:nextId,
            day:10,
            date:"June 2019",
            title:"Ethyl Voting",
            txt:"Catapult Lymcoin (version 2.0) will come sometime this year",
            btnTxt:"Read more",
        },
]
  return (
    <div className="events">
        <div className="container">
            <h3 className="events-subtitle">10. EVENTS</h3><br />
            <h2 className="events-title">Upcoming Events</h2><br />
            <div className="events-cards">
                {
                    card.map((item)=>{
                        return(
                            
                            <div key={item.id} className="events-item">
                                <span key={item.id} className="events-cards-date">{item.day}<span key={item.id}>{item.date}</span></span>
                                <h3 key={item.id} className="events-cards-title">{item.title}</h3>
                                <p key={item.id} className="events-cards-txt">{item.txt}</p>
                                <a key={item.id} href="#" className={
                                     item.day==30 ? "events-cards-btn events-cards-btn-active" : "events-cards-btn"
                                }>
                                    {item.btnTxt}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
})


export default Events