import { User } from "./user.interface";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        if(res)
          this.router.navigate(['/protected']);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  loginUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        if(res)
          this.router.navigate(['/protected']);
      })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log(error.code);
  }

  logOut() {
    firebase.auth().signOut()
      .then(() => {
        this.router.navigate(['/']);
      });
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
}
