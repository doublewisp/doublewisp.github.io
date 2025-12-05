<script>
        let DECK = [];
        let CURRENT_CARD = 0;

        // Mescola il deck
        function shuffleDeck() {
            DECK = Array.from({ length: 170 }, (_, i) => i + 1);

            for (let i = DECK.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [DECK[i], DECK[j]] = [DECK[j], DECK[i]];
            }

            CURRENT_CARD = 0;

            document.getElementById("cardDisplay").textContent =
                "Mazzo mescolato! Pronto a partire dalla prima carta.";

            document.getElementById("cardImage").style.display = "none";
        }

        // Restituisce "n.jpg" e incrementa CURRENT_CARD
        function getNextCard() {
            if (CURRENT_CARD >= DECK.length) {
                return null;
            }

            const filename = DECK[CURRENT_CARD] + ".jpg";
            CURRENT_CARD++;
            return filename;
        }

        // Mostra la carta estratta e l'immagine corrispondente
        function showNextCard() {
            const card = getNextCard();

            if (card === null) {
                document.getElementById("cardDisplay").textContent =
                    "Hai raggiunto la fine del mazzo!";
                document.getElementById("cardImage").style.display = "none";
                return;
            }

            document.getElementById("cardDisplay").textContent =
                "Carta estratta: " + card;

            const imgPath = "img/" + card;
            const imgElement = document.getElementById("cardImage");
            imgElement.src = imgPath;
            imgElement.style.display = "block";
        }

        // Inizializzazione automatica
        window.addEventListener("DOMContentLoaded", shuffleDeck);
    </script>
