import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponentComponent} from "./components/setup-component/setup-component.component";
import {GamePanelComponent} from "./components/game-panel/game-panel.component";


const routes: Routes = [
  {
    component: SetupComponentComponent,
    path: '',
  },
  {
    component: GamePanelComponent,
    path: 'game',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
