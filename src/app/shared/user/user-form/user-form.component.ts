import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 isInEditMode : boolean =false;
 userId !:string 
 @ViewChild("userForm") userForm !: NgForm
   constructor(
    private _uuidSeervice : UuidService,
    private _userService : UsersService,
    private routes : Router,
    private _activated : ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.patchData()
  }

  patchData(){
    this.userId = this._activated.snapshot.params['id']
    
    if(this.userId){
       this.isInEditMode =true
     this._userService.user(this.userId)
     .subscribe({
      next:res=>{
      setTimeout(() => {
          this.userForm.form.patchValue(res)
      }, 0);
      },
      error:err=>console.log(err)
     })
    }
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      
      let obj = {...this.userForm.value,id:this._uuidSeervice.uuid()}
      console.log(obj);
      this._userService.AddUser(obj)
      .subscribe({
        next:res=>{
          this.routes.navigate(["/users",res.id])
        },
        error:err=>console.log(err)
        
      })
    }
  }

  onUpdate(){
    if(this.userForm.valid){
      let obj = {...this.userForm.value,id:this.userId}
      this._userService.UpdateUser(obj)
      .subscribe({
        next:res=>{
          this.userForm.reset()
          this.isInEditMode= false;
          this.routes.navigate(["users",res.id])
        }
      })
  }
    }
}
