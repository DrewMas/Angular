import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../modules/Post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url)
  }
}
