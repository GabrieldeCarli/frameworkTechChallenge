import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Albums} from '../../models/albums';
import {Posts} from "../../models/posts";
import {ToDos} from "../../models/toDos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected baseUrl = 'https://jsonplaceholder.typicode.com';
  protected urlGetAlbums = this.baseUrl + '/albums';
  protected urlGetPosts = this.baseUrl + '/posts';
  protected urlGetToDo = this.baseUrl + '/todos';

  constructor( private http: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.urlGetAlbums);
  }

  getPosts() {
    return this.http.get<Posts[]>(this.urlGetPosts);
  }

  getToDo() {
    return this.http.get<ToDos[]>(this.urlGetToDo);
  }
}

