import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSignupDisplay: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,private authService:AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      pass: ['', Validators.required],
      cpass: ['']
    });
  }

  signup() {
    this.isSignupDisplay = true;
    this.form.get('cpass').setValidators(Validators.required);
    this.form.get('cpass').updateValueAndValidity();
  }

  login() {
    this.isSignupDisplay = false;
  }

  onSubmit(form) {
    if (this.form.invalid) {
      alert("Please fill out all required fields.");
      return;
    }
    else{
      this.authService.login(form.username,form.pass);
    }
    // Handle login logic
    console.log(this.form.value);
  }

  onSignup(form) {
    if (this.form.invalid) {
      alert("Please fill out all required fields.");
      return;
    }
    else{
      this.authService.signup(form.username,form.pass);
    }
    // Handle signup logic
    console.log(this.form.value);
  }
}
