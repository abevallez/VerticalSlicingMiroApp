import { SDK } from "../typings/miro";
import { Card } from "./Domain/Card"
import { Slice } from "./Domain/Slice";

let slice: Slice

async function init() {
    const selectedStickers: SDK.IStickerWidget[] = await miro.board.selection.get()
    slice = new Slice(selectedStickers, miro)
    await fillInputsWithSlice(slice)
    document.getElementById("create-card-button").addEventListener("click", buttonAction);
}

function buttonAction() {
    createCardFromForm()
    slice.colorWidgets()
}

async function fillInputsWithSlice(slice: Slice) {
    document.getElementById('title').value = slice.name
    document.getElementById('description').value = getDescriptionFromStickers(slice.widgets)
}

function createCardFromForm() {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const card = new Card(miro, title, description)
    card.render()
    miro.board.ui.closeModal()
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