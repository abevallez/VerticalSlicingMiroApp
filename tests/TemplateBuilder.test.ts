import { mockDeep } from 'jest-mock-extended';
import { TemplateBuilder } from '../src/TemplateBuilder';

describe('tests TemplateBuilder', () => {

    test('Builder should create a row of three stickers', () => {
        const miroSDKMock = mockDeep<typeof miro>()
        const templateBuilder: TemplateBuilder = new TemplateBuilder(miroSDKMock)
        templateBuilder.build()
        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(3)
    })

    test('Builder should create a sticker with text Activities', () => {
        const miroSDKMock = mockDeep<typeof miro>()
        const templateBuilder: TemplateBuilder = new TemplateBuilder(miroSDKMock)
        templateBuilder.build()
        const stickerParams = {
            type: 'sticker',
            text: 'Activities',
          }
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(stickerParams)
    })
});