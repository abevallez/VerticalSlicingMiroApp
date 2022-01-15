import { mockDeep } from "jest-mock-extended";
import { Card } from "../../src/Domain/Card"
import { SDK } from "../../typings/miro";

describe('tests cardCreator', () => {
    test('card is created with SDK', () => {
        const miroSDKMock = mockDeep<SDK.Root>();
        const title = 'title for a card'
        const description = 'any description'
        const cardCreator = new Card(miroSDKMock, title, description)
        cardCreator.render()
        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith({
            type: 'CARD',
            title: title,
            description: description
        })
    })
})