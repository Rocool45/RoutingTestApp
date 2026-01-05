import { Component, OnInit } from '@angular/core';
import { FairService } from '../../service/fair.service';
import { Ifair } from '../../model/fairs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
  fairsArr:Array<Ifair>=[]
  constructor(
    private FairsService : FairService,
    private routes : Router
  ) { }

  ngOnInit(): void {
    this.fetchallFairs()
  }
  fetchallFairs(){
    this.FairsService.fetchallFais()
    .subscribe({
      next:data=>{
        this.fairsArr = data
        this.routes.navigate(["fairs",this.fairsArr[0].fairId])
      }
    })
  }

}
