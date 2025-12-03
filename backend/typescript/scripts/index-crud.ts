import express, { Request, Response } from 'express';
import path from 'path';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el body de las solicitudes como JSON
app.use(express.json());
app.use(cors());

type User = {
  id: number;
  name: string;
  email: string;
};

// Datos temporales
let tempData: User[] = [];

// Rutas CRUD para la entidad User

// 1. Obtener todos los usuarios
app.get('/api/user', (req: Request, res: Response) => {
  res.json(tempData);
});

// 2. Obtener un usuario por ID
app.get('/api/user/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = tempData.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 3. Crear un nuevo usuario
app.post('/api/user', (req: Request, res: Response) => {
  const newUser: User = {
    id: tempData.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  tempData.push(newUser);
  res.status(201).json(newUser);
});

// 4. Actualizar un usuario por ID
app.put('/api/user/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const userIndex = tempData.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    tempData[userIndex] = { ...tempData[userIndex], ...req.body };
    res.json(tempData[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 5. Eliminar un usuario por ID
app.delete('/api/user/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const userIndex = tempData.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    const deletedUser = tempData.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, '../../front/dist')));

// Ruta para manejar otras solicitudes y devolver el archivo index.html
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../front/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
