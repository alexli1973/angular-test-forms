import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemsService} from '../shared/services/items.service';
import {Post} from '../shared/models/post.model';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  posts: Post[] = [];
  postIdForUpdate = null;
  editedPost: Post;
  isNewPost: boolean;
  isLoaded = false;
  condition = true;

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  });

  constructor(private itemService: ItemsService ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.itemService.getAllPosts().subscribe((data) => {
      this.posts = data;
      this.isLoaded = true;
    });
  }

  postFormSubmit() {
    const post = this.postForm.value;
    console.log(post);
    if (this.postIdForUpdate === null) {
      this.itemService.addPost(post).subscribe(data => {
        this.getAllPosts();
        this.postForm.reset();
        this.postIdForUpdate = null;
        console.log('UPD ' + this.postIdForUpdate);
      });
    } else {
       post.id = this.postIdForUpdate;
       this.itemService.updatePost(post).subscribe(success => {
         this.getAllPosts();
         this.postForm.reset();
         this.postIdForUpdate = null;
       }, error2 => error2);
    }
  }

  insertPostbyIdToForm (postId: string) {
    this.itemService.getPostById(postId)
      .subscribe(post => {
        this.postIdForUpdate = post.id;
        this.postForm.setValue({title: post.title, author: post.author});
      });
  }

  deletePost(postId: string) {
    this.itemService.deletePost(postId).subscribe(success => {
      this.getAllPosts();
      this.postIdForUpdate = null;
    } , error2 => error2);
  }

  cancelUpdate() {
    this.postIdForUpdate = null;
    this.postForm.reset();
  }
}
