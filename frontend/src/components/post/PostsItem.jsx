import React from 'react';

function PostsItem({title, rating, text, coffeeId, coffees}) {
    const coffee = coffees.find(item => (item._id === coffeeId));
    let caffeinePerOz;
    if (coffee) {
        caffeinePerOz = Math.round(coffee.caffeineContent * coffee.caffeinePercentage / 100);
    }
    

    return (
        <div className="post-item-container">
            <div className="post-title">{title}</div>
            <div className="post-rating">
                {[...Array(rating)].map((star, idx) => (
                    <span key={idx}>&#9733;</span>
                ))}
            </div>
            <div className="post-text">
                {text}
            </div>
            <div className="post-coffee"> 
                { coffee ? coffee.name : null } - {caffeinePerOz ? caffeinePerOz : null} mg per oz
            </div>
        </div>
    )
}

export default PostsItem;
