import { Board } from "./Board";
import { SDK } from "../typings/miro";

export class Template {
  protected miroSDK: SDK.Root;
  public readonly columns = 3
  public readonly rows = 1
  public readonly columStikersLabels = [
      {
          type: 'STICKER',
          text: 'Activities',
          x: 0,
          y: 0
      },
      {
          type: 'STICKER',
          text: 'Complexities',
          x: 500,
          y: 0
      },
      {
          type: 'STICKER',
          text: 'Variations',
          x: 1000,
          y: 0
      }
  ]

  constructor(miroSDK: SDK.Root) {
    this.miroSDK = miroSDK;
  }

  public build() {
    this.miroSDK.board.widgets.create(this.columStikersLabels);
  }
}
