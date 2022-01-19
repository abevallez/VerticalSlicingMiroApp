import { SDK } from "../../typings/miro"

export class Card{
    protected miroSDK: SDK.Root
    public readonly title: string
    public readonly description: string
    public readonly position: {
        x: number,
        y: number
    }
 
    constructor(miroSDK: SDK.Root, title: string, description: string, position: {x: number, y: number}) {
        this.miroSDK = miroSDK
        this.title = title
        this.description = description
        this.position = position
    }

    public render() {
        this.miroSDK.board.widgets.create({
            type: 'CARD',
            title: this.title,
            description: this.description,
            x: this.position.x,
            y: this.position.y
        })  
    }
}