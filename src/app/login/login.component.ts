import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  REACTIVE_FORM_DIRECTIVES,
  Validators
  } from "@angular/forms";

import { AuthService } from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'todo-login',
  templateUrl: 'login.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.loginUser(this.loginForm.value);
    /*for(var data in this.loginForm.controls) {
      (<FormControl>this.loginForm.controls[data]).updateValue('');
      this.loginForm.controls[data];
    }*/
  }

  ngOnInit(): any {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }
}
