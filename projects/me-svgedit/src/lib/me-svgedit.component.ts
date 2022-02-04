import { Component } from '@angular/core';
import Editor from 'xsvgedit/dist/editor/Editor.js';
import 'xsvgedit/src/editor/svgedit.css';

@Component({
  selector: 'lib-me-svgedit',
  template: `
    <div id="me-svgedit-container" style="width:100%; height:100vh"></div>
  `
})
export class MeSvgeditComponent {
  config: any = {
    allowInitialUserOverride: true,
    noDefaultExtensions: true,
    langPath: 'me-svgedit/locale',
    extPath: 'me-svgedit/extensions',
    canvgPath: 'canvg',
    jspdfPath: 'jspdf',
    imgPath: 'me-svgedit/images',
    jGraduatePath: 'me-svgedit/jgraduate',
    // dimensions: [640, 480],
    // gridSnapping: false,
    gridColor: '#000',
    baseUnit: 'px',
    snappingStep: 10,
    showRulers: true,
    showGrid: true
  };

  configure(configurations: any): void {
    if (Object.keys(configurations)) {
      Object.keys(configurations).forEach(key => {
        this.config[key] = configurations[key];
      });
    }
    const svgEditor = new Editor(document.getElementById('me-svgedit-container'));
    svgEditor.init();
    svgEditor.setConfig(this.config);
  }

}
