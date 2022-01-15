import { SDK } from "../../typings/miro"

export class Card {
    protected miroSDK
    public readonly title: string
    public readonly description: string

    constructor(miroSDK: SDK.Root, title: string, description: string) {
        this.miroSDK = miroSDK
        this.title = title
        this.description = description
    }

    public render() {
        this.miroSDK.board.widgets.create({
            type: 'CARD',
            title: this.title,
            description: this.description
        })  
    }
}