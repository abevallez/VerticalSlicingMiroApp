import { SDK } from "../../typings/miro";

export class Slice{
    public readonly widgets: SDK.IStickerWidget[]
    protected miroSDK: SDK.Root
    protected _name: string

    constructor(widgets: SDK.IStickerWidget[], miroSDK: SDK.Root) {
        this.widgets = widgets
        this.miroSDK = miroSDK
        this._name = widgets[0].plainText
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

    public tag(tagName: string, tagColor: string) {
        this.miroSDK.board.tags.create({
            title: tagName,
            color: tagColor, 
            widgetIds: this.widgets
        })
    }

    set name(name: string) {
        this._name = name
    }

    get name() {
        return this._name
    }
}