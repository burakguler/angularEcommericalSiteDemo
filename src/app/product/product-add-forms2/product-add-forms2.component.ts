import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService,ProductService,AlertifyService]
})
export class ProductAddForms2Component implements OnInit { //reactive form kullanımı

  constructor(
    private formbuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
  ) { }

  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];

  createProductAddForm() {
    this.productAddForm = this.formbuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      categoryId: ["", Validators.required],

    });
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)

      this.productService.setProducts(this.product).subscribe(data=>{
        this.alertifyService.success('"'+data.name+'"'+" Ürünü Başarıyla eklendi!")
      })
    }
  }
}
