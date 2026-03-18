import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ initialRating = 0, onRatingSelect }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (value) => {
        setRating(value);
        if (onRatingSelect) {
            onRatingSelect(value);
        }
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <span
                        key={index}
                        className={`star ${ratingValue <= (hover || rating) ? 'filled' : ''} ${ratingValue <= hover ? 'hovered' : ''}`}
                        onClick={() => handleClick(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
