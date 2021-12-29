import { mockDeep } from 'jest-mock-extended';
import { Board } from '../src/Board';
import { TemplateBuilder } from '../src/TemplateBuilder';

describe('tests TemplateBuilder', () => {

    let templateBuilder: TemplateBuilder
    const miroSDKMock = mockDeep<typeof miro>()
    let board: Board

    beforeEach(() => {
        board = new Board()
        templateBuilder = new TemplateBuilder(board, miroSDKMock)
    })

    test('Should create a row of three stickers', () => {
        templateBuilder.build()
        const widgetsExpected = [
            {
                type: 'STICKER',
                text: 'Activities',
            },
            {
                type: 'STICKER',
                text: 'Complexities',
            },
            {
                type: 'STICKER',
                text: 'Variations',
            }
        ]

        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(widgetsExpected)
    })
});