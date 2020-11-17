import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavParams } from 'ionic-angular';
import { Post } from '../../models/post';
import { ApiService } from '../../services/api';


@Component({
  templateUrl: 'form.html'
})
export class FormPage {
  post: Post;

  constructor(
    private api: ApiService,
    private navParams: NavParams
  ) {
    this.post = this.navParams.get('post');
  }
  
  salvar(f: NgForm) {
    if (!this.post) {
      this.post = new Post();
    }

    this.post.title = f.value.title;
    this.post.body = f.value.body;

    if (this.post.id) {
      this.atualizar();
    } else {
      this.cadastrar();
    }
  }

  cadastrar() {
    this.api.cadastrar(this.post).subscribe((post: Post) => {
      console.log(post);
    }, erro => {
      console.log(erro);
    });
  }

  atualizar() {
    this.api.atualizar(this.post).subscribe((post: Post) => {
      console.log(post);
    }, erro => {
      console.log(erro);
    });
  }
}