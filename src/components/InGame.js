import PlayerCard from './PlayerCard';

const InGame = ({ newPlayers, setNewPlayers, setData, setGame }) => {

    const cards = newPlayers.map(player => {
        return (
            <div key={player.id} >
                <PlayerCard player={player} />
            </div>
        )
    });

    return (
        <div className="ingame-container">
            {cards}
            <h4 onClick={() => setGame(false)}>new game</h4>
        </div>
    )
};

export default InGame;