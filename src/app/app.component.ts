import {Component} from '@angular/core';
import {AppCounterService} from './service/app-counter.service';
import {LocalCounterService} from './service/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent {

  constructor(public appCounterService: AppCounterService,
              public localCounterService: LocalCounterService) {
  }
}
