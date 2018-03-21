import {Component} from '@angular/core';
import {PredefinedDirective} from './predefined-directives.types';

@Component({
  selector: 'app-predefined-directives',
  templateUrl: './predefined-directives.component.html',
  styleUrls: ['./predefined-directives.component.css']
})
export class PredefinedDirectivesComponent {
  directive: PredefinedDirective = PredefinedDirective.For;
  types = PredefinedDirective;

  changeType(type: PredefinedDirective) {
    this.directive = type;
  }
}
