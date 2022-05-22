import React, { memo } from 'react'
import "./ourteam.scss"
import user from "../../images/user.png"
import user1 from "../../images/user(1).png"
import user2 from "../../images/user(2).png"
import nextId from "react-id-generator";

const OurTeam = memo(() => {
    let users = [
        {
            id:nextId(),
            img:user,
            title:"John Nelson",
            speciality:"Account Manager"
        },
        {
            id:nextId(),
            img:user1,
            title:"John Nelson",
            speciality:"Account Manager"
        },
        {
            id:nextId(),
            img:user2,
            title:"John Nelson",
            speciality:"Account Manager"
        },
    ]
  return (
    <div className="ourteam">
        <div className="container">
            <h3 className="ourteam-subtitle">07. TEAM</h3><br />
            <h2 className="ourteam-title">Team & Advisors</h2><br />
            <p className="ourteam-txt">With a team of top technology and finance professionals, the nonprofit Lymcoin expands access to low-cost financial services to fight poverty and maximize individual potential.</p>
            <div className="ourteam-wrapper">
                {
                    users.map((item)=>{
                        return(
                            <div key={item.id} className="ourteam-user">
                            <img src={item.img} alt="" className="ourteam-user-img" />
                            <h3 className="ourteam-user-name">{item.title}</h3>
                            <span className="ourteam-user-speciality">{item.speciality}</span>
                            </div>
                        )
                        
                    })
                }
                
                
            </div>
        </div>
    </div>
  )
})

export default OurTeam