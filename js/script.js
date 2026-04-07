// Load JSON + render cards
async function loadCards() {
    try {
        const response = await fetch("../js/cards.json");
        const cards = await response.json();
        displayCards(cards);
    } catch (error) {
        console.error("Error loading cards:", error);
    }
}

const container = document.getElementById("cards-container");

// Determine rarity (simple logic)
function getRarity(card) {
    if (card.attack >= 4) return "legendary";
    if (card.defense >= 4) return "epic";
    return "common";
}

function displayCards(cards) {
    if (!container) return;

    container.innerHTML = "";

    cards.forEach(card => {
        const rarity = getRarity(card);

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", rarity);

        cardDiv.innerHTML = `
            <div class="card-inner">
                
                <!-- FRONT -->
                <div class="card-front">
                    <img src="../${card.image}" alt="${card.name}">
                    <h3>${card.name}</h3>
                    <p>${card.role}</p>
                </div>

                <!-- BACK -->
                <div class="card-back">
                    <h3>${card.name}</h3>
                    <p><strong>Attack:</strong> ${card.attack}</p>
                    <p><strong>Defense:</strong> ${card.defense}</p>
                    <p>${card.rulesText}</p>
                </div>

            </div>
        `;

        // Flip on click
        cardDiv.addEventListener("click", () => {
            cardDiv.classList.toggle("flipped");
        });

        container.appendChild(cardDiv);
    });
}

// Angry Nano Mode 😈
const toggleButton = document.getElementById("rage-toggle");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("rage-mode");
    });
}

// Run
loadCards();