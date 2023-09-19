import React from "react";
const Card = (prop) => {
    return (
        <div className="card">
            <img src={prop.image} alt="" srcset="" />
            <h2>{prop.name}</h2>
            <button>View more</button>
        </div>
    )
}
export default Card