import { Board } from "./Board";

export class TemplateBuilder {
    protected miroSDK: typeof miro
    protected board: Board

    constructor(board: Board, miroSDK: typeof miro) {
        this.board = board
        this.miroSDK = miroSDK
    }

    public build(){
        for (const i in this.board.columnsTitles)
        this.createSticker(this.board.columnsTitles[i])
    }

    private createSticker(stickerText: string) {
        this.miroSDK.board.widgets.create({
            type: 'sticker',
            text: stickerText,
        });
    }
}