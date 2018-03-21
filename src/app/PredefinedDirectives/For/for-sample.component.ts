import {Component} from '@angular/core';

@Component({
  selector: 'app-for-sample',
  templateUrl: './for-sample.component.html',
  styleUrls: ['./for-sample.component.css']
})
export class ForSampleComponent {
  troopers = [
    { name: 'Vader', img: '../../../assets/vader.PNG' },
    { name: 'Angry Trooper', img: '../../../assets/trooper1.PNG' },
    { name: 'Shocked Trooper', img: '../../../assets/trooper2.PNG' },
    { name: 'Heavy Trooper', img: '../../../assets/trooper3.PNG' },
    { name: 'Boba', img: '../../../assets/trooper4.PNG' }
  ];
}
