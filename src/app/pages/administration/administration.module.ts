import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CommitteesComponent } from './committees/committees.component';
import { CoreValuesComponent } from './core-values/core-values.component';
import { AdministrationComponent } from './administration.component';
import { RouterModule } from '@angular/router';
import { ManagementBodyComponent } from './management-body/management-body.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';


@NgModule({
  declarations: [
    CommitteesComponent,
    CoreValuesComponent,
    AdministrationComponent,
    ManagementBodyComponent,
    CodeOfConductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
