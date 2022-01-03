import { SDK } from "../typings/miro";

export class CardCreatorFromSlice {
  protected miroSDK: SDK.Root;

  constructor(miroSDK: SDK.Root) {
    this.miroSDK = miroSDK;
  }

  public async createCard() {
    const selectedWidgets: SDK.IWidget[] = await this.miroSDK.board.selection.get();
    if (this.areStickerSelected(selectedWidgets)) { 
      const firstSticker = selectedWidgets[0]
      this.miroSDK.board.widgets.create({
        type: "CARD",
        title: this.titleCardWith(firstSticker),
      });
    } else {
      this.miroSDK.showErrorNotification("No stickers selected");
    }
  }

  protected areStickerSelected(selectedWidgets: SDK.IWidget[]) {
      return typeof selectedWidgets !== "undefined" 
      && selectedWidgets.length > 0 
      && selectedWidgets.every(this.areAllStickers)
  }

  protected areAllStickers(element: any) {
      return (element.type == 'STICKER' || element.type == 'sticker')
  }

  protected titleCardWith(sticker: any) {
      const sticker2: SDK.IStickerWidget = sticker
      return sticker2.text
  }
}
