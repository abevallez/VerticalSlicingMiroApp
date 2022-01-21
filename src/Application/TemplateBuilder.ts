import { SDK } from "../../typings/miro";
import exampleImageUrl from "../assets/example.png"

export class TemplateBuilder {
  protected miroSDK: SDK.Root;
  public readonly columns = 3
  public readonly rows = 1
  static readonly RECTANGLE = 1

  public readonly columStickersLabels = [
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
          }
      },
      {
          type: 'SHAPE',
          text: 'Complexities',
          x: 201,
          y: 0,
          width: 180,
          height: 100,
          style: {
            borderWidth: 0,
            backgroundColor: '#F5A6CC'
          }
      },
      {
          type: 'SHAPE',
          text: 'Variations',
          x: 550,
          y: 0,
          width: 500,
          height: 100,
          style: {
            borderWidth: 0,
            backgroundColor: '#CCF5A6'
          }
      }
  ]

  public readonly templateFrame =
    {
      type: 'FRAME',
      title: 'Vertical Slicing',
      x: 350,
      y: 450,
      width: 1000,
      height: 1100,
    }

  public readonly exampleImage =
    {
      type: 'IMAGE',
      url: exampleImageUrl,
      x: 350,
      y: 450
    }

  constructor(miroSDK: SDK.Root) {
    this.miroSDK = miroSDK;
  }

  public async build() {
    await this.miroSDK.board.widgets.create(this.templateFrame)
    await this.miroSDK.board.widgets.create(this.columStickersLabels);
    await this.miroSDK.board.widgets.create(this.exampleImage);
  }
}
