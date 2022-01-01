import { Board } from "./Board";
import { SDK } from '../typings/miro'

export class TemplateBuilder {
    protected miroSDK: SDK.Root
    protected board: Board
    protected widgets: Array<{type: string, text: string}> = []

    constructor(board: Board, miroSDK: SDK.Root) {
        this.board = board
        this.miroSDK = miroSDK
    }

    public build(){
        let sticker
        const coordinates: { x: number, y: number}= {
            x: 0,
            y: 0
        }
        for (const i in this.board.columLabels) {
            sticker = this.createSticker(this.board.columLabels[i], coordinates)
            this.widgets.push(sticker)
            coordinates.x = (coordinates.x + 500)
        }
        this.renderWidgets()
    }

    private createSticker(stickerText: string, coordinates: { x: number, y: number} ) {
        return {
            type: 'STICKER',
            text: stickerText,
            x: coordinates.x,
            y: coordinates.y,
          }
    }

    private renderWidgets() {
        this.miroSDK.board.widgets.create(this.widgets)
    }
}