import { Component } from '@angular/core';
import Editor from 'xsvgedit/dist/editor/Editor.js';
import 'xsvgedit/src/editor/svgedit.css';

@Component({
  selector: 'lib-me-svgedit',
  template: `
    <div id="me-svgedit-container" style="width:100%; height: 100%"></div>
  `
})
export class MeSvgeditComponent {
  svgEditor: Editor;
  config: any = {
    langPath: 'me-svgedit/locale',
    extPath: 'me-svgedit/extensions',
    canvgPath: 'canvg',
    jspdfPath: 'jspdf',
    imgPath: 'me-svgedit/images',
    jGraduatePath: 'me-svgedit/jgraduate'
  };

  constructor() {
    this.svgEditor = new Editor(document.getElementById('me-svgedit-container'));
    this.svgEditor.init();
  }

  configure(configurations: any): void {
    if (Object.keys(configurations)) {
      Object.keys(configurations).forEach(key => {
        this.config[key] = configurations[key];
      });
    }
    this.svgEditor.setConfig(this.config);
  }

  loadSvg(url: string): void {
    this.svgEditor.loadFromURL(url);
  }

  editorInstance(): Editor {
    return this.svgEditor;
  }

}
