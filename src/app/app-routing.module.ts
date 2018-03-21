import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForSampleComponent, IfSampleComponent} from './PredefinedDirectives';
import {RolesCheckerComponent} from './RolesChecker';

const routes: Routes = [
  { path: 'ep4', component: IfSampleComponent },
  { path: 'ep5', component: ForSampleComponent },
  { path: 'ep6', component: RolesCheckerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
