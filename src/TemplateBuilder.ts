import { SDK } from "../typings/miro";

export class TemplateBuilder {
  protected miroSDK: SDK.Root;
  public readonly columns = 3
  public readonly rows = 1
  static readonly RECTANGLE = 1

  public readonly columStikersLabels = [
      {
          type: 'SHAPE',
          text: 'Activities',
          x: 0,
          y: 0,
          width: 200,
          height: 100,
          style: {
            borderWidth: 0,
            backgroundColor: '#A6CCF5'
          },
      },
      {
          type: 'SHAPE',
          text: 'Complexities',
          x: 300,
          y: 0,
          width: 200,
          height: 100,
          style: {
            borderWidth: 0,
            backgroundColor: '#F5A6CC'
          },
      },
      {
          type: 'SHAPE',
          text: 'Variations',
          x: 600,
          y: 0,
          width: 200,
          height: 100,
          style: {
            borderWidth: 0,
            backgroundColor: '#CCF5A6'
          },
      }
  ]

  constructor(miroSDK: SDK.Root) {
    this.miroSDK = miroSDK;
  }

  public build() {
    this.miroSDK.board.widgets.create(this.columStikersLabels);
  }
}
