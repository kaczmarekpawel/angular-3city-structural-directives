import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgIf} from '@angular/common';
import {AuthService} from './auth.service';
import {Role} from './auth.types';


// @Directive({selector: '[appHasRole]'})
// export class HasRoleDirective {
//   constructor(private authService: AuthService,
//               private templateRef: TemplateRef<any>,
//               private viewContainer: ViewContainerRef) {
//   }
//
//   @Input() set appHasRole1(role: Role) {
//     if (this.authService.hasRole(role)) {
//        this.viewContainer.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainer.clear();
//     }
//   }
// }


@Directive({selector: '[appHasRole]'})
export class HasRoleDirective extends NgIf {
  constructor(private authService: AuthService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
    super(viewContainer, templateRef);
  }

  @Input() set appHasRole(role: Role) {
    this.ngIf = this.authService.hasRole(role);
  }

  @Input() set appHasRoleElse(templateRef: TemplateRef<any>) {
    this.ngIfElse = templateRef;
  }
}
