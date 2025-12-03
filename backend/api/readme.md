# API Documentation with Rest Client

- https://github.com/fgp555/nodejs-for-tutorials.git
- https://github.com/fgp555/nodejs-for-tutorials/blob/main/_doc/request/request.variables.http

# API Demos, Examples

### Details about a single IP address

- https://ip.guide/

1. Fake Store API
   https://fakestoreapi.com/

```js
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

2. DummyJSON (Productos y Usuarios)

```js
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

3. Open Food Facts API

```js
fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
```
