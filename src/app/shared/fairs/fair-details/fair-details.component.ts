import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FairService } from '../../service/fair.service';
import { Ifair } from '../../model/fairs';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
    FairObj !:Ifair
  constructor(
    private routes : ActivatedRoute,
    private FairsService : FairService
  ) { }

  ngOnInit(): void {
this.SingleFair()
  }

  SingleFair(){
      this.routes.paramMap.subscribe((param)=>{
       let id = param.get("id")
        if(id){
            this.FairsService.Fair(id)
            .subscribe({
              next:res=>{
                  this.FairObj = res
              }
            })
        }
      })
  }

}
