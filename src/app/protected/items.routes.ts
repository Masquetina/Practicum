import { RouterConfig } from "@angular/router";

import { StartComponent } from "./start.component";
import { DetailComponent } from "./detail/detail.component";

export const ITEM_ROUTES: RouterConfig = [
  { path: '', component: StartComponent },
  { path: ':id', component: DetailComponent }
];
