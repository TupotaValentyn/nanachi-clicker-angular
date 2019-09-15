import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamePanelComponent} from "./components/game-panel/game-panel.component";
import {EndingpageComponent} from './components/endingpage/endingpage.component';
import {SetupComponentComponent} from './components/setup-component/setup-component.component';


const routes: Routes = [
  {
    component: SetupComponentComponent,
    path: '',
  },
  {
    component: GamePanelComponent,
    path: 'game',
  },
  {
    component: EndingpageComponent,
    path: 'end',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
