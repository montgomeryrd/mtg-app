import { useState } from 'react';

const PlayerCard = ({ player }) => {
    const [count, setCount] = useState(20);

    return (
        <div key={player.id} className="card-container">
            <h3>{player.name}</h3>
            <section className="health">
                <div className="minus" onClick={() => setCount(prev => prev - 1)}>-</div>
                <div className="health">{count}</div>
                <div className="plus" onClick={() => setCount(prev => prev + 1)}>+</div>
            </section>
        </div>
    )
};

export default PlayerCard;