import { CardCreator } from "./Application/CardCreator"

function init() {
    document.getElementById("create-card-button").addEventListener("click", () => {
        const title = document.getElementById('title')?.textContent
        const description = document.getElementById('description')?.textContent
        const cardCreator = new CardCreator(miro)
        cardCreator.createCard('hola', 'hola que tal')
    });
}

init()