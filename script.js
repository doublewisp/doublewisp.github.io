
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
                shuffleDeck();
                return;
            }

            const imgPath = "img/" + card;
            document.getElementById("cardImage").src = imgPath;
            if (DECK[CURRENT_CARD-2]>0){
                document.getElementById("past1").src = "img/" + DECK[CURRENT_CARD-2] + ".jpg";
            }
            if (DECK[CURRENT_CARD-3]>0){
                document.getElementById("past2").src = "img/" + DECK[CURRENT_CARD-3] + ".jpg";
            }
            if (DECK[CURRENT_CARD-4]>0){
                document.getElementById("past3").src = "img/" + DECK[CURRENT_CARD-4] + ".jpg";
            }
            if (DECK[CURRENT_CARD-5]>0){
                document.getElementById("past4").src = "img/" + DECK[CURRENT_CARD-5] + ".jpg";
            }

            firstClickDone = true;
        }

        // Ingrandisce carte passate
        function setVisible(selected_card) {
            document.getElementById("pastCard").src = document.getElementById(selected_card).src;
            document.getElementById("pastCard").style.visibility = "visible";
            document.getElementById("overlay").style.visibility = "visible";
            document.getElementById("menu").style.visibility = "visible";
        }

        //hide all panels
        function hideAll() {
            document.getElementById("pastCard").style.visibility = "hidden";
            document.getElementById("overlay").style.visibility = "hidden";
            document.getElementById("menu").style.visibility = "hidden";
        }

        // Inizializzazione
        window.addEventListener("DOMContentLoaded", () => {
            shuffleDeck(); // include già back.jpg
        });