import { mockDeep, mockReset } from 'jest-mock-extended';
import { Template } from '../src/Template';
import { SDK } from '../typings/miro'

describe('tests TemplateBuilder', () => {

    let template: Template
    const miroSDKMock = mockDeep<SDK.Root>()

    beforeEach(() => {
        template = new Template(miroSDKMock)
        mockReset(miroSDKMock)
    })

    test('Should create a row of three stickers', () => {
        template.build()
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