import "./CharacterCreator.css";
import { useState } from "react";
import CharacterFigure from "../pages/CharacterFigure";

function CharacterCreator({ onComplete, onBack }) {
    const [characterName, setCharacterName] = useState("");
    const [skinTone, setSkinTone] = useState("skin-tone-1");
    const [hairStyle, setHairStyle] = useState("hair-style-1");
    const [hairColor, setHairColor] = useState("hair-color-1");
    const [clothing, setClothing] = useState("clothing-1");

    return (
        <main className="character-creator">
            <header className="character-header">
                <h1>Create Your Character</h1>
                <p>Customize your explorer before traveling into history!</p>
            </header>

            <section className="character-creator-content">
                <div className="character-preview">
                    <h2>Your Character</h2>
                    <p>{characterName || "Your Explorer"}</p>
                    <CharacterFigure
                        character={{
                            characterName,
                            skinTone,
                            hairStyle,
                            hairColor,
                            clothing,
                        }}
                    />
                </div>

                <div className="character-customization">
                    <h2>Customize Your Explorer</h2>

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

                    <div className="customization-option">
                        <label>Skin Tone</label>
                        <div className="skin-tone-options" aria-label="Choose a skin tone">
                            <button type="button" className={`skin-tone-button skin-tone-1 ${skinTone === "skin-tone-1" ? "selected" : ""}`} onClick={() => setSkinTone("skin-tone-1")}></button>
                            <button type="button" className={`skin-tone-button skin-tone-2 ${skinTone === "skin-tone-2" ? "selected" : ""}`} onClick={() => setSkinTone("skin-tone-2")}></button>
                            <button type="button" className={`skin-tone-button skin-tone-3 ${skinTone === "skin-tone-3" ? "selected" : ""}`} onClick={() => setSkinTone("skin-tone-3")}></button>
                            <button type="button" className={`skin-tone-button skin-tone-4 ${skinTone === "skin-tone-4" ? "selected" : ""}`} onClick={() => setSkinTone("skin-tone-4")}></button>
                            <button type="button" className={`skin-tone-button skin-tone-5 ${skinTone === "skin-tone-5" ? "selected" : ""}`} onClick={() => setSkinTone("skin-tone-5")}></button>
                        </div>
                    </div>

                    <div className="customization-option">
                        <label>Hair Style</label>
                        <div className="hair-style-options">
                            <button type="button" className={`hair-style-button hair-style-1 ${hairStyle === "hair-style-1" ? "selected" : ""}`} onClick={() => setHairStyle("hair-style-1")}>Short</button>
                            <button type="button" className={`hair-style-button hair-style-2 ${hairStyle === "hair-style-2" ? "selected" : ""}`} onClick={() => setHairStyle("hair-style-2")}>Med</button>
                            <button type="button" className={`hair-style-button hair-style-3 ${hairStyle === "hair-style-3" ? "selected" : ""}`} onClick={() => setHairStyle("hair-style-3")}>Curly</button>
                            <button type="button" className={`hair-style-button hair-style-4 ${hairStyle === "hair-style-4" ? "selected" : ""}`} onClick={() => setHairStyle("hair-style-4")}>Long</button>
                        </div>
                    </div>

                    <div className="customization-option">
                        <label>Hair Color</label>
                        <div className="hair-color-options">
                            <button type="button" className={`hair-color-button hair-color-1 ${hairColor === "hair-color-1" ? "selected" : ""}`} onClick={() => setHairColor("hair-color-1")}></button>
                            <button type="button" className={`hair-color-button hair-color-2 ${hairColor === "hair-color-2" ? "selected" : ""}`} onClick={() => setHairColor("hair-color-2")}></button>
                            <button type="button" className={`hair-color-button hair-color-3 ${hairColor === "hair-color-3" ? "selected" : ""}`} onClick={() => setHairColor("hair-color-3")}></button>
                            <button type="button" className={`hair-color-button hair-color-4 ${hairColor === "hair-color-4" ? "selected" : ""}`} onClick={() => setHairColor("hair-color-4")}></button>
                            <button type="button" className={`hair-color-button hair-color-5 ${hairColor === "hair-color-5" ? "selected" : ""}`} onClick={() => setHairColor("hair-color-5")}></button>
                        </div>
                    </div>

                    <div className="customization-option">
                        <label>Clothing</label>
                        <div className="clothing-options">
                            <button type="button" className={`clothing-button clothing-1 ${clothing === "clothing-1" ? "selected" : ""}`} onClick={() => setClothing("clothing-1")}>1</button>
                            <button type="button" className={`clothing-button clothing-2 ${clothing === "clothing-2" ? "selected" : ""}`} onClick={() => setClothing("clothing-2")}>2</button>
                            <button type="button" className={`clothing-button clothing-3 ${clothing === "clothing-3" ? "selected" : ""}`} onClick={() => setClothing("clothing-3")}>3</button>
                            <button type="button" className={`clothing-button clothing-4 ${clothing === "clothing-4" ? "selected" : ""}`} onClick={() => setClothing("clothing-4")}>4</button>
                        </div>
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
                        onClick={() =>
                            onComplete({
                                characterName: characterName,
                                skinTone: skinTone,
                                hairStyle: hairStyle,
                                hairColor: hairColor,
                                clothing: clothing,
                            })
                        }
                    >
                        Begin Adventure
                    </button>
                </div>
            </section>
        </main>
    );
}

export default CharacterCreator;