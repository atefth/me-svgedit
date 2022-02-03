import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeSvgeditModule} from '../../../me-svgedit/src/lib/me-svgedit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeSvgeditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
