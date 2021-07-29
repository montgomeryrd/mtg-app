import { useState } from 'react';
import Footer from './Footer';

const Setup = ({ data, setData, setGame, newPlayers, setNewPlayers }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        setNewPlayers([...newPlayers, { player: value }]);
        setValue('');
    };
    
    const addPlayer = player => {
        setNewPlayers([...newPlayers, player]);
    };

    const removePlayer = index => {
        const players = newPlayers.filter((player, id) => id !== index);
        setNewPlayers(players);
    };

    const prevPlayers = data.map((player, index) => {
        return (
            <li key={index} onClick={() => addPlayer(player)}>{player.player}</li>
        )
    });

    const currPlayers = newPlayers.map((player, index) => {
        return (
            <li key={index} onClick={() => removePlayer(index)}>{player.player}</li>
        )
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="player">Add New Player</label>
                <input
                    id="player"
                    name="player"
                    type="text"
                    autoComplete="off"
                    onChange={e => setValue(e.target.value)}
                    required={true}
                    placeholder="name"
                />
                <input type="submit" value="Submit" />
            </form>

            { prevPlayers.length ? <h2>Add Previous Player(s)</h2> : '' }

            <ul>
                {prevPlayers}
            </ul>
            { prevPlayers.length ? <button onClick={() => setData([])}>remove previous players</button> : ''}

            { newPlayers.length ? <h2>players ready</h2> : '' }
            <ul>
                {currPlayers}
            </ul>
            <Footer setGame={setGame} newPlayers={newPlayers} setData={setData} />
        </div>
    )
};

export default Setup;