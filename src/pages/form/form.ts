import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Post } from '../../models/post';
import { ApiService } from '../../services/api';


@Component({
  templateUrl: 'form.html'
})
export class FormPage {
  post: Post;

  constructor(
    private api: ApiService,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
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
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    loader.present();

    this.api.cadastrar(this.post).subscribe((post: Post) => {
      console.log(post);
      this.mostrarAlerta(`Post ${post.title} cadastrado com sucesso!`)
      loader.dismiss();
    }, erro => {
      console.log(erro);
      loader.dismiss();
    });
  }

  atualizar() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    loader.present();

    this.api.atualizar(this.post).subscribe((post: Post) => {
      console.log(post);
      this.mostrarAlerta(`Post ${post.title} atualizado com sucesso!`);
      loader.dismiss();
    }, erro => {
      console.log(erro);
      loader.dismiss();
    });
  }

  mostrarAlerta(mensagem: string) {
    const alert = this.alertCtrl.create({
      subTitle: mensagem,
      buttons: ['OK']
    });
    
    alert.present();
  }
}