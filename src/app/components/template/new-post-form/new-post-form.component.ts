import { Component, OnInit } from '@angular/core';
import { Post } from './post-form.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostServicesService } from '../../../services/post-services.service';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrl: './new-post-form.component.css'
})
export class NewPostFormComponent implements OnInit {

  disable = true;
  post: Post = {
    user: '',
    title: '',
    postContent: '',

  }

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private posteService: PostServicesService,

  ){ }

  ngOnInit(): void {
  }

    publish() {
      this.posteService.newPost(this.post).subscribe(() =>{
        this.dialog.closeAll();
        this.posteService.showMessage('New post added', true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })


  }

  cancel() {
    if(this.post.postContent != '') {
      this.dialog.open(NewPostFormComponent);
    } else {
      this.dialogRef.close();
    }
  }

}
