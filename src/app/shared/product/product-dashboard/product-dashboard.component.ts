import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { IProduct } from '../../model/products';
import { Router } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
    ProductsArr :IProduct[] =[]
  constructor(
    private _productsService : ProductsService,
    private routes : Router,
    private sncakbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.fetchAllpro()
  }

  fetchAllpro(){
    this._productsService.FetchAllProducts()
    .subscribe({
      next:data=>{
        this.ProductsArr = data;
      
   this.routes.navigate(['product',this.ProductsArr[0].id])
    }
    })
  }
}
