// Temporary sample data (replace later with JSON file)
const cards = [{
        name: "Nano - Fire Form",
        image: "../assets/images/card1.png"
    },
    {
        name: "Nano - Shadow Form",
        image: "../assets/images/card2.png"
    },
    {
        name: "Nano - Legendary Form",
        image: "../assets/images/card3.png"
    }
];

// Get container
const container = document.getElementById("cards-container");

// Function to render cards
function displayCards() {
    cards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <h3>${card.name}</h3>
        `;

        container.appendChild(cardDiv);
    });
}

// Run on page load
displayCards();