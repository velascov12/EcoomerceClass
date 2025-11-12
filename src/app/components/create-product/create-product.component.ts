import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonItemGroup,
  IonItemDivider,
} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/ProductModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonButton,
    ReactiveFormsModule,
    IonLabel,
    IonItemGroup,
    IonItemDivider,
  ],
})
export class CreateProductComponent {
  @Output() productCreated = new EventEmitter<Product>();

  // newProduct: Product = {
  //   id: Date.now(),
  //   title: '',
  //   price: 0,
  //   description: '',
  //   category: '',
  //   image: ''
  // };

  // addProduct() {
  //   this.productCreated.emit(this.newProduct);
  //   this.newProduct = {
  //     id: Date.now(),
  //     title: '',
  //     price: 0,
  //     description: '',
  //     category: '',
  //     image: ''
  //   };
  // }

  private fb = inject(FormBuilder);

  productForm!: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [Date.now()],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ],
      ],
      price: [, [Validators.required, Validators.min(0.01)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      image: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i
          ),
        ],
      ],
      rating: this.fb.group({
        rate: [, [Validators.min(0), Validators.max(5)]],
        count: [, [Validators.min(0), Validators.max(10000)]],
      }),
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productCreated.emit(newProduct);
      console.log(newProduct);
      this.productForm.reset();
    }
  }
}
