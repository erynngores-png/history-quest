
import "./WorldSelection.css";
import americanRevolutionEmblem from "../assets/american-revolution-emblem.png";

const worlds = [
    {
        id: "american-revolution",
        name: "The American Revolution",
        years: "1760s-1780s",
        description: "Explore colonial America and uncover the story of independence.",
        className: "revolution-world",
        available: true,
        artwork: americanRevolutionEmblem,
    }
];

function WorldSelection({ onSelectWorld }) {
    function enterWorld(world) {
        if (!world.available) return;

        if (onSelectWorld) {
            onSelectWorld(world.id);
        } else {
            alert("The American Revolution World will open here once we connect to the next screen!");
        }
    }

    return (
        <main className="world-selection">
            <header className="world-header">
                <div className="world-logo">
                    <span className="logo-star">✦</span>
                    <span>HISTORY QUEST</span>
                </div>

                <div className="student-profile">
                    <span className="profile-avatar">🧑🏻</span>
                    <span>My Character</span>
                </div>
            </header>

            <section className="world-intro">
                <p className="world-eyebrow">YOUR NEXT ADVENTURE AWAITS</p>
                <h1>Choose your World</h1>
                <p className="world-description">
                    Every world holds a true historical story. Pick a destination and travel into the past!
                </p>
            </section>

            <section className="world-gallery" aria-label="Historical worlds">
                {worlds.map((world) => (
                    <article className="world-option" key={world.id}>

                        <div className="world-card-visual">
                            <button
                                type="button"
                                className={`world-emblem ${world.className} ${
                                    world.available ? "world-available" : "world-locked"
                                }`}
                                onClick={() => enterWorld(world)}
                                disabled={!world.available}
                                aria-label={
                                    world.available
                                        ? `Enter ${world.name}`
                                        : `${world.name}, coming soon`
                                }
                            >
                                <img
                                    className="emblem-art"
                                    src={world.artwork}
                                    alt=""
                                />

                                <span className="emblem-ribbon">
                                    {world.available ? "PLAY NOW" : "COMING SOON"}
                                </span>
                            </button>

                            <div className="world-details">
                                <p className="world-era">{world.years}</p>
                                <h2>{world.name}</h2>
                                <p>{world.description}</p>
                            </div>
                        </div>

                        {world.available ? (
                            <button
                                className="enter-world-button"
                                type="button"
                                onClick={() => enterWorld(world)}
                            >
                                Enter World <span>→</span>
                            </button>
                        ) : (
                            <span className="locked-label">🔒 Coming soon</span>
                        )}

                    </article>
                ))}
            </section>

            <footer className="world-footer">
                <span>✦</span> YOUR CHARACTER · YOUR JOURNEY · YOUR HISTORY{" "}
                <span>✦</span>
            </footer>
        </main>
    );
}

export default WorldSelection;
