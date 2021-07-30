import { useState, useEffect } from 'react';
import GameSetup from './components/GameSetup';
import InGame from './components/InGame';
import './styles.css';

function App() {
	const initialState = () => JSON.parse(window.localStorage.getItem('mtg-player-data')) || [];
	const [data, setData] = useState(initialState);
	// const [previousPlayers, setPreviousPlayers] = useState(data.previousPlayers || []);
	const [newPlayers, setNewPlayers] = useState([]);
	const [game, setGame] = useState(false);

	useEffect(() => {
		window.localStorage.setItem('mtg-player-data', JSON.stringify(data));
	}, [data]);

	return (
		<div className="App">
			{ game === false ?
				<GameSetup 
					// previousPlayers={previousPlayers}
					newPlayers={newPlayers}
					setNewPlayers={setNewPlayers}
					setGame={setGame}
					setData={setData}
				/>
			:
				<InGame 
					newPlayers={newPlayers}
					setNewPlayers={setNewPlayers}
					setData={setData}
					setGame={setGame}
				/>
			}
		</div>
	);
};

export default App;