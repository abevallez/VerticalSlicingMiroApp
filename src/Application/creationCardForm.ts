import tinymce from "tinymce";
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/skins/ui/oxide/skin.css';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/autolink';
import contentUiCss from "tinymce/skins/ui/oxide/content.css";
import contentCss from "tinymce/skins/content/default/content.css";

import { SDK } from "../../typings/miro";
import { Card } from "../Domain/Card"
import { Slice } from "../Domain/Slice";

let slice: Slice

async function init() {
    tinymce.init({
        selector: '#description',
        plugins: 'lists emoticons link autolink',
        menubar: false,
        toolbar: 'undo redo | bold italic underline link| bullist numlist | emoticons',
        skin: false,
        content_css: false,
        content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
      });
    const selectedStickers: SDK.IStickerWidget[] = await miro.board.selection.get()
    slice = new Slice(selectedStickers, miro)
    await fillInputsWithSlice(slice)
    document.getElementById("create-card-button").addEventListener("click", buttonAction);
}

function buttonAction() {
    const position = {
        x: slice.widgets[0].x,
        y: slice.widgets[0].y
    }
    createCardFromForm(position)
    SetSliceAsSelected()
    miro.board.ui.closeModal()
}

function SetSliceAsSelected() {
    slice.name = document.getElementById('title').value
    slice.colorWidgets()
    slice.tag(slice.name, '#F24726')
}

async function fillInputsWithSlice(slice: Slice) {
    document.getElementById('title').value = slice.name
    tinyMCE.get('description').setContent(getDescriptionFromStickers(slice.widgets))
}

function createCardFromForm(position: {x: number, y: number}) {
    const title = document.getElementById('title').value
    const description = tinyMCE.get('description').getContent()

    const card = new Card(miro, title, description, position)
    card.render()
}

function getDescriptionFromStickers(selectedStickers: any[]): string {
    let description = '<ul>'
    for (const sticker of selectedStickers) {
        description += '<li>' + sticker.plainText + '</li>'
    }
  
    return description
}

miro.onReady(() => {
    init()
})