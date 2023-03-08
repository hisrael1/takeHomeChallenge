import React from 'react';

function CoffeesItem({name, year}) {
    return (
        <div className="coffees-item-container">
            &#9749; 
            <span className="coffee-name"> {name} </span>
                -
            <span> {year} </span>
        </div>
    )
}

export default CoffeesItem;
