import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../model/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  productInfo !: IProduct
  constructor(
    private _routes : Router,
    private Activetedroutes : ActivatedRoute,
    private _productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
      this.Activetedroutes.paramMap.subscribe(param=>{
        let id = param.get("id")

         if(id){
           this._productsService.Product(id)
          .subscribe({
            next:res=>{
                this.productInfo = res
            }
          })
         }
      })
  }

}
