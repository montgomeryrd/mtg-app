import Card from './Card';

const Player = ({ newPlayers, setData, setGame }) => {
    
    const cards = newPlayers.map(player => {
        return (
            <Card player={player} />
        )
    });

    return (
        <div>
            {cards}
        </div>
    )
};

export default Player;