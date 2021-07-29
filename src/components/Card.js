import { useState } from 'react';

const Card = ({ player }) => {
    const [count, setCount] = useState(20);

    return (
        <div className="card-container">
            <h3>{player}</h3>
            <div className="minus" onClick={() => setCount(prev => prev - 1)}>-</div>
            <div className="health">{count}</div>
            <div className="plus" onClick={() => setCount(prev => prev + 1)}>+</div>
        </div>
    )
};

export default Card;