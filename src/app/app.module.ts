import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Inject, NgModule, PLATFORM_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NightingaleTestComponent} from "./nightingale-test/nightingale-test.component";
import ProtVistaManager      from "protvista-manager";
import ProtVistaNavigation   from "protvista-navigation";
import {isPlatformBrowser} from "@angular/common";

@NgModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        AppComponent,
        NightingaleTestComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformID: Object) {
    if (isPlatformBrowser(this.platformID)) {
      window.customElements.define('protvista-manager', ProtVistaManager);
      window.customElements.define('protvista-navigation', ProtVistaNavigation);
    }
  }
}
