import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AcademicCalenderComponent } from './academic-calender/academic-calender.component';


@NgModule({
  declarations: [
    AcademicCalenderComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ]
})
export class AdmissionModule { }
