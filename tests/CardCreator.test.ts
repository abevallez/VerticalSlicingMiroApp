import { mockDeep } from "jest-mock-extended";
import { CardCreator } from "../src/Application/CardCreator"
import { SDK } from "../typings/miro";

describe('tests cardCreator', () => {
    test('card is created with SDK', () => {
        const miroSDKMock = mockDeep<SDK.Root>();
        const title = 'title for a card'
        const description = 'any description'
        const cardCreator = new CardCreator(miroSDKMock)
        cardCreator.createCard(title, description)
        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith({
            type: 'CARD',
            title: title,
            description: description
        })
    })
})