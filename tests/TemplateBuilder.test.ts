import { mockDeep } from 'jest-mock-extended';
import { TemplateBuilder } from '../src/TemplateBuilder';

describe('tests TemplateBuilder', () => {
    test('Builder should create a empty sticker', () => {

        const miroSDKMock = mockDeep<typeof miro>()
        const templateBuilder: TemplateBuilder = new TemplateBuilder(miroSDKMock)
        templateBuilder.build()
        expect(miroSDKMock.board.widgets.create).toHaveBeenCalledTimes(1)
    })
});