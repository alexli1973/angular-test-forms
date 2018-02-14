import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';


const routes: Routes = [
  {
    path: 'system', component: SystemComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SystemRoutingModule { }
