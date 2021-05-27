import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13];

  objs = [{
    title: 'Post 1', author: 'author', comments: [
      {name: 'max', text: 'lorem1'},
      {name: 'max', text: 'lorem2'},
      {name: 'max', text: 'lorem3'},
    ]
  },
    {
      title: 'Post 2', author: 'author 2', comments: [
        {name: 'max 2', text: 'lorem1'},
        {name: 'max 2', text: 'lorem2'},
        {name: 'max 2', text: 'lorem3'},
      ]
    }
  ];
}
