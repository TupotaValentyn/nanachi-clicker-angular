import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SetupComponentComponent} from './components/setup-component/setup-component.component';
import {GamePanelComponent} from './components/game-panel/game-panel.component';
import {PanelPointComponent} from './components/panel-point/panel-point.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponentComponent,
    AppComponent,
    GamePanelComponent,
    PanelPointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
