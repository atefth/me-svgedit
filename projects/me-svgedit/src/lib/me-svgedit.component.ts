import { Component } from '@angular/core';
import Editor from 'xsvgedit/dist/editor/Editor.js';
import 'xsvgedit/src/editor/svgedit.css';

@Component({
  selector: 'lib-me-svgedit',
  template: ` <div id="me-svgedit-container" style="width:100%; height: 100%"></div> `,
})
export class MeSvgeditComponent {
  svgEditor: Editor;
  config: any = {
    langPath: 'me-svgedit/locale',
    extPath: 'me-svgedit/extensions',
    canvgPath: 'canvg',
    jspdfPath: 'jspdf',
    imgPath: 'me-svgedit/images',
    jGraduatePath: 'me-svgedit/jgraduate',
  };

  configure(configurations: any): void {
    if (Object.keys(configurations)) {
      Object.keys(configurations).forEach((key) => {
        this.config[key] = configurations[key];
      });
    }
    this.svgEditor = new Editor(document.getElementById('me-svgedit-container'));
    this.svgEditor.init();
    this.svgEditor.setConfig(this.config);

    setTimeout(() => {
      this.svgEditor.svgCanvas.$id('tool_save').addEventListener('click', () => {
        const blob = this.getBlob();
        return blob;
      });
      this.svgEditor.svgCanvas.$id('tool_save_as').addEventListener('click', () => {
        const blob = this.getBlob();
        return blob;
      });
    }, 1000);
  }
  getBlob() {
    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      const blob = new Blob(byteArrays, { type: contentType });
      return blob;
    };
    const svg = '<?xml version="1.0"?>\n' + this.svgEditor.svgCanvas.svgCanvasToString();
    const b64Data = this.svgEditor.svgCanvas.encode64(svg);
    const blob = b64toBlob(b64Data, 'image/svg+xml');
  }

  loadSvg(url: string): void {
    this.svgEditor.loadFromURL(url);
  }

  editorInstance(): Editor {
    return this.svgEditor;
  }
}
