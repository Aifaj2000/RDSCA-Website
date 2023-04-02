import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutInstitutionComponent } from './about-institution/about-institution.component';
import { VissionComponent } from './vission/vission.component';
import { MissionComponent } from './mission/mission.component';
import { ChairmanMessageComponent } from './chairman-message/chairman-message.component';
import { PrincipalMessageComponent } from './principal-message/principal-message.component';
import { OrganogramOfInstitutionComponent } from './organogram-of-institution/organogram-of-institution.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];



@NgModule({
  declarations: [
    AboutComponent,
    AboutInstitutionComponent,
    VissionComponent,
    MissionComponent,
    ChairmanMessageComponent,
    PrincipalMessageComponent,
    OrganogramOfInstitutionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    //AboutRoutingModule
  ]
})
export class AboutModule { }
