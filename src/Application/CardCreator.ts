import { SDK } from "../../typings/miro"

export class CardCreator {
    protected miroSDK

    constructor(miroSDK: SDK.Root) {
        this.miroSDK = miroSDK
    }

    public createCard(title: string, description: string) {
        this.miroSDK.board.widgets.create({
            type: 'CARD',
            title: title,
            description: description
        })  
    }
}