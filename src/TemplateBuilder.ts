export class TemplateBuilder {
    protected miroSDK: typeof miro

    constructor(miroSDK: typeof miro) {
        this.miroSDK = miroSDK
    }

    public async build(){
        return await this.miroSDK.board.widgets.create({
            type: 'sticker',
            text: 'Hello, World!',
          });
    }
}