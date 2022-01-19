import { mock, mockDeep, mockReset } from "jest-mock-extended";
import { showFormToCreateCard } from "../../src/Application/showFormToCreateCard";
import { SDK } from "../../typings/miro";

describe('tests show form when sticker selected', () => {
  const miroSDKMock = mockDeep<SDK.Root>();
  const stickerWidgetMocked = mockStickerWidget()

  beforeEach(() => {
    mockReset(miroSDKMock);
  });
    
  test("Should show a notification when no sticker was selected", async () => {
    const widgeNotStickertMocked = mock<SDK.IShapeWidget>();
    miroSDKMock.board.selection.get.mockResolvedValue([widgeNotStickertMocked]);

    await showFormToCreateCard(miroSDKMock);
    expect(miroSDKMock.showErrorNotification).toBeCalledTimes(1);
  });

  test("Should render form when stickers are selected", async() => {
    miroSDKMock.board.selection.get.mockResolvedValue([stickerWidgetMocked]);

    await showFormToCreateCard(miroSDKMock);
    expect(miroSDKMock.board.ui.openModal).toBeCalledTimes(1);
  })

  function mockStickerWidget(): SDK.IStickerWidget{
    const stickerWidgetMocked = mock<SDK.IStickerWidget>();
    stickerWidgetMocked.type = "STICKER";
    stickerWidgetMocked.text = "sticker content";

    return stickerWidgetMocked
  }  
})