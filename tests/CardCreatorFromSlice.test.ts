import { mock, mockDeep, mockReset } from "jest-mock-extended";
import { CardCreatorFromSlice } from "../src/CardCreatorFromSlice";
import { SDK } from "../typings/miro";

describe("test CardCreatorFromSlice", () => {
  const miroSDKMock = mockDeep<SDK.Root>();
  const stickerWidgetMocked = mockStickerWidget()
  let cardCreator: CardCreatorFromSlice 

  beforeEach(() => {
    mockReset(miroSDKMock);
    cardCreator = new CardCreatorFromSlice(miroSDKMock);
  });

  test("Should create a card when at least one sticker was selected", async () => {
    miroSDKMock.board.selection.get.mockResolvedValue([stickerWidgetMocked]);

    await cardCreator.createCard();
    expect(miroSDKMock.board.widgets.create).toBeCalledTimes(1);
  });

  test("Should dont create a card when no sticker was selected", async () => {
    const widgeNotStickertMocked = mock<SDK.IShapeWidget>();
    miroSDKMock.board.selection.get.mockResolvedValue([widgeNotStickertMocked]);

    await cardCreator.createCard();
    expect(miroSDKMock.board.widgets.create).toBeCalledTimes(0);
  });

  test("Should show a notification when no sticker was selected", async () => {
    const widgeNotStickertMocked = mock<SDK.IShapeWidget>();
    miroSDKMock.board.selection.get.mockResolvedValue([widgeNotStickertMocked]);

    await cardCreator.createCard();
    expect(miroSDKMock.showErrorNotification).toBeCalledTimes(1);
  });

  test('Should create a card with the content of first sticker selected as title"', async () => {
    const cardExpected = {
      type: "CARD",
      title: stickerWidgetMocked.text,
      description: stickerWidgetMocked.text
    };
    miroSDKMock.board.selection.get.mockResolvedValue([stickerWidgetMocked]);

    await cardCreator.createCard();
    expect(miroSDKMock.board.widgets.create).toBeCalledWith(cardExpected);
  });

  test('Should create a card where description is the content of stickers selected', async() => {
    const secondStickerWidgetMocked: SDK.IStickerWidget = mockStickerWidget();
    const description = stickerWidgetMocked.text + secondStickerWidgetMocked.text 
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

  function mockStickerWidget(): SDK.IStickerWidget{
    const stickerWidgetMocked = mock<SDK.IStickerWidget>();
    stickerWidgetMocked.type = "STICKER";
    stickerWidgetMocked.text = "sticker content";

    return stickerWidgetMocked
  }

  

});
