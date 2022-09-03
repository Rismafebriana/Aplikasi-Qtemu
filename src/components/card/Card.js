import React, { useState }  from "react";
import './Card.css'

function Card(){
    const [cards]=useState([
        {
        title: 'Event-1',
        text: `Fullstack JavaScript Program Lead Hacktiv8 secara virtual pada Jum'at, 9 September 2022
        19:00-20.30 WIB.`
    },
    {
        title: 'Event-2',
        text: `Data Science Program Lead Hacktiv8 secara virtual pada Minggu, 10 September 2022
        19:00-20.30 WIB.`
    },
    {
        title: 'Event-3',
        text: `React Native Program Lead Hacktiv8 secara virtual pada Minggu, 18 September 2022
        19:00-20.30 WIB.`
    },
    ])

return(
    <div>
        <section>
            <div className="container">
                <h2>Webinar</h2>
                <br></br>
                <div className="cards">
                {cards.map((card, i)=>(
                    <div key={i} className="card">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                        <button className="btn">Join US</button>
                    </div>
))}
                </div>
            </div>
        </section>
    </div>
    
);
 }
export default Card;
