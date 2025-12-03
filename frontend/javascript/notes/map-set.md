# Métodos de Set y Map en JavaScript

## 🔹 Set (Conjunto)

Un `Set` es una colección de **valores únicos** (no se repiten).

### Métodos principales:

- `add(value)` → Agrega un valor al Set.
- `delete(value)` → Elimina un valor.
- `has(value)` → Retorna `true` si el valor existe.
- `clear()` → Elimina todos los valores.
- `size` → Propiedad que indica la cantidad de elementos.
- `forEach(callback)` → Itera sobre los valores.
- `values()` → Retorna un iterador de valores.
- `entries()` → Retorna un iterador de pares [valor, valor].
- `keys()` → Alias de `values()` (por compatibilidad).

### Ejemplo:

```js
const mySet = new Set();
mySet.add("a");
mySet.add("b");
mySet.has("a"); // true
mySet.delete("b");
console.log(mySet.size); // 1
```

---

## 🔹 Map (Mapa)

Un `Map` es una colección de **pares clave-valor**, donde las claves pueden ser de cualquier tipo.

### Métodos principales:

- `set(key, value)` → Agrega o actualiza una entrada.
- `get(key)` → Retorna el valor asociado a la clave.
- `has(key)` → Retorna `true` si la clave existe.
- `delete(key)` → Elimina la entrada con la clave.
- `clear()` → Elimina todas las entradas.
- `size` → Propiedad que indica el número de pares clave-valor.
- `forEach(callback)` → Itera sobre las entradas.
- `keys()` → Retorna un iterador de claves.
- `values()` → Retorna un iterador de valores.
- `entries()` → Retorna un iterador de [clave, valor].
- `Object.fromEntries(map)` → Convierte el `Map` en un objeto plano (solo si las claves son strings).

### Ejemplo:

```js
const myMap = new Map();
myMap.set("email", "user@example.com");
console.log(myMap.get("email")); // "user@example.com"
console.log(myMap.has("email")); // true
console.log(myMap.size); // 1
```

---

## ✅ Diferencias clave:

| Característica     | Set                 | Map               |
| ------------------ | ------------------- | ----------------- |
| Tipo de colección  | Solo valores únicos | Pares clave-valor |
| Clave              | No aplica           | Cualquier tipo    |
| Orden de elementos | Conservado          | Conservado        |
