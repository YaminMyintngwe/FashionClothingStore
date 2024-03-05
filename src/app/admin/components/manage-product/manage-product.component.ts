import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  productForm!: FormGroup;
  id!: string;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      let name = '';
      let category = '';
      let price = 0;

      if (this.id !== '') {
        this.productService.getProductById(this.id).then((products) => {
          console.log(products.data());
          let product: Product = (<Product>products.data());
          name = product.name;
          category = product.category;
          price = product.price;
          // products.forEach(
          //   (product) => {
          //     if(product.id === this.id) {
          //       console.log(product)
          //       name = product.name;
          //       category = product.category;
          //       price = product.price;

          this.productForm = this.fb.group({
            'name': [name, Validators.required],
            'category': [category, Validators.required],
            'price': [price, Validators.required],
          });
          //     }

          //   }
          // )
        })
      }

      this.productForm = this.fb.group({
        'name': [name, Validators.required],
        'category': [category, Validators.required],
        'price': [price, Validators.required],
      });
    })

  }

  createOrUpdateForm(): void {
    if (this.productForm.valid) {
      if (this.id === '') {
        this.productService.addProduct(this.productForm.value).then(() => {
          console.log('save successfully');
        }).catch((err) => {
          console.log(err);
        })
      } else {
        this.productService.updateProduct(this.id, this.productForm.value).then(() => {
          console.log('update successfully');
          this.router.navigateByUrl('/admin/product');
        })
      }

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
