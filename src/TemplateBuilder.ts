import { SDK } from "../typings/miro";

export class TemplateBuilder {
    protected miroSDK: SDK.Root

    constructor(miroSDK: SDK.Root) {
        this.miroSDK = miroSDK
    }

    public async build(){
        return await this.miroSDK.board.widgets.create({
            type: 'sticker',
            text: 'Hello, World!',
          });
    }
}