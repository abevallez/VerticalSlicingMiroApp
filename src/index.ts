import toolbarIcon from './assets/toolbaricon.svg?raw';
import libraryIcon from './assets/libraryicon.svg?raw';
import { TemplateBuilder } from './TemplateBuilder';
import { Board } from './Board';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      toolbar: {
        title: 'Vertical Slicing App',
        toolbarSvgIcon: toolbarIcon,
        librarySvgIcon: libraryIcon,
        async onClick() {
          const board: Board = new Board()
          const templateBuilder: TemplateBuilder = new TemplateBuilder(board, miro)
          templateBuilder.build()
        },
      },
    },
  });
});
