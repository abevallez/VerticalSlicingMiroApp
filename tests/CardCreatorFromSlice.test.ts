import { mock, mockDeep, mockReset } from "jest-mock-extended"
import { CardCreatorFromSlice } from "../src/CardCreatorFromSlice"

describe('test CardCreatorFromSlice', () => {
    const miroSDKMock = mockDeep<typeof miro>()

    beforeEach(() => {
        mockReset(miroSDKMock)
    })

    test('Should create a card when at least one sticker was selected', async () => {
        const cardCreator: CardCreatorFromSlice = new CardCreatorFromSlice(miroSDKMock)
        const cardExpected = {
            type: 'CARD',
            title: 'Slice'
        }
        const widgetMocked = mock<typeof widget>()
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