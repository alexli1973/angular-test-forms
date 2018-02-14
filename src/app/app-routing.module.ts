import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnterComponent} from './enter/enter.component';

const routes: Routes = [
  // {path: '', redirectTo: 'system', pathMatch: 'full'}
  {path: '', component: EnterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
