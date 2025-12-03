## Routin

```js
// src\app\app.routes.ts

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
```

```js
// src\app\app.component.ts
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
```

```html
<!-- src\app\app.component.html -->
<main class="container">
  <h2>Routing</h2>
  <nav>
    <a routerLinkActive="active" routerLink="/home">home</a>
    <a routerLinkActive="active" routerLink="about">about</a>
    <a routerLinkActive="active" routerLink="contact">contact</a>
  </nav>
</main>
<router-outlet />
```
