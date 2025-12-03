import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, '../../front/dist')));

// Ruta para manejar otras solicitudes y devolver el archivo index.html
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../front/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
