import React from 'react'

const Footer = ({ setGame, previousPlayers, newPlayers, setData }) => {

    const startGame = () => {
        setData({previousPlayers: previousPlayers, newPlayers: newPlayers})
        setGame(true);
    };

    return (
        <footer>
            { newPlayers.length >= 2 ? <button onClick={() => startGame()}>start game</button> : '' }
        </footer>
    )
};

export default Footer;