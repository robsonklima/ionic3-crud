import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Post } from '../models/post';


@Injectable()
export class ApiService {
  private posts: Post[] = [];

  constructor(
    private http: Http
  ) { }

  buscarTodos(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  atualizar(post: Post): Observable<Post> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', post)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  cadastrar(post: Post): Observable<Post> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}