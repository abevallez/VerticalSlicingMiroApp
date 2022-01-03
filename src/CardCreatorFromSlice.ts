import { SDK } from "../typings/miro";

export class CardCreatorFromSlice {
  protected miroSDK: SDK.Root;

  constructor(miroSDK: SDK.Root) {
    this.miroSDK = miroSDK;
  }

  public async createCard() {
    const selectedWidgets: SDK.IWidget[] = await this.miroSDK.board.selection.get();
    if (typeof selectedWidgets !== "undefined" 
    && selectedWidgets.length > 0 
    && selectedWidgets.every(this.areAllStickers)) { 
      this.miroSDK.board.widgets.create({
        type: "CARD",
        title: "Slice",
      });
    } else {
      this.miroSDK.showErrorNotification("No stickers selected");
    }
  }

  protected areAllStickers(element: any) {
      return (element.type == 'STICKER' || element.type == 'sticker')
  }
}
