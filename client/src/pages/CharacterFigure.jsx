import "./CharacterFigure.css";

function CharacterFigure({ character }) {
    return (
        <div className="character-figure">
            <p>{String(character?.image)}</p>
            {character?.image && (
                <img
                    src={character.image}
                    alt={character.characterName}
                />
            )}
        </div>
    );
}

export default CharacterFigure;