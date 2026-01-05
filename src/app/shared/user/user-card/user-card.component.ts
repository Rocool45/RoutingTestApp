import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { IUser } from '../../model/users';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../../component/get-confirm/get-confirm.component';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
    UserObj !:IUser
  constructor(
    private _routes : ActivatedRoute,
    private UserService : UsersService,
    private MatDialog  : MatDialog,
    private _router : Router,
    private snckbar : SnackbarService
  ) { }

  ngOnInit(): void {
  this.getuser()
  }
  
  getuser(){
      this._routes.paramMap
      .subscribe((param=>{
        let id = param.get("id")

        if(id){
          this.UserService.user(id)
          .subscribe({
            next:res=>{
              this.UserObj =res
            }
          })
        }
      }))
  }

  OnRemove(id:string){
    let config = new MatDialogConfig()
    config.width = "300px";
    config.disableClose = true;
    config.data = "are you sure, you want to remove this user"
     let MatdialogRef= this.MatDialog.open(GetConfirmComponent,config)

     MatdialogRef.afterClosed()
     .subscribe({
      next:res=>{
        if(res){
          this.UserService.RemoveUser(id)
          .subscribe({
            next:res=>{
              this._router.navigate(["users"])
              this.snckbar.opensncakbar(`the user with id ${res} is removed successfully`)
            }
          })
        }
      }
     })
  }

}
