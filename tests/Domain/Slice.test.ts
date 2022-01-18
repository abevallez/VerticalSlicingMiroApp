import { mock, mockDeep } from "jest-mock-extended"
import { Slice } from "../../src/Domain/Slice"
import { SDK } from "../../typings/miro"

describe('tests Slice', () => {
    test('slices is created with widgets', () => {
        const widget1: SDK.IStickerWidget = mockStickerWidget()
        const widget2: SDK.IStickerWidget = mockStickerWidget()
        const miroSDKMock = mockDeep<SDK.Root>();

        const widgets: SDK.IStickerWidget[] = [widget1, widget2]
        const slice: Slice = new Slice(widgets, miroSDKMock);
        expect(slice.widgets).toBe(widgets)
    })

    test('slice is colored when created', () => {
        const widget1: SDK.IStickerWidget = mockStickerWidget()
        const widget2: SDK.IStickerWidget = mockStickerWidget()
        const miroSDKMock = mockDeep<SDK.Root>();


        const widgets: SDK.IStickerWidget[] = [widget1, widget2]
        new Slice(widgets, miroSDKMock);
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

    function mockStickerWidget(): SDK.IStickerWidget{
        const stickerWidgetMocked = mock<SDK.IStickerWidget>();
        stickerWidgetMocked.type = "STICKER";
        stickerWidgetMocked.text = "sticker content";
        stickerWidgetMocked.style.stickerBackgroundColor = '#f5d128'
    
        return stickerWidgetMocked
    }
})


