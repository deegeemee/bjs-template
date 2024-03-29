import GUI from 'lil-gui';

const GUI_LOCAL_STORAGE_KEY = 'map-controller-gui-state';

export class LilGui {
  readonly gui = new GUI({ title: 'GUI', closeFolders: false });

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.gui.onFinishChange(() => {
      const guiState = this.gui.save();
      localStorage.setItem(GUI_LOCAL_STORAGE_KEY, JSON.stringify(guiState));
    });
  }

  reset(): void {
    localStorage.removeItem(GUI_LOCAL_STORAGE_KEY);
    this.gui.reset();
  }
}
