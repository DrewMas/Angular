import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)


  }
}
