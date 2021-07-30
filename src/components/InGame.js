import PlayerCard from './PlayerCard';

const InGame = ({ newPlayers, setNewPlayers, setData, setGame }) => {
    
    const cards = newPlayers.map(player => {
        return (
            <PlayerCard player={player} />
        )
    });

    return (
        <div>
            {cards}
            <button onClick={() => setGame(false)}>reset game</button>
        </div>
    )
};

export default InGame;