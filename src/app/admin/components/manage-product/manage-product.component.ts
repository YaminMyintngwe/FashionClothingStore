import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private fb:FormBuilder, private router : Router) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      'name': ['', Validators.required],
      'category': ['', Validators.required],
      'price': ['', Validators.required],
    });
  }

  createOrUpdateForm(): void {
    if(this.productForm.valid) {
      console.log("Product form", this.productForm.value);
    } else {
      Object.values(this.productForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    console.log(info.file.status);
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      console.log(img)
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/admin/product');
  }

}
