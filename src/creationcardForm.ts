import { SDK } from "../typings/miro";
import { Card } from "./Domain/Card"

async function init() {
    const selectedStickers: SDK.IWidget[] = await miro.board.selection.get()
    await fillInputsWithStickersFields(selectedStickers)
    document.getElementById("create-card-button").addEventListener("click", createCardFromStickerSelected);
}

export async function fillInputsWithStickersFields(selectedStickers: SDK.IWidget[]) {
    document.getElementById('title').value = getTitleFromSticker(selectedStickers[0])
    document.getElementById('description').value = getDescriptionFromStickers(selectedStickers)
}

function createCardFromStickerSelected() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const card = new Card(miro, title, description)
    card.render()
    miro.board.ui.closeModal()
}

function getTitleFromSticker(sticker: any): string {
    const sticker2: SDK.IStickerWidget = sticker
    return sticker2.text
}

function getDescriptionFromStickers(selectedStickers: any[]): string {
    let description = '<ul>'
    for (const sticker of selectedStickers) {
        description += '<li>' + sticker.text + '</li>'
    }
    description += '</ul>'
    return description
}

miro.onReady(() => {
    init()
})