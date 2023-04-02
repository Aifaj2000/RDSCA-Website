import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { CommitteesComponent } from './committees/committees.component';
import { CoreValuesComponent } from './core-values/core-values.component';

const routes: Routes = [
{
path: 'administration', component: AdministrationComponent, children:[
{path: 'committees', component: CommitteesComponent},
{path: 'core-values', component: CoreValuesComponent}
]
}

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
