import { Component, inject, OnInit } from '@angular/core';
import { AmazonService } from './shared/service/amazon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RoutingTestApp';
  private _amazonService = inject(AmazonService)
  ngOnInit(): void {
    // this._amazonService.GetAllProducts()
    // .subscribe({
    //   next:res=>{
    //     console.log(res);
        
    //   }
    // })
  }
}
