import "./CharacterCreator.css";
import { useState } from "react";

import whiteBoy from "../assets/white-boy.png";
import whiteGirl from "../assets/white-girl.png";
import blackBoy from "../assets/black-boy.png";
import blackGirl from "../assets/black-girl.png";
import asianGirl from "../assets/asian-girl.png";
import asianBoy from "../assets/asian-boy.png";
import latinaGirl from "../assets/latina-girl.png";
import latinoBoy from "../assets/latino-boy.png";

const characters = [
    {id: 1, name: 'Character 1', img: latinoBoy},
    {id: 2, name: 'Character 2', img: latinaGirl},
    {id: 3, name: 'Character 3', img: whiteBoy},
    {id: 4, name: 'Character 4', img: whiteGirl},
    {id: 5, name: 'Character 5', img: blackBoy},
    {id: 6, name: 'Character 6', img: blackGirl},
    {id: 7, name: 'Character 7', img: asianBoy},
    {id: 8, name: 'Character 8', img: asianGirl}
];

function CharacterCreator({ onComplete, onBack }) {
    const [characterName, setCharacterName] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState("");


    return (
        <main className="character-creator">
            <header className="character-header">
                <h1>Choose Your Character</h1>
                <p>Choose which explorer you would like to travel back in time with!</p>
            </header>

            <section className="character-creator-content">

                <section className="character-selection-grid">
                    <h1>Select Your Explorer</h1>
                    {characters.map((character) => (
                        <button
                            key={character.id}
                            type="button"
                            className={
                                selectedCharacter === character.id
                                    ? "character-card selected"
                                    : "character-card"
                            }
                            onClick={() => {
                                console.log("Selected:", character.id);
                                setSelectedCharacter(character.id);
                            }}
                        >
                            <img 
                                src={character.img}
                                alt={character.name}
                            />
                            <p>{character.name}</p>
                        </button>
                    ))}
                </section>

                <div className="character-customization">
                    <h2>Name Your Explorer</h2>

                    <div className="customization-option">
                        <label htmlFor="character-name">Character Name</label>
                        <input
                            type="text"
                            id="character-name"
                            placeholder="Enter your character's name"
                            value={characterName}
                            onChange={(event) => setCharacterName(event.target.value)}
                        />
                    </div>

                    <button 
                        type="button"
                        onClick={() => {
                            onBack()
                        }}>
                    Back
                    </button>

                    <button
                        type="button"
                        className="begin-adventure-button"
                        onClick={() => {

                            onComplete({
                                characterName: characterName, 
                                selectedCharacter,
                                image: characters.find((character) => character.id === selectedCharacter).img
                        });
                        }}
                        disabled={!selectedCharacter || !characterName.trim()}
                    >
                        Begin Adventure
                    </button>
                </div>
            </section>
        </main>
    );
}

export default CharacterCreator;