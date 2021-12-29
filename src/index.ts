import toolbarIcon from './assets/toolbaricon.svg?raw';
import libraryIcon from './assets/libraryicon.svg?raw';
import { TemplateBuilder } from './TemplateBuilder';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Vertical Slicing App',
        toolbarSvgIcon: toolbarIcon,
        librarySvgIcon: libraryIcon,
        async onClick() {
          const templateBuilder: TemplateBuilder = new TemplateBuilder(miro)
          templateBuilder.build()
        },
      },
    },
  });
});
