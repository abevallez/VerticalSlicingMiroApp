export class TemplateBuilder {
    protected miroSDK: typeof miro

    constructor(miroSDK: typeof miro) {
        this.miroSDK = miroSDK
    }

    public build(){

        this.miroSDK.board.widgets.create({
            type: 'sticker',
            text: 'Activities',
          });
        this.miroSDK.board.widgets.create({
            type: 'sticker',
            text: 'Sticker 2',
          });
        this.miroSDK.board.widgets.create({
            type: 'sticker',
            text: 'Sticker 3',
          });
    }
}