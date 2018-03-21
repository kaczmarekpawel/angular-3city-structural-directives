import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthService, HasRoleDirective} from './Auth';
import {RolesCheckerComponent} from './RolesChecker';
import {
  ForSampleComponent,
  IfSampleComponent,
  PredefinedDirectivesComponent
} from './PredefinedDirectives';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ForSampleComponent,
    HasRoleDirective,
    IfSampleComponent,
    RolesCheckerComponent,
    PredefinedDirectivesComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
