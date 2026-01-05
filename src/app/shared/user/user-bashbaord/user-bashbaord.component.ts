import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { IUser } from '../../model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bashbaord',
  templateUrl: './user-bashbaord.component.html',
  styleUrls: ['./user-bashbaord.component.scss']
})
export class UserBashbaordComponent implements OnInit {
    UserArr :Array<IUser>= []
  constructor(
    private _userService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.fetchallUser()
  }

  fetchallUser(){
    this._userService.FetchAllUsers()
    .subscribe({
      next:data=>{
        this.UserArr = data
        this._router.navigate(["users",this.UserArr[0].id])
      }
    })
  }

}
