import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model:any={}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.model)
    alert("login successfully")
      this.router.navigate(['/shopping-cart']);
  }

}
