import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from './auth.service';
import {Role} from './auth.types';

@Directive({selector: '[appHasRole]'})
export class HasRoleDirective {
  constructor(private authService: AuthService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input() set appHasRole(role: Role) {
    if (this.authService.hasRole(role)) {
       this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
