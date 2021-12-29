import { Board } from "./Board";

export class TemplateBuilder {
    protected miroSDK: typeof miro
    protected board: Board
    protected widgets: Array<{type: string, text: string}> = []

    constructor(board: Board, miroSDK: typeof miro) {
        this.board = board
        this.miroSDK = miroSDK
    }

    public build(){
        let sticker
        for (const i in this.board.columnsTitles) {
            sticker = this.createSticker(this.board.columnsTitles[i])
            this.widgets.push(sticker)
        }
        this.renderWidgets()
    }

    private createSticker(stickerText: string) {
        return {
            type: 'STICKER',
            text: stickerText,
          }
    }

    private renderWidgets() {
        this.miroSDK.board.widgets.create(this.widgets)
    }
}