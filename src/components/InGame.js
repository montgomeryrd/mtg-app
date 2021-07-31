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
        <div className="players-in-game">
            {cards}
            <button className="reset" onClick={() => setGame(false)}>new game</button>
        </div>
    )
};

export default InGame;