import { provideRouter } from "@angular/router";

import { HomeComponent } from "./static/home.component";
import { AboutComponent } from "./static/about.component";
import { ProtectedComponent } from "./protected/protected.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/auth.guard";
import { NonAuthGuard } from "./shared/non-auth.guard";
import { DetailComponent } from "./protected/detail/detail.component";

//import { ITEM_ROUTES } from "./protected/items.routes";

const APP_ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]/*, children: ITEM_ROUTES*/ },
  { path: 'protected/:id', component: DetailComponent },
  { path: 'signup', component: SignupComponent, canActivate: [NonAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthGuard] },
  { path: '**', redirectTo: '' }
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
