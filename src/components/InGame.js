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
        <div>
            {cards}
            <button className="reset" onClick={() => setGame(false)}>reset game</button>
        </div>
    )
};

export default InGame;