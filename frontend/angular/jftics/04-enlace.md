## enlace a propiedades de elementos
```html
<button [disabled]="true">Eliminar</button>

<div contenteditable="true" style="border: 1px solid red"></div>
<div [attr.contenteditable]="true" style="border: 1px solid red"></div>

<button onmouseover="alert('hola')"></button>
<button (mouseover)="alert('hola')"></button>