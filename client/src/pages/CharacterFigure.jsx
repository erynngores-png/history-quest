import "./CharacterFigure.css";

function CharacterFigure({ character }) {
    const {
        skinTone = "skin-tone-1",
        hairStyle = "hair-style-1",
        hairColor = "hair-color-1",
        clothing = "clothing-1",
    } = character || {};

    return (
        <div className={`character-figure ${skinTone} ${hairColor}`}>
            <div className={`character-hair ${hairStyle}`}></div>
            <div className="character-head">
                <div className="character-eyes">
                    <div className="character-eye-left"></div>
                    <div className="character-eye-right"></div>
                </div>
                <div className="character-nose"></div>
                <div className="character-mouth"></div>
            </div>
            <div className="character-neck"></div>
            <div className="character-arm-left"></div>
            <div className="character-arm-right"></div>
            <div className="character-leg-left"></div>
            <div className="character-leg-right"></div>
            <div className={`character-body ${clothing}`}></div>
        </div>
    );
}

export default CharacterFigure;