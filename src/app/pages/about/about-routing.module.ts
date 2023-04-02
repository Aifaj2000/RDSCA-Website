import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutInstitutionComponent } from './about-institution/about-institution.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
