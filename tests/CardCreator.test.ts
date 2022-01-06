import { CardCreator } from "../src/Application/CardCreator"

describe('tests fill form to create a card', () => {
    test('card is created with title', () => {
        const title = 'title for a card'
        const description = 'any description'
        const card = new CardCreator(title, description)
        expect(card.title).toBe(title)
    })

    test('card is created with description', () => {
        const title = 'title for a card'
        const description = 'any description'
        const card = new CardCreator(title, description)
        expect(card.description).toBe(description)
    })
})