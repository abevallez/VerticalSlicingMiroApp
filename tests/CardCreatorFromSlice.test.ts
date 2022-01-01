import { mock, mockDeep, mockReset } from "jest-mock-extended"
import { CardCreatorFromSlice } from "../src/CardCreatorFromSlice"
import { SDK } from '../typings/miro'

describe('test CardCreatorFromSlice', () => {
    const miroSDKMock = mockDeep<SDK.Root>()

    beforeEach(() => {
        mockReset(miroSDKMock)
    })

    test('Should create a card when at least one sticker was selected', async () => {
        const cardCreator: CardCreatorFromSlice = new CardCreatorFromSlice(miroSDKMock)
        const cardExpected = {
            type: 'CARD',
            title: 'Slice'
        }
        const widgetMocked = mock<SDK.ICardWidget>()
        miroSDKMock.board.selection.get.mockResolvedValue([widgetMocked])

        await cardCreator.createCard()
        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(cardExpected)

    })

    test('Should dont create a card when no sticker was selected', async () => {
        const cardCreator: CardCreatorFromSlice = new CardCreatorFromSlice(miroSDKMock)
        miroSDKMock.board.selection.get.mockResolvedValue([])

        await cardCreator.createCard()
        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(0)
    })

    test('Should show a notification when no sticker was selected', async () => {
        const cardCreator: CardCreatorFromSlice = new CardCreatorFromSlice(miroSDKMock)
        miroSDKMock.board.selection.get.mockResolvedValue([])

        await cardCreator.createCard()
        expect(miroSDKMock.showErrorNotification).toBeCalledTimes(1)
    })
})