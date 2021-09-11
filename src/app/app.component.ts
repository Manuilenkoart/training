import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 posts: Array<Post> = [
   {title: 'Beer', text: 'The best beer in the world'},
   {title: 'Bread', text: 'The best bread in the world'},
   {title: 'JS', text: 'The best in the world'}
 ];
  search = '';
  searchField = 'title'
}
