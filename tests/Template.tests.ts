import { mockDeep, mockReset } from 'jest-mock-extended';
import { TemplateBuilder } from '../src/TemplateBuilder';
import { SDK } from '../typings/miro'

describe('tests TemplateBuilder', () => {

    let templateBuilder: TemplateBuilder
    const miroSDKMock = mockDeep<SDK.Root>()

    beforeEach(() => {
        templateBuilder = new TemplateBuilder(miroSDKMock)
        mockReset(miroSDKMock)
    })

    test('Should create a row of three labels', () => {
        templateBuilder.build()
        const widgetsExpected = [
            {
                type: 'SHAPE',
                text: 'Activities'
            },
            {
                type: 'SHAPE',
                text: 'Complexities'
            },
            {
                type: 'SHAPE',
                text: 'Variations'
            }
        ]

        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(widgetsExpected)
    })
});