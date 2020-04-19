import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from './ProductService';
import { callbackify } from 'util';


@Component({
  selector: 'pm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      productId: [],
      productName: ['', Validators.required],
      productCode: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      starRating: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

  }

  onSubmit() {
    if (!this.addForm.valid) {
      return false;
    } else {
      this.productService.addProduct(this.addForm.value)
        .then(res => {
          console.log(res)
          this.addForm.reset();
          this.router.navigate(['welcome']);
        })
        .catch(error => console.log(error));
    }
  }

}
