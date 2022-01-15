import { mock, mockDeep } from "jest-mock-extended";
import { SDK } from "../typings/miro";

describe('tests fill form to create a card', () => {
    
    test('Should fill title with title of first sticker selected"', async () => {
      const miroSDKMock = mockDeep<SDK.Root>();
      const documentMock = mockDeep(document)
      const stickerWidgetMocked = mockStickerWidget()
      miroSDKMock.board.selection.get.mockResolvedValue([stickerWidgetMocked]);

      expect(document.getElementById('title').textContent).toBeCalledWith(cardExpected);
  });

  test('Should fill description with stickers selected as bullet points', async() => {
    const secondStickerWidgetMocked: SDK.IStickerWidget = mockStickerWidget();
    const description = "<ul><li>" + stickerWidgetMocked.text + "</li>" 
    + "<li>" + secondStickerWidgetMocked.text + "</li></ul>" 
    const cardExpected = {
    type: "CARD",
    title: "sticker content",
    description: description
    };
    miroSDKMock.board.selection.get.mockResolvedValue([
        stickerWidgetMocked, 
        secondStickerWidgetMocked
    ]);

    await cardCreator.createCard();
    expect(miroSDKMock.board.widgets.create).toBeCalledWith(cardExpected);
  })

  test("Should create a card when input", async () => {
    miroSDKMock.board.selection.get.mockResolvedValue([stickerWidgetMocked]);

    await cardCreator.createCard();
    expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1);
  });

  function mockStickerWidget(): SDK.IStickerWidget{
    const stickerWidgetMocked = mock<SDK.IStickerWidget>();
    stickerWidgetMocked.type = "STICKER";
    stickerWidgetMocked.text = "sticker content";

    return stickerWidgetMocked
  }
})
