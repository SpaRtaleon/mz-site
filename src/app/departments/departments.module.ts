import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { CivilComponent } from './civil/civil.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { EeeComponent } from './eee/eee.component';
import { MechComponent } from './mech/mech.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    DepartmentsComponent,
    CivilComponent,
    CseComponent,
    EceComponent,
    EeeComponent,
    MechComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class DepartmentsModule { }
