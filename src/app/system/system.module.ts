import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from './system.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SystemRoutingModule} from './system-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    // FormBuilder,
     FormsModule,

    // FormControl,
    ReactiveFormsModule,
  ],
  declarations: [
    SystemComponent,
  ]
})
export class SystemModule { }
