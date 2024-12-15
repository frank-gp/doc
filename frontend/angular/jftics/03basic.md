```ts
export class Persona {
  // para valores nulos
  edad!: number;
}
```

## if

```html
<!-- moderno -->
<p>Flujo workflow</p>
@if(isAdmin === true) {
  <p>Admin</p>
}
@else {
  <p>Not Admin</p>
}

<!-- antiguo -->
<p>Flujo workflow</p>
<p *ngIf="isAdmin === true">Admin</p>
<p *ngIf="isAdmin !== true">Not Admin</p>
```


## for

```html
<!-- moderno -->
<ul>
  @for (let persona of personas; track ciudad.id) {
    <li>{{ persona.name  }}</li>
  }
</ul>

<!-- antiguo -->
<ul>
  <li *ngFor="let persona of personas">
    {{ persona.name }}
  </li>
</ul>
```

## event

```html 
<button (click)="handleClick('message')">Click me</button>
{{ message }}