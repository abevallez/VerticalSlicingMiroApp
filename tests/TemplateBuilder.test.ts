import { mockDeep } from 'jest-mock-extended';
import { TemplateBuilder } from '../src/Application/TemplateBuilder';
import { SDK } from '../typings/miro'

describe('tests TemplateBuilder', () => {

    test('Should create a row of three labels', () => {
        const miroSDKMock = mockDeep<SDK.Root>()
        const templateBuilder: TemplateBuilder = new TemplateBuilder(miroSDKMock)
        templateBuilder.build()
        const widgetsExpected = [
            {
                type: 'SHAPE',
                text: 'Activities',
                x: 0,
                y: 0,
                width: 200,
                height: 100,
                style: {
                  borderWidth: 0,
                  backgroundColor: '#A6CCF5'
                },
            },
            {
                type: 'SHAPE',
                text: 'Complexities',
                x: 300,
                y: 0,
                width: 200,
                height: 100,
                style: {
                  borderWidth: 0,
                  backgroundColor: '#F5A6CC'
                },
            },
            {
                type: 'SHAPE',
                text: 'Variations',
                x: 600,
                y: 0,
                width: 200,
                height: 100,
                style: {
                  borderWidth: 0,
                  backgroundColor: '#CCF5A6'
                },
            }
        ]

        expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.widgets.create).toBeCalledWith(widgetsExpected)
    })
});