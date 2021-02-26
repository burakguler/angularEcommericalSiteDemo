import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
   
  ){}
  
  title = 'shop';

  // isLoggedin(){
  //   return this.accountService.isLogged();
  // }

  // logOut(){
  //   this.accountService.logOut();
  // }
}
