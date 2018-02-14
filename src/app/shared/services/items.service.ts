import { Injectable } from '@angular/core';
import {BaseApi} from '../core/base-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/post.model';

@Injectable()
export class ItemsService extends BaseApi {
  constructor (public http: HttpClient) {
    super(http);
  }

  getAllPosts(): Observable<Post[]> {
    return this.get('posts');
  }
  getPostById(id: string): Observable<Post> {
    return this.get(`posts/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.post('posts', post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.put(`posts/${post.id}`, post);
  }

  deletePost(id: string): Observable<Post> {
    return this.delete(`posts/${id}`);
  }


}
