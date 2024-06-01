const { Observable } = require('rxjs');

// Create an observable that emits values over time
const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

// Subscribe to the observable
observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Observable complete'),
});
