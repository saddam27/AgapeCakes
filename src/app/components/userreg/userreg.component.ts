import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
/**
*
*@param
*/
function passwordMatchValidator(form) {
  const password = form.get('password')
  const confirmpassword = form.get('confirmpassword')

  if (password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordMatch: true })
  } else {
    confirmpassword.setErrors(null)
  }
  return null
}
@Component({
  selector: 'app- userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
  registerForm: FormGroup

  constructor(private apiservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('')
    },
      {
        validators: passwordMatchValidator

      })
  }

  register() {
    console.log(this.registerForm.value)
    this.apiservice.createUser(this.registerForm.value).subscribe
      (data => {
        alert("data saved successfully")
        this.router.navigate(['/login-page']);
      })

  }

}
