import toolbarIcon from './assets/toolbaricon.svg?raw';
import libraryIcon from './assets/libraryicon.svg?raw';
import { TemplateBuilder } from './TemplateBuilder';
import { CardCreatorFromSlice } from './CardCreatorFromSlice';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Vertical Slicing App',
        toolbarSvgIcon: toolbarIcon,
        librarySvgIcon: libraryIcon,
        async onClick() {
          const templateBuilder: TemplateBuilder= new TemplateBuilder(miro)
          templateBuilder.build()
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
