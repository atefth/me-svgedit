import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MeSvgeditComponent } from '../../../me-svgedit/src/lib/me-svgedit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  configurations = {showGrid: false};
  @ViewChild(MeSvgeditComponent) meSvgedit;

  ngAfterViewInit(): void {
    this.meSvgedit.init();
  }
}
