import { useState } from 'react';

const GameSetup = ({ newPlayers, setNewPlayers, setGame, setData }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        const num = Math.random() * 1;
        setNewPlayers([...newPlayers, {name:value, id:num}]);
        setValue('');
    };
    
    // --------------------------------------------------------------------------

    const currPlayers = newPlayers.map(player => {
        return (
            <li key={player.id} onClick={() => removePlayer(player.id)}>{player.name}</li>
        )
    });

    const removePlayer = playerID => {
        const playerList = newPlayers.filter(player => player.id !== playerID);
        setNewPlayers(playerList);
    };

    // --------------------------------------------------------------------------

    const startGame = () => {
        setData({newPlayers: newPlayers})
        setGame(true);
    };

    return (
        <div className="setup-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required={true}
                    placeholder="add player"
                />
            </form>

            <section className="new-player-list">
                <h2 className="title">PLAYER LIST</h2>
                <ul className="current">
                    {currPlayers}
                    {newPlayers.length >= 2 ? <button className="start-btn" onClick={startGame}>start game</button> : ''}
                </ul>
            </section>
        </div>
    )
};

export default GameSetup;