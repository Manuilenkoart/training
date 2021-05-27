import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // img = 'https://hsto.org/files/230/81c/56d/23081c56d81744a686c0916ba25a2e2b.png';
  inputValue = '';
  inputValue2 = '';

  constructor() {
    //   setTimeout(() => {
    //     this.img = 'https://cdn.iconscout.com/icon/free/png-256/angular-226066.png';
    //   }, 4000);
    // }
  }
  onInput(event?: any): void {
    console.log(event);
    this.inputValue = event.target.value;

  }
  onInput1(event: KeyboardEvent): void {
    console.log(event);
    this.inputValue = (<HTMLInputElement> event.target).value;

  }
  onInput2(event: KeyboardEvent): void {
    console.log(event);
    this.inputValue = (<HTMLInputElement> event.target).value;

  }
  onClick() {
    console.log('click');
  }

  onBlur(str: string) {
    this.inputValue2 = str;
  }
}

