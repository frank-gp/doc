# Microservicios con Node.js y Python

## ¿Qué son los Microservicios?

Los microservicios son una arquitectura donde una aplicación se divide en servicios pequeños, independientes y desplegables por separado. Cada servicio:

- Tiene una responsabilidad específica
- Se ejecuta en su propio proceso
- Se comunica mediante APIs (HTTP/REST, mensajería)
- Puede usar diferentes tecnologías

## Ejemplo: Sistema de E-commerce

Vamos a crear un sistema simple con tres microservicios:

1. **Servicio de Usuarios** (Node.js)
2. **Servicio de Productos** (Python)
3. **Servicio de Pedidos** (Node.js)

---

## 1. Servicio de Usuarios (Node.js)

### Estructura de archivos:

```
user-service/
├── package.json
├── server.js
└── users.json
```

### package.json

```json
{
  "name": "user-service",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

### server.js

```javascript
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Simulamos una base de datos con un archivo JSON
const usersFile = path.join(__dirname, "users.json");

// Inicializar archivo de usuarios si no existe
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(
    usersFile,
    JSON.stringify(
      [
        { id: 1, nombre: "Juan Pérez", email: "juan@email.com" },
        { id: 2, nombre: "María García", email: "maria@email.com" },
      ],
      null,
      2
    )
  );
}

// Obtener todos los usuarios
app.get("/users", (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// Obtener usuario por ID
app.get("/users/:id", (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
});

// Crear nuevo usuario
app.post("/users", (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      nombre: req.body.nombre,
      email: req.body.email,
    };

    users.push(newUser);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servicio de Usuarios ejecutándose en puerto ${PORT}`);
});
```

---

## 2. Servicio de Productos (Python)

### Estructura de archivos:

```
product-service/
├── requirements.txt
├── app.py
└── products.json
```

### requirements.txt

```
Flask==2.3.3
Flask-CORS==4.0.0
```

### app.py

```python
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

PRODUCTS_FILE = 'products.json'

# Inicializar archivo de productos si no existe
if not os.path.exists(PRODUCTS_FILE):
    initial_products = [
        {"id": 1, "nombre": "Laptop", "precio": 999.99, "stock": 10},
        {"id": 2, "nombre": "Mouse", "precio": 29.99, "stock": 50},
        {"id": 3, "nombre": "Teclado", "precio": 79.99, "stock": 25}
    ]
    with open(PRODUCTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(initial_products, f, indent=2, ensure_ascii=False)

def load_products():
    """Cargar productos desde archivo JSON"""
    try:
        with open(PRODUCTS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error cargando productos: {e}")
        return []

def save_products(products):
    """Guardar productos en archivo JSON"""
    try:
        with open(PRODUCTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(products, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error guardando productos: {e}")
        return False

@app.route('/products', methods=['GET'])
def get_products():
    """Obtener todos los productos"""
    products = load_products()
    return jsonify(products)

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Obtener producto por ID"""
    products = load_products()
    product = next((p for p in products if p['id'] == product_id), None)

    if not product:
        return jsonify({"error": "Producto no encontrado"}), 404

    return jsonify(product)

@app.route('/products', methods=['POST'])
def create_product():
    """Crear nuevo producto"""
    try:
        products = load_products()
        new_id = max([p['id'] for p in products], default=0) + 1

        new_product = {
            "id": new_id,
            "nombre": request.json.get('nombre'),
            "precio": float(request.json.get('precio', 0)),
            "stock": int(request.json.get('stock', 0))
        }

        products.append(new_product)

        if save_products(products):
            return jsonify(new_product), 201
        else:
            return jsonify({"error": "Error al guardar producto"}), 500

    except Exception as e:
        return jsonify({"error": f"Error al crear producto: {str(e)}"}), 500

@app.route('/products/<int:product_id>/stock', methods=['PUT'])
def update_stock(product_id):
    """Actualizar stock de producto"""
    try:
        products = load_products()
        product = next((p for p in products if p['id'] == product_id), None)

        if not product:
            return jsonify({"error": "Producto no encontrado"}), 404

        new_stock = request.json.get('stock')
        if new_stock is not None:
            product['stock'] = int(new_stock)

            if save_products(products):
                return jsonify(product)
            else:
                return jsonify({"error": "Error al actualizar stock"}), 500

        return jsonify({"error": "Stock no proporcionado"}), 400

    except Exception as e:
        return jsonify({"error": f"Error al actualizar stock: {str(e)}"}), 500

if __name__ == '__main__':
    print("🚀 Servicio de Productos ejecutándose en puerto 3002")
    app.run(host='0.0.0.0', port=3002, debug=True)
```

---

## 3. Servicio de Pedidos (Node.js)

### Estructura de archivos:

```
order-service/
├── package.json
├── server.js
└── orders.json
```

### package.json

```json
{
  "name": "order-service",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "axios": "^1.6.0"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

### server.js

```javascript
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

// URLs de otros microservicios
const USER_SERVICE_URL = "http://localhost:3001";
const PRODUCT_SERVICE_URL = "http://localhost:3002";

const ordersFile = path.join(__dirname, "orders.json");

// Inicializar archivo de pedidos si no existe
if (!fs.existsSync(ordersFile)) {
  fs.writeFileSync(ordersFile, JSON.stringify([], null, 2));
}

// Obtener todos los pedidos
app.get("/orders", (req, res) => {
  try {
    const orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener pedidos" });
  }
});

// Crear nuevo pedido
app.post("/orders", async (req, res) => {
  try {
    const { userId, productId, cantidad } = req.body;

    // Validar que el usuario existe
    try {
      await axios.get(`${USER_SERVICE_URL}/users/${userId}`);
    } catch (error) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    // Validar que el producto existe y hay stock
    let product;
    try {
      const productResponse = await axios.get(`${PRODUCT_SERVICE_URL}/products/${productId}`);
      product = productResponse.data;
    } catch (error) {
      return res.status(400).json({ error: "Producto no encontrado" });
    }

    if (product.stock < cantidad) {
      return res.status(400).json({ error: "Stock insuficiente" });
    }

    // Crear el pedido
    const orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));
    const newOrder = {
      id: orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1,
      userId: parseInt(userId),
      productId: parseInt(productId),
      cantidad: parseInt(cantidad),
      total: product.precio * cantidad,
      fecha: new Date().toISOString(),
      estado: "pendiente",
    };

    orders.push(newOrder);
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));

    // Actualizar stock del producto
    try {
      await axios.put(`${PRODUCT_SERVICE_URL}/products/${productId}/stock`, {
        stock: product.stock - cantidad,
      });
    } catch (error) {
      console.error("Error actualizando stock:", error.message);
      // En un sistema real, aquí implementarías rollback
    }

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creando pedido:", error);
    res.status(500).json({ error: "Error al crear pedido" });
  }
});

// Obtener pedido por ID con información completa
app.get("/orders/:id", async (req, res) => {
  try {
    const orders = JSON.parse(fs.readFileSync(ordersFile, "utf8"));
    const order = orders.find((o) => o.id === parseInt(req.params.id));

    if (!order) {
      return res.status(404).json({ error: "Pedido no encontrado" });
    }

    // Obtener información del usuario y producto
    try {
      const [userResponse, productResponse] = await Promise.all([
        axios.get(`${USER_SERVICE_URL}/users/${order.userId}`),
        axios.get(`${PRODUCT_SERVICE_URL}/products/${order.productId}`),
      ]);

      const orderWithDetails = {
        ...order,
        usuario: userResponse.data,
        producto: productResponse.data,
      };

      res.json(orderWithDetails);
    } catch (error) {
      // Si no se puede obtener la info adicional, devolver solo el pedido
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener pedido" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servicio de Pedidos ejecutándose en puerto ${PORT}`);
});
```

---

## Cómo ejecutar el sistema

### 1. Servicio de Usuarios (Terminal 1):

```bash
cd user-service
npm install
npm start
```

### 2. Servicio de Productos (Terminal 2):

```bash
cd product-service
pip install -r requirements.txt
python app.py
```

### 3. Servicio de Pedidos (Terminal 3):

```bash
cd order-service
npm install
npm start
```

---

## Probando los microservicios

### Crear un pedido completo:

1. **Ver usuarios disponibles:**

```bash
curl http://localhost:3001/users
```

2. **Ver productos disponibles:**

```bash
curl http://localhost:3002/products
```

3. **Crear un pedido:**

```bash
curl -X POST http://localhost:3003/orders \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "productId": 1,
    "cantidad": 2
  }'
```

4. **Ver pedido con detalles:**

```bash
curl http://localhost:3003/orders/1
```

---

## Ventajas de esta arquitectura

- **Escalabilidad independiente**: Cada servicio puede escalarse por separado
- **Tecnologías diferentes**: Node.js para algunos, Python para otros
- **Desarrollo independiente**: Equipos diferentes pueden trabajar en cada servicio
- **Despliegue independiente**: Puedes actualizar un servicio sin afectar otros
- **Resistencia a fallos**: Si un servicio falla, los otros pueden seguir funcionando

## Consideraciones para producción

- **API Gateway**: Punto único de entrada
- **Service Discovery**: Para que los servicios se encuentren automáticamente
- **Load Balancer**: Distribuir carga entre instancias
- **Circuit Breaker**: Manejo de fallos entre servicios
- **Logging centralizado**: Para monitorear todos los servicios
- **Base de datos por servicio**: Cada servicio debería tener su propia BD
- **Autenticación/Autorización**: JWT tokens, OAuth
- **Containerización**: Docker para cada servicio
