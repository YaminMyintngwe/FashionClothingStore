import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.scss']
})
export class ManageBlogComponent implements OnInit {
  blogForm!: FormGroup;
  id! : number;

  constructor(private fb : FormBuilder, private router : Router, private route : ActivatedRoute, private blogService : BlogService) {}

  ngOnInit(): void {

    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    //   console.log(this.id);
    // })

    this.blogForm = this.fb.group({
      'title' : ['', Validators.required],
      'content' : ['', Validators.required]
    });
  }

  createOrUpdateForm() {
    if(this.blogForm.valid) {
      console.log(this.id);
      // if(this.id === 0) {
      //   this.blogService.addBlog(this.blogForm.value).then(() => {
      //     this.router.navigateByUrl('/admin/blog');
      //   })
      // }
      this.blogService.addBlog(this.blogForm.value).then(() => {
            this.router.navigateByUrl('/admin/blog');
      })
    } else {
      Object.values(this.blogForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } 
  }
  cancel() {
    this.router.navigateByUrl('/admin/blog');
  }
}
