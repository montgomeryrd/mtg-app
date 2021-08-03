import { useState } from 'react';

const PlayerCard = ({ player }) => {
    const [count, setCount] = useState(20);

    return (
        <div key={player.id} className={count < 1 ? "card-container dead" : "card-container"}>
            <h3>{player.name}</h3>
            <section className="health-container">
                <div className="minus" onClick={() => setCount(prev => prev - 1)}>-</div>
                <div className="health">{count}</div>
                <div className="plus" onClick={() => setCount(prev => prev + 1)}>+</div>
            </section>
        </div>
    )
};

export default PlayerCard;