import { mockDeep, mockReset } from 'jest-mock-extended';
import { Board } from '../src/Board';
import { TemplateBuilder } from '../src/TemplateBuilder';
import { SDK } from '../typings/miro'

describe('tests TemplateBuilder', () => {

    let templateBuilder: TemplateBuilder
    const miroSDKMock = mockDeep<SDK.Root>()
    let board: Board

    beforeEach(() => {
        board = new Board()
        templateBuilder = new TemplateBuilder(board, miroSDKMock)
        mockReset(miroSDKMock)
    })

    test('Should create a row of three stickers', () => {
        templateBuilder.build()
        const widgetsExpected = [
            {
                type: 'STICKER',
                text: 'Activities',
                x: 0,
                y: 0
            },
            {
                type: 'STICKER',
                text: 'Complexities',
                x: 500,
                y: 0
            },
            {
                type: 'STICKER',
                text: 'Variations',
                x: 1000,
                y: 0
            }
        ]

        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(widgetsExpected)
    })
});