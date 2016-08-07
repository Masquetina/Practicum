import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  REACTIVE_FORM_DIRECTIVES
  } from "@angular/forms";
import { AuthService } from "../shared/auth.service";

@Component({
  moduleId: module.id,
  selector: 'todo-signup',
  templateUrl: 'signup.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  onSignup() {
    this.authService.signupUser(this.signupForm.value);
    /*for(var data in this.signupForm.controls) {
      (<FormControl>this.signupForm.controls[data]).updateValue('');
      this.signupForm.controls[data];
    }*/
  }

  ngOnInit(): any {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])],
    });
  }

  isEmail(control: FormControl): {[str: string]: boolean} {
    if (!control.value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)) {
      return { noEmail: true };
    }
  }

  isEqualPassword(control: FormControl): {[str: string]: boolean} {
    if (!this.signupForm) {
      return { passwordsNotMatch: true };
    }
    if (control.value !== this.signupForm.controls['password'].value) {
      return { passwordsNotMatch: true };
    }
  }
}
