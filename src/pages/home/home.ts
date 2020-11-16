import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { ApiService } from '../../services/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Post[] = [];

  constructor(
    private api: ApiService
  ) {}

  ionViewWillEnter() {
    
  }

  

  atualizar(refresher) {
    this.api.buscarTodos().subscribe((posts: Post[]) => {
      this.posts = posts;

      refresher.complete();
    }, e => {
      console.log(e);
    })
  }

  editarPost(post: Post) {
    console.log(post);
  }

  novoPost() {

  }
}
