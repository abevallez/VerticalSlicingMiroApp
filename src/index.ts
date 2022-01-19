import toolbarIcon from './assets/toolbaricon.svg?raw';
import libraryIcon from './assets/libraryicon.svg?raw';
import { TemplateBuilder } from './Application/TemplateBuilder';
import { showFormToCreateCard } from './Application/showFormToCreateCard';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Vertical Slicing App',
        toolbarSvgIcon: toolbarIcon,
        librarySvgIcon: libraryIcon,
        onClick: async () => {
          buildTemplate()
        },
      },
      bottomBar: {
        title: 'Create Card from Slice selected',
        svgIcon: libraryIcon,
        onClick: async () => {
          showFormToCreateCard(miro)
        },
      },
    },
    
  });
});

function buildTemplate() {
  const templateBuilder: TemplateBuilder= new TemplateBuilder(miro)
  templateBuilder.build()
}
