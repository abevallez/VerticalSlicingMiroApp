import vertical from './assets/vertical.svg?raw';
import card from './assets/card.svg?raw';
import { TemplateBuilder } from './Application/TemplateBuilder';
import { showFormToCreateCard } from './Application/showFormToCreateCard';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Vertical Slicing App',
        toolbarSvgIcon: vertical,
        librarySvgIcon: vertical,
        onClick: async () => {
          buildTemplate()
        },
      },
      bottomBar: {
        title: 'Create Card from Slice selected',
        svgIcon: card,
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
