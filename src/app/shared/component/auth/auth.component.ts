import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    alReadyhaveAccount :boolean = false;
    @ViewChild("Login") Login !: NgForm
    @ViewChild("Signup") Signup !: NgForm
  constructor(
    private _authService : AuthService,
    private _router : Router,
    private sncakbar:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    let loginObj = this.Login.value
   this._authService.login(loginObj) 
   .subscribe({
    next:res=>{
    this.Login.reset()
    this.sncakbar.opensncakbar(res.message)
      this._router.navigate(["home"])
    },
    error:err=>{
      console.log(err);
      this.Login.reset()
      this.sncakbar.opensncakbar(err.error.message)
    }
   })
  }

  onSignUp(){
    if(this.Signup.valid){
      let obj =this.Signup.value
    
    this._authService.signup(obj)
    .subscribe({
      next:res=>{
        this._authService.setToken(res.token)
       this._authService.setUserRole(res.userRole)
        this.alReadyhaveAccount = false
       this.sncakbar.opensncakbar(res.message)
      },
      error:err=>{
        this.Signup.reset()
         this.sncakbar.opensncakbar(err.error.message)
      }
    })
    }
  }
}
