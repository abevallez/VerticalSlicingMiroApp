describe('tests fill form to create a card', () => {
    
    test('Should fill title with title of first sticker selected"', async () => {
    const cardExpected = {
      type: "CARD",
      title: stickerWidgetMocked.text,
      description: "<ul><li>" + stickerWidgetMocked.text + "</li></ul>"
    };
    miroSDKMock.board.selection.get.mockResolvedValue([stickerWidgetMocked]);

    await cardCreator.createCard();
    expect(miroSDKMock.board.widgets.create).toBeCalledWith(cardExpected);
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
})
