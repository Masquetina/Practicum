import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/';
import { HTTP_PROVIDERS } from "@angular/http";
import { disableDeprecatedForms, provideForms } from "@angular/forms";

import { APP_ROUTES_PROVIDER } from "./app/app.routes";

import { AuthService } from "./app/shared/auth.service";
import { AuthGuard } from "./app/shared/auth.guard";
import { NonAuthGuard } from "./app/shared/non-auth.guard";

enableProdMode();

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTES_PROVIDER,
  AuthService,
  AuthGuard,
  NonAuthGuard
]);
