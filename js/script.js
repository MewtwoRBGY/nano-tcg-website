let allCards = [];

/* LOAD CARDS */
async function loadCards() {
    const res = await fetch("../js/cards.json");
    const cards = await res.json();
    allCards = cards;
    displayCards(cards);
}

/* RARITY */
function getRarity(card) {
    if (card.attack >= 4) return "legendary";
    if (card.defense >= 4) return "epic";
    return "common";
}

/* DISPLAY */
function displayCards(cards) {
    const container = document.getElementById("cards-container");
    if (!container) return;

    container.innerHTML = "";

    cards.forEach(card => {
        const rarity = getRarity(card);

        const el = document.createElement("div");
        el.className = `card ${rarity}`;

        el.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="../${card.image}">
                    <h3>${card.name}</h3>
                    <p>${card.role}</p>
                </div>
                <div class="card-back">
                    <p><strong>ATK:</strong> ${card.attack}</p>
                    <p><strong>DEF:</strong> ${card.defense}</p>
                    <p>${card.rulesText}</p>
                </div>
            </div>
        `;

        container.appendChild(el);
    });
}

/* PACK OPENING */
function openPack() {
    const container = document.getElementById("pack-results");
    container.innerHTML = "";

    const shuffled = [...allCards].sort(() => 0.5 - Math.random());
    const picks = shuffled.slice(0, 3);

    picks.forEach(card => {
        const rarity = getRarity(card);

        const el = document.createElement("div");
        el.className = `card ${rarity}`;

        el.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="../${card.image}">
                    <h3>${card.name}</h3>
                </div>
                <div class="card-back">
                    <p>${card.rulesText}</p>
                </div>
            </div>
        `;

        container.appendChild(el);
    });
}

/* EVENTS */
document.getElementById("open-pack").onclick = openPack;

document.getElementById("rage-toggle").onclick = () => {
    document.body.classList.toggle("rage-mode");
};

/* INIT */
loadCards();