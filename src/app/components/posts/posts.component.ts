import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(value => {
      this.posts = value;
    })


    // this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts').subscribe(value => {
    //   this.posts = value;
    //
    // })
  }

}
