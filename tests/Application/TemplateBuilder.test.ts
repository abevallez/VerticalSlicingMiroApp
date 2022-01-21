import { mockDeep } from 'jest-mock-extended';
import { TemplateBuilder } from '../../src/Application/TemplateBuilder';
import { SDK } from '../../typings/miro'

describe('tests TemplateBuilder', () => {

  const widgetsToCreateExpected = [
    {
      type: 'FRAME',
      title: 'Vertical Slicing',
      x: 350,
      y: 450,
      width: 1000,
      height: 1100,
    },
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
      }
    },
    {
        type: 'SHAPE',
        text: 'Complexities',
        x: 201,
        y: 0,
        width: 180,
        height: 100,
        style: {
          borderWidth: 0,
          backgroundColor: '#F5A6CC'
        }
    },
    {
        type: 'SHAPE',
        text: 'Variations',
        x: 550,
        y: 0,
        width: 500,
        height: 100,
        style: {
          borderWidth: 0,
          backgroundColor: '#CCF5A6'
        }
    },
    {
      type: 'IMAGE',
      url: 'https://miro.medium.com/max/952/1*ovDaIByqCJLsp2b45suvYQ.png',
      x: 330,
      y: 520
    }
  ]

    test('Should create a row of three labels, create a frame and create images', () => {
        const miroSDKMock = mockDeep<SDK.Root>()
        const templateBuilder: TemplateBuilder = new TemplateBuilder(miroSDKMock)
        templateBuilder.build()

        expect(miroSDKMock.board.widgets.create).toBeCalledWith(widgetsToCreateExpected)
      })
});