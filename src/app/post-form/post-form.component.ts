import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>()
  title = ''
  text = ''
  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if(this.title.trim() && this.text.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAddPost.emit(post);
      this.title = this.text = '' //обнуление
    }
  }
}
