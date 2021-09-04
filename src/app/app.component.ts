import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post> = [
    {title: 'Learn component', text: 'i still learn', id: 1},
    {title: 'Next block', text: 'It will be about directive', id: 2}
  ];
}
