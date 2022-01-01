export class CardCreatorFromSlice {    
    protected miroSDK: typeof miro

    constructor(miroSDK: typeof miro) {
        this.miroSDK = miroSDK
    }

    public async createCard() {
        const selectedWidgets = await this.miroSDK.board.selection.get()
        if (typeof selectedWidgets !== 'undefined' && selectedWidgets.length > 0) {
            this.miroSDK.board.widgets.create({
                type: 'CARD',
                title: 'Slice'
            })
        }
        else {
            this.miroSDK.showErrorNotification('No stickers selected')
        }
    }
}