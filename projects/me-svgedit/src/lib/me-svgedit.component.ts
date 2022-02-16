import { Component, Output, EventEmitter, Input } from '@angular/core';
import Editor from 'xsvgedit/dist/editor/Editor.js';
import 'xsvgedit/src/editor/svgedit.css';

@Component({
  selector: 'lib-me-svgedit',
  template: `
    <div id="me-svgedit-container" style="width:100%; height: 100%"></div> `,
})
export class MeSvgeditComponent {
  @Input() configurations: any;
  @Output() svgBlobEvent = new EventEmitter<Blob>();
  svgEditor: Editor;
  config: any = {
    langPath: 'me-svgedit/locale',
    extPath: 'me-svgedit/extensions',
    canvgPath: 'canvg',
    jspdfPath: 'jspdf',
    imgPath: 'me-svgedit/images',
    jGraduatePath: 'me-svgedit/jgraduate'
  };
  public initialised = false;

  init(): void {
    if (Object.keys(this.configurations)) {
      Object.keys(this.configurations).forEach((key) => {
        this.config[key] = this.configurations[key];
      });
    }
    this.svgEditor = new Editor(document.getElementById('me-svgedit-container'));
    this.svgEditor.init();
    this.svgEditor.setConfig(this.config);
    this.initialised = true;
  }

  loadSvg(url: string): void {
    if (!this.svgEditor) { this.init(); }
    this.svgEditor.loadFromURL(url);
  }

  editorInstance(): Editor {
    return this.svgEditor;
  }
}
