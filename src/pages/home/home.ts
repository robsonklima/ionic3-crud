import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/post';
import { ApiService } from '../../services/api';
import { FormPage } from '../form/form';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Post[] = [];

  constructor(
    private api: ApiService,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
  
  }

  atualizar() {
    this.api.buscarTodos().subscribe((posts: Post[]) => {
      this.posts = posts;
    }, erro => {
      console.log(erro);
    })
  }

  editar(post: Post) {
    this.navCtrl.push(FormPage, { post: post });
  }

  adicionar() {
    this.navCtrl.push(FormPage);
  }
}
