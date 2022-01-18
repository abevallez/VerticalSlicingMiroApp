import { SDK } from "../typings/miro";
import { Card } from "./Domain/Card"
import { Slice } from "./Domain/Slice";

let selectedStickers: SDK.IStickerWidget[]
let slice: Slice

async function init() {
    selectedStickers = await miro.board.selection.get()
    slice = new Slice(selectedStickers, miro)
    await fillInputsWithStickersFields(selectedStickers)
    document.getElementById("create-card-button").addEventListener("click", buttonAction);
}

function buttonAction() {
    createCardFromForm()
}

function colorSlice(selectedStickers: any[]) {
    let sticker: SDK.IStickerWidget
    for (sticker of selectedStickers) {
        console.log(sticker.id)
        miro.board.widgets.update({
            id: sticker.id,
            x: sticker.x,
            y: sticker.y,
            text: sticker.text,
            scale: sticker.scale,
            style: {
                stickerBackgroundColor: '#f5d128'
            },
            tags: ['hola']
        })
        stickersIds.push(sticker.id)
    }
    miro.board.tags.create({title: '', color: '#F24726', widgetIds: stickersIds})

}

async function fillInputsWithStickersFields(selectedStickers: SDK.IWidget[]) {
    document.getElementById('title').value = getTitleFromSticker(selectedStickers[0])
    document.getElementById('description').value = getDescriptionFromStickers(selectedStickers)
}

function createCardFromForm() {
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