import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { LoginGuard } from './login.guard';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService,LoginGuard]
})
export class LoginComponent implements OnInit {

  model: User = new User();
  constructor(
    private accountService: AccountService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.accountService.login(this.model);
    console.log(this.model.userName);
    console.log(this.model.password);
    console.log(this.accountService.isLogged());
    console.log("login.components çalıştı");
     
    this.router.navigate(["product-add-1"]);
      
    }

  }

