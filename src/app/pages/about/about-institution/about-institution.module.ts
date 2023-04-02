import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutInstitutionComponent } from './about-institution.component';


const routes: Routes = [
  {
    path: '',
    component: AboutInstitutionComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutInstitutionModule { }
