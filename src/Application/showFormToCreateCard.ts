import { SDK } from '../../typings/miro';

export async function showFormToCreateCard(miroSDK: SDK.Root) {
  const selectedWidgets: SDK.IWidget[] = await miroSDK.board.selection.get();
  if (areStickersSelected(selectedWidgets)) {
    await miroSDK.board.ui.openModal('../sidebar_form.html');
  } else {
    miroSDK.showErrorNotification("No stickers selected");
  }
}
function areStickersSelected(selectedWidgets: SDK.IWidget[]) {
  return typeof selectedWidgets !== "undefined"
    && selectedWidgets.length > 0
    && selectedWidgets.every(areAllStickers);
}
function areAllStickers(element: any) {
  return (element.type == 'STICKER' || element.type == 'sticker');
}