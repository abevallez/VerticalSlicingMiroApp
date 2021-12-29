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
        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(3)
    })

    test('Should create a sticker with text Activities', () => {
        templateBuilder.build()
        const stickerParams = {
            type: 'sticker',
            text: 'Activities',
          }
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(stickerParams)
    })

    test('Should create a sticker with text Complexities', () => {
        templateBuilder.build()
        const stickerParams = {
            type: 'sticker',
            text: 'Complexities',
          }
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(stickerParams)
    })

    test('Should create a sticker with text Variations', () => {
        templateBuilder.build()
        const stickerParams = {
            type: 'sticker',
            text: 'Variations',
          }
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(stickerParams)
    })
});