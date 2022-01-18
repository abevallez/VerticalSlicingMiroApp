import { SDK } from "../../typings/miro";

export class Slice{
    public readonly widgets: SDK.IStickerWidget[]
    protected miroSDK: SDK.Root
    public readonly name: string

    constructor(widgets: SDK.IStickerWidget[], miroSDK: SDK.Root) {
        this.widgets = widgets
        this.miroSDK = miroSDK
        this.name = widgets[0].text
    }

    public colorWidgets() {
        let sticker: SDK.IStickerWidget
        for (sticker of this.widgets) {
            console.log(sticker.id)
            this.miroSDK.board.widgets.update({
                id: sticker.id,
                x: sticker.x,
                y: sticker.y,
                text: sticker.text,
                scale: sticker.scale,
                style: {
                    stickerBackgroundColor: '#f5d128'
                }
            })
        }
    }
}