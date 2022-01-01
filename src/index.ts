import toolbarIcon from './assets/toolbaricon.svg?raw';
import libraryIcon from './assets/libraryicon.svg?raw';
import { Template } from './Template';
import { CardCreatorFromSlice } from './CardCreatorFromSlice';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Vertical Slicing App',
        toolbarSvgIcon: toolbarIcon,
        librarySvgIcon: libraryIcon,
        async onClick() {
          const template: Template= new Template(miro)
          template.build()
        },
      },
      bottomBar: {
        title: 'Create Card from Slice selected',
        svgIcon: libraryIcon,
        async onClick() {
          const cardCreator: CardCreatorFromSlice = new CardCreatorFromSlice(miro)
          cardCreator.createCard()
        },
      },
    },
  });
});
