import { Component, OnInit } from '@angular/core';
import Editor from 'svgedit/dist/editor/Editor.js';
import 'svgedit/src/editor/svgedit.css';

@Component({
  selector: 'lib-me-svgedit',
  template: `
    <div id="me-svgedit-container" style="width:100%; height:100vh"></div>
  `
})
export class MeSvgeditComponent implements OnInit {
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

  // constructor(configurations: { [key: string]: any }) {
  //   if (Object.keys(configurations)) {
  //     Object.keys(configurations).forEach(key => {
  //       this.config[key] = configurations[key];
  //     });
  //   }
  // }

  ngOnInit(): void {
    const svgEditor = new Editor(document.getElementById('me-svgedit-container'));
    svgEditor.init();
    svgEditor.setConfig(this.config);
  }

}
