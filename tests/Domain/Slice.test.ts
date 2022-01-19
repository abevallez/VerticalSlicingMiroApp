import { mock, mockDeep, mockReset} from "jest-mock-extended"
import { Slice } from "../../src/Domain/Slice"
import { SDK } from "../../typings/miro"

describe('tests Slice', () => {
    let miroSDKMock: SDK.Root
    let slice: Slice
    let widgets: SDK.IStickerWidget[]
    let widget1: SDK.IStickerWidget = mockStickerWidget()
    let widget2: SDK.IStickerWidget = mockStickerWidget()

    beforeAll(() => {
        miroSDKMock = mockDeep<SDK.Root>();
        widget1 = mockStickerWidget()
        widget2 = mockStickerWidget()
    })

    beforeEach(() => {
        mockReset(miroSDKMock);
        mockReset(widget1)
        mockReset(widget2)
       
        widgets = [widget1, widget2]
        slice = new Slice(widgets, miroSDKMock);
      });

    test('slice is created with widgets', () => {
        expect(slice.widgets).toBe(widgets)
    })

    test('slice is colored', () => {
        slice.colorWidgets()
        expect(miroSDKMock.board.widgets.update).toBeCalledTimes(widgets.length)
        expect(miroSDKMock.board.widgets.update).toBeCalledWith({
            id: widget1.id,
            x: widget1.x,
            y: widget1.y,
            text: widget1.text,
            scale: widget1.scale,
            style: {
                stickerBackgroundColor: '#f5d128'
            }
        })
        expect(miroSDKMock.board.widgets.update).toBeCalledWith({
            id: widget2.id,
            x: widget2.x,
            y: widget2.y,
            text: widget2.text,
            scale: widget2.scale,
            style: {
                stickerBackgroundColor: '#f5d128'
            }
        })
    })

    test('Slice has the first widget name when is created', () => {
        expect(slice.name).toBe(widgets[0].plainText)
    })

    test('Create a tag for widgets in slice', () => {
        const tagName = 'tag_name'
        const tagColor = '#FFFFFF'
        slice.tag(tagName, tagColor)
        expect(miroSDKMock.board.tags.create).toBeCalledTimes(1)
        expect(miroSDKMock.board.tags.create).toBeCalledWith({
            title: tagName,
            color: tagColor,
            widgetIds: widgets
        })
    })

    test('Name should be changed', () => {
        const newName = 'another name'
        slice.name = newName
        expect(slice.name).toBe(newName)
    })

    function mockStickerWidget(): SDK.IStickerWidget{
        const stickerWidgetMocked = mock<SDK.IStickerWidget>();
        stickerWidgetMocked.type = "STICKER";
        stickerWidgetMocked.plainText = "sticker content";
        stickerWidgetMocked.style.stickerBackgroundColor = '#f5d128'
    
        return stickerWidgetMocked
    }
})


