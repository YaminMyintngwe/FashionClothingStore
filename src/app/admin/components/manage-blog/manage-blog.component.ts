import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.scss']
})
export class ManageBlogComponent implements OnInit {
  blogForm!: FormGroup;

  constructor(private fb : FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      'title' : ['', Validators.required],
      'content' : ['', Validators.required]
    });
  }

  createOrUpdateForm() {
    if(this.blogForm.valid) {
      console.log("Product form", this.blogForm.value);
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
