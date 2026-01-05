import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private Sncakbar : MatSnackBar
  ) { }

  opensncakbar(msg:string){
    this.Sncakbar.open(msg,"close",{
      verticalPosition:"bottom",
      horizontalPosition:"left",
      duration:3000
    })
  }
}
