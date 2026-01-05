import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router,
    private snckbar :SnackbarService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this.router.navigate([""])
    this.snckbar.opensncakbar("user is logout")
  }
}
