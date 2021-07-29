import { useState, useEffect } from 'react';
import Setup from './components/Setup';
import Player from './components/Player';

function App() {
	const initialState = () => JSON.parse(window.localStorage.getItem('280-days-data')) || [];
	const [data, setData] = useState(initialState);
	const [newPlayers, setNewPlayers] = useState([]);
	const [game, setGame] = useState(false);

	useEffect(() => {
		window.localStorage.setItem('280-days-data', JSON.stringify(data));
	}, [data]);

	return (
		<div className="App">
			{
				!game ? (
					<Setup 
						data={data} 
						setData={setData} 
						game={game} 
						setGame={setGame} 
						newPlayers={newPlayers}
						setNewPlayers={setNewPlayers}
					/>
				) : ( 
					<Player 
						newPlayers={newPlayers}
						setData={setData} 
						setGame={setGame}
					/>
				)
			}
		</div>
	);
};

export default App;