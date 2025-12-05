
        let DECK = [];
        let CURRENT_CARD = 0;
        let firstClickDone = false;

        // Mescola il deck
        function shuffleDeck() {
            DECK = Array.from({ length: 170 }, (_, i) => i + 1);

            for (let i = DECK.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [DECK[i], DECK[j]] = [DECK[j], DECK[i]];
            }

            CURRENT_CARD = 0;
            firstClickDone = false;

            // torna a mostrare back.jpg
            document.getElementById("cardImage").src = "img/back.jpg";
        }

        // Restituisce next card
        function getNextCard() {
            if (CURRENT_CARD >= DECK.length) {
                return null;
            }
            const filename = DECK[CURRENT_CARD] + ".jpg";
            CURRENT_CARD++;
            return filename;
        }

        // Mostra immagine della carta estratta
        function showNextCard() {
            // Se è la prima volta che si clicca, non usiamo back.jpg
            const card = getNextCard();

            if (card === null) {
                // fine mazzo
                return;
            }

            const imgPath = "img/" + card;
            document.getElementById("cardImage").src = imgPath;

            firstClickDone = true;
        }

        // Inizializzazione
        window.addEventListener("DOMContentLoaded", () => {
            shuffleDeck(); // include già back.jpg
        });