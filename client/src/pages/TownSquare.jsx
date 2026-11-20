import { useEffect, useState } from "react";
import "./TownSquare.css";
import townBackground from "../assets/colonial-town-square.png";
import mayorQuincy from "../assets/mayor-quincy.png";
import CharacterFigure from "../pages/CharacterFigure"; 

const TYPING_SPEED_MS = 18;

function TownSquare({ character, onBack }) {
    console.log("TownSquare character:", character);

    const [conversationStep, setConversationStep] = useState(0);
    const [firstChoice, setFirstChoice] = useState(null);
    const [visibleChars, setVisibleChars] = useState(0);

    <button
        type="button"
        onClick={onBack}
    >
        Back to World Selection
    </button>

    const conversation = [
        {
            speaker: "Mayor Quincy",
            message:
                "Hello there, traveler! You look new to Boston. What brings you to our town today?",
            choices: [
                "I want to know why everyone in town seems so mad.",
                "I'm here to learn about history!",
            ],
        },
        {
            speaker: "Mayor Quincy",
            message:
                firstChoice === 0
                    ? "Ah, you picked a noisy time to visit! Ever since the French and Indian War ended, Great Britain has been in deep debt, which means they owe a lot of money to other countries. Parliament keeps passing new taxes to make us colonists pay for that war! But if you want to understand the full story, you should visit the western border first."
                    : "Well, you came to the right place! Right now, history is happening all around us because Great Britain is in deep debt after the French and Indian War. This means that they owe other countries a lot of money. Parliament keeps passing new taxes to make us colonists pay for that war! But if you want to understand the full story, you should visit the western border first.",
            choices: [
                "Why the western border?",
                "What's happening out on the border?",
            ],
        },
        {
            speaker: "Mayor Quincy",
            message:
                "The King made a big announcement after the war that changed who was allowed to settle out West. Go talk to Chief Thayendanegea near the Appalachian Mountains. He can explain!",
            choices: [],
        },
    ];

    const currentDialogue = conversation[conversationStep];
    const fullMessage = currentDialogue.message;
    const isTyping = visibleChars < fullMessage.length;
    const isFinalStep = currentDialogue.choices.length === 0;

    useEffect(() => {
        if (!isTyping) return;

        const timer = setTimeout(() => {
            setVisibleChars((count) => count + 1);
        }, TYPING_SPEED_MS);

        return () => clearTimeout(timer);
    }, [visibleChars, isTyping]);

    function skipTyping() {
        setVisibleChars(fullMessage.length);
    }

    function handleChoice(index) {
        if (conversationStep === 0) {
            setFirstChoice(index);
        }

        if (conversationStep < 2) {
            setConversationStep(conversationStep + 1);
            setVisibleChars(0);
        }
    }

    function restartConversation() {
        setConversationStep(0);
        setFirstChoice(null);
        setVisibleChars(0);
    }

    return (
        <section className="town-square-page">
            <div
                className="town-square-scene"
                style={{ backgroundImage: `url(${townBackground})` }}
            >
                <div className="town-square-mayor">
                    <img src={mayorQuincy} alt="Mayor Quincy" />
                </div>

                <div className="town-square-dialogue">
                    <div className="dialogue-nameplate">{currentDialogue.speaker}</div>

                    <p className="dialogue-text">
                        <span className="sr-only">{fullMessage}</span>
                        <span aria-hidden="true">{fullMessage.slice(0, visibleChars)}</span>
                        <span aria-hidden="true" className="dialogue-ghost">
                            {fullMessage.slice(visibleChars)}
                        </span>
                    </p>

                    {isTyping && (
                        <button className="dialogue-skip" onClick={skipTyping}>
                            Skip ▶
                        </button>
                    )}

                    {!isTyping && isFinalStep && (
                        <div className="mayor-quest-clue">
                            <strong>📜 New Clue: The King's Announcement</strong>
                            <p>
                                Find Chief Thayendanegea near the Appalachian Mountains.
                            </p>

                            <button
                                className="mayor-response-button"
                                onClick={restartConversation}
                            >
                                Talk to the mayor again ↻
                            </button>
                        </div>
                    )}
                </div>

                {!isTyping && !isFinalStep && (
                    <div className="player-response-options">
                        {currentDialogue.choices.map((choice, index) => (
                            <button
                                key={choice}
                                className="mayor-response-button"
                                onClick={() => handleChoice(index)}
                            >
                                {choice}
                                <span>➜</span>
                            </button>
                        ))}
                    </div>
                )}

                <div className="town-square-player">
                    <CharacterFigure character={character} />
                    {character?.characterName && (
                        <div className="dialogue-nameplate player-nameplate">
                            {character.characterName}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TownSquare;