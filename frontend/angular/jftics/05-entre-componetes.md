## comunicacion entre componentes

## parent to child

#### parent

```js
  imports: [ChildComponent],

  export class AppComponent {
  title = 'todolist_fgp1';

  message3 = 0;

  func2(data: any) {
    this.message3 = data;
  }
}

```

```html
<main class="container">
  <h2>Parent</h2>
  <app-child message1="message of parent to child" (message2Event)="func2($event)"></app-child>
  <p>{{ message3 }}</p>
</main>
```

#### child

```js
export class ChildComponent {
 @Input() message1 = '';

 @Output() message2Event = new EventEmitter<string>();

 func1(){
  this.message2Event.emit('message of func1');
 }
}
```

```html
<main>
  <p>child works!</p>
  <p>{{message1}}</p>
  <button (click)="func1()">func1</button>
</main>
```
