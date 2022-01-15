import { SDK } from "../typings/miro";
import { Card } from "./Application/Card"

async function init() {
    await fillInputsWithFirstStickerSelectedFields()
    document.getElementById("create-card-button").addEventListener("click", createCardFromStickerSelected);
}

async function fillInputsWithFirstStickerSelectedFields() {
    const selectedStickers: SDK.IWidget[] = await miro.board.selection.get()
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