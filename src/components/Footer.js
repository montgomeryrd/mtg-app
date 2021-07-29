import React from 'react'

const Footer = ({ setGame, newPlayers, setData }) => {

    const startGame = () => {
        setData(newPlayers, () => {
            setGame(true);
        });
    };

    return (
        <footer>
            { newPlayers.length >= 2 ? <button onClick={() => startGame()}>start game</button> : '' }
        </footer>
    )
};

export default Footer;