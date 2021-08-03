import { useState } from 'react';

const GameSetup = ({ newPlayers, setNewPlayers, setGame, setData }) => {
    const [value, setValue] = useState('');
    const [first, setFirst] = useState('');
    
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
        setData({newPlayers: newPlayers});
        const index = Math.floor(Math.random() * newPlayers.length);
        setFirst(newPlayers[index].name);
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

            <section>
                <h2>PLAYER LIST</h2>
                <ul>
                    {currPlayers}
                    {newPlayers.length >= 2 ? <h2 onClick={startGame}>START GAME</h2> : ''}
                </ul>
            </section>

            {first.length ? (
                <div>
                    <div className="overlay"></div>
                    <h2>{first.toUpperCase()} GOES FIRST!</h2>
                    <button onClick={() => setGame(true)}>let's play</button>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
};

export default GameSetup;