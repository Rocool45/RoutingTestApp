import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { UuidService } from '../../service/uuid.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  isInEditMode:boolean = false;
  @ViewChild("ProductForm") ProductForm !: NgForm
   constructor(
    private ProductService : ProductsService,
    private _uuidService :UuidService,
    private routes : Router,
    private snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.ProductForm.valid){
    let obj = {...this.ProductForm.value,id:this._uuidService.uuid()}
    this.ProductService.AddProduct(obj)
    .subscribe({
      next:res=>{
        console.log(res);
        
        this.routes.navigate(["product",res.id])
        this.ProductForm.reset()
        this.snackbar.opensncakbar("the product is added successfully")
      }
    })
    }
  }

  onUpdate(){}
}
