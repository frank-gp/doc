# Documentación Básica de Flutter

## Introducción

Flutter es un framework de desarrollo de aplicaciones móviles creado por Google que permite crear aplicaciones nativas de alta calidad para iOS y Android desde una única base de código usando el lenguaje Dart.

## Características Principales

- **Multiplataforma**: Una sola base de código para iOS, Android, Web y Desktop
- **Rendimiento nativo**: Compilación directa a código nativo
- **Hot reload**: Cambios instantáneos durante el desarrollo
- **Widgets personalizables**: Amplia biblioteca de widgets
- **Desarrollo rápido**: Ciclo de desarrollo eficiente
- **Respaldado por Google**: Soporte y actualizaciones constantes

## Instalación

### Requisitos Previos

**Para Windows:**

- Windows 10 o superior
- Git para Windows
- Visual Studio Code o Android Studio

**Para macOS:**

- macOS 10.14 o superior
- Xcode (para desarrollo iOS)
- Git

**Para Linux:**

- Linux (64-bit)
- Git

### Instalación del SDK

```bash
# 1. Descargar Flutter SDK
git clone https://github.com/flutter/flutter.git -b stable

# 2. Añadir Flutter al PATH
export PATH="$PATH:`pwd`/flutter/bin"

# 3. Verificar instalación
flutter doctor

# 4. Instalar dependencias faltantes
flutter doctor --android-licenses
```

### Configuración del Editor

**Visual Studio Code:**

```bash
# Instalar extensiones
code --install-extension Dart-Code.dart-code
code --install-extension Dart-Code.flutter
```

**Android Studio:**

- Instalar plugins de Dart y Flutter desde Settings > Plugins

## Conceptos Fundamentales

### Widgets

En Flutter, todo es un widget. Los widgets son los bloques de construcción básicos de la interfaz de usuario.

```dart
import 'package:flutter/material.dart';

// Widget básico
class MiWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('Hola Flutter'),
    );
  }
}
```

### Tipos de Widgets

#### StatelessWidget

Widgets que no cambian su estado interno.

```dart
class MiWidgetEstatico extends StatelessWidget {
  final String titulo;

  const MiWidgetEstatico({Key? key, required this.titulo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Text(titulo),
      ),
    );
  }
}
```

#### StatefulWidget

Widgets que pueden cambiar su estado interno.

```dart
class Contador extends StatefulWidget {
  @override
  _ContadorState createState() => _ContadorState();
}

class _ContadorState extends State<Contador> {
  int _contador = 0;

  void _incrementar() {
    setState(() {
      _contador++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Contador: $_contador'),
        ElevatedButton(
          onPressed: _incrementar,
          child: Text('Incrementar'),
        ),
      ],
    );
  }
}
```

## Estructura de una Aplicación Flutter

### Archivo main.dart

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MiApp());
}

class MiApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mi Primera App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: PaginaInicial(),
    );
  }
}

class PaginaInicial extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Página Inicial'),
      ),
      body: Center(
        child: Text('¡Hola Flutter!'),
      ),
    );
  }
}
```

### Scaffold

La estructura básica de una pantalla en Flutter.

```dart
class MiPagina extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Mi Página'),
        actions: [
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              // Acción del botón
            },
          ),
        ],
      ),
      body: Container(
        // Contenido principal
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Acción del FAB
        },
        child: Icon(Icons.add),
      ),
      drawer: Drawer(
        // Menú lateral
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Inicio',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Configuración',
          ),
        ],
      ),
    );
  }
}
```

## Widgets de Layout

### Container

Widget básico para contener otros widgets.

```dart
Container(
  width: 200,
  height: 100,
  padding: EdgeInsets.all(16.0),
  margin: EdgeInsets.symmetric(vertical: 8.0),
  decoration: BoxDecoration(
    color: Colors.blue,
    borderRadius: BorderRadius.circular(8.0),
    boxShadow: [
      BoxShadow(
        color: Colors.grey.withOpacity(0.3),
        spreadRadius: 2,
        blurRadius: 5,
      ),
    ],
  ),
  child: Text('Contenido'),
)
```

### Row y Column

Para organizar widgets horizontal y verticalmente.

```dart
// Fila horizontal
Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    Icon(Icons.star),
    Text('Calificación'),
    Text('5.0'),
  ],
)

// Columna vertical
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text('Título'),
    Text('Descripción'),
    ElevatedButton(
      onPressed: () {},
      child: Text('Botón'),
    ),
  ],
)
```

### Stack

Para superponer widgets.

```dart
Stack(
  children: [
    Container(
      width: 200,
      height: 200,
      color: Colors.blue,
    ),
    Positioned(
      top: 20,
      right: 20,
      child: Icon(
        Icons.favorite,
        color: Colors.red,
      ),
    ),
  ],
)
```

### Expanded y Flexible

Para controlar cómo los widgets ocupan el espacio disponible.

```dart
Row(
  children: [
    Expanded(
      flex: 2,
      child: Container(color: Colors.red, height: 100),
    ),
    Expanded(
      flex: 1,
      child: Container(color: Colors.green, height: 100),
    ),
  ],
)
```

## Widgets de Interfaz

### Texto

```dart
Text(
  'Hola Flutter',
  style: TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: Colors.blue,
    decoration: TextDecoration.underline,
  ),
  textAlign: TextAlign.center,
)

// Texto enriquecido
RichText(
  text: TextSpan(
    text: 'Hola ',
    style: TextStyle(color: Colors.black),
    children: [
      TextSpan(
        text: 'Flutter',
        style: TextStyle(
          fontWeight: FontWeight.bold,
          color: Colors.blue,
        ),
      ),
    ],
  ),
)
```

### Botones

```dart
// Botón elevado
ElevatedButton(
  onPressed: () {
    print('Botón presionado');
  },
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.blue,
    foregroundColor: Colors.white,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
    ),
  ),
  child: Text('Botón Elevado'),
)

// Botón de texto
TextButton(
  onPressed: () {},
  child: Text('Botón de Texto'),
)

// Botón de contorno
OutlinedButton(
  onPressed: () {},
  child: Text('Botón Outlined'),
)

// Botón de icono
IconButton(
  onPressed: () {},
  icon: Icon(Icons.favorite),
)
```

### Imágenes

```dart
// Imagen desde assets
Image.asset('assets/images/logo.png')

// Imagen desde red
Image.network('https://ejemplo.com/imagen.jpg')

// Imagen con propiedades
Image.asset(
  'assets/images/logo.png',
  width: 100,
  height: 100,
  fit: BoxFit.cover,
)
```

### Íconos

```dart
// Ícono simple
Icon(Icons.star)

// Ícono con propiedades
Icon(
  Icons.favorite,
  color: Colors.red,
  size: 30,
)
```

## Widgets de Entrada

### TextField

```dart
class FormularioEjemplo extends StatefulWidget {
  @override
  _FormularioEjemploState createState() => _FormularioEjemploState();
}

class _FormularioEjemploState extends State<FormularioEjemplo> {
  final _controladorTexto = TextEditingController();

  @override
  void dispose() {
    _controladorTexto.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: _controladorTexto,
          decoration: InputDecoration(
            labelText: 'Nombre',
            hintText: 'Ingresa tu nombre',
            border: OutlineInputBorder(),
            prefixIcon: Icon(Icons.person),
          ),
          onChanged: (value) {
            print('Texto ingresado: $value');
          },
        ),
        SizedBox(height: 16),
        ElevatedButton(
          onPressed: () {
            print('Valor del campo: ${_controladorTexto.text}');
          },
          child: Text('Obtener Texto'),
        ),
      ],
    );
  }
}
```

### Switch, Checkbox, Radio

```dart
class ControlesEjemplo extends StatefulWidget {
  @override
  _ControlesEjemploState createState() => _ControlesEjemploState();
}

class _ControlesEjemploState extends State<ControlesEjemplo> {
  bool _switchValue = false;
  bool _checkboxValue = false;
  String _radioValue = 'opcion1';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Switch
        Switch(
          value: _switchValue,
          onChanged: (value) {
            setState(() {
              _switchValue = value;
            });
          },
        ),

        // Checkbox
        Checkbox(
          value: _checkboxValue,
          onChanged: (value) {
            setState(() {
              _checkboxValue = value!;
            });
          },
        ),

        // Radio buttons
        RadioListTile<String>(
          title: Text('Opción 1'),
          value: 'opcion1',
          groupValue: _radioValue,
          onChanged: (value) {
            setState(() {
              _radioValue = value!;
            });
          },
        ),
        RadioListTile<String>(
          title: Text('Opción 2'),
          value: 'opcion2',
          groupValue: _radioValue,
          onChanged: (value) {
            setState(() {
              _radioValue = value!;
            });
          },
        ),
      ],
    );
  }
}
```

## Widgets de Lista

### ListView

```dart
class ListaEjemplo extends StatelessWidget {
  final List<String> elementos = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4',
    'Elemento 5',
  ];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: elementos.length,
      itemBuilder: (context, index) {
        return ListTile(
          leading: Icon(Icons.star),
          title: Text(elementos[index]),
          subtitle: Text('Descripción del ${elementos[index]}'),
          trailing: Icon(Icons.arrow_forward),
          onTap: () {
            print('Seleccionado: ${elementos[index]}');
          },
        );
      },
    );
  }
}
```

### GridView

```dart
class GridEjemplo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 8,
        mainAxisSpacing: 8,
        childAspectRatio: 1,
      ),
      itemCount: 20,
      itemBuilder: (context, index) {
        return Card(
          child: Center(
            child: Text('Item $index'),
          ),
        );
      },
    );
  }
}
```

## Navegación

### Navegación Básica

```dart
// Navegar a nueva pantalla
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => NuevaPantalla(),
  ),
);

// Regresar a pantalla anterior
Navigator.pop(context);

// Reemplazar pantalla actual
Navigator.pushReplacement(
  context,
  MaterialPageRoute(
    builder: (context) => NuevaPantalla(),
  ),
);
```

### Rutas Nombradas

```dart
class MiApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => PaginaInicial(),
        '/segunda': (context) => SegundaPagina(),
        '/tercera': (context) => TerceraPagina(),
      },
    );
  }
}

// Navegar usando rutas nombradas
Navigator.pushNamed(context, '/segunda');
```

### Pasar Datos Entre Pantallas

```dart
// Enviar datos
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetallePagina(
      titulo: 'Mi Título',
      datos: miObjeto,
    ),
  ),
);

// Recibir datos
class DetallePagina extends StatelessWidget {
  final String titulo;
  final Object datos;

  const DetallePagina({
    Key? key,
    required this.titulo,
    required this.datos,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(titulo)),
      body: Center(
        child: Text('Datos recibidos: $datos'),
      ),
    );
  }
}
```

## Gestión de Estado

### setState

Para widgets con estado local.

```dart
class ContadorWidget extends StatefulWidget {
  @override
  _ContadorWidgetState createState() => _ContadorWidgetState();
}

class _ContadorWidgetState extends State<ContadorWidget> {
  int _contador = 0;

  void _incrementar() {
    setState(() {
      _contador++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Contador: $_contador'),
        ElevatedButton(
          onPressed: _incrementar,
          child: Text('Incrementar'),
        ),
      ],
    );
  }
}
```

### Provider (Gestión de Estado Global)

```dart
// pubspec.yaml
dependencies:
  provider: ^6.0.5

// Modelo de datos
class ContadorModel extends ChangeNotifier {
  int _contador = 0;

  int get contador => _contador;

  void incrementar() {
    _contador++;
    notifyListeners();
  }
}

// Uso con Provider
class MiApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => ContadorModel(),
      child: MaterialApp(
        home: PaginaContador(),
      ),
    );
  }
}

class PaginaContador extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Contador con Provider')),
      body: Center(
        child: Consumer<ContadorModel>(
          builder: (context, contador, child) {
            return Text(
              'Contador: ${contador.contador}',
              style: TextStyle(fontSize: 24),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          context.read<ContadorModel>().incrementar();
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
```

## Manejo de Formularios

### Form y Validation

```dart
class FormularioCompleto extends StatefulWidget {
  @override
  _FormularioCompletoState createState() => _FormularioCompletoState();
}

class _FormularioCompletoState extends State<FormularioCompleto> {
  final _formKey = GlobalKey<FormState>();
  final _nombreController = TextEditingController();
  final _emailController = TextEditingController();

  @override
  void dispose() {
    _nombreController.dispose();
    _emailController.dispose();
    super.dispose();
  }

  String? _validarNombre(String? value) {
    if (value == null || value.isEmpty) {
      return 'Por favor ingresa tu nombre';
    }
    if (value.length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    return null;
  }

  String? _validarEmail(String? value) {
    if (value == null || value.isEmpty) {
      return 'Por favor ingresa tu email';
    }
    if (!value.contains('@')) {
      return 'Por favor ingresa un email válido';
    }
    return null;
  }

  void _enviarFormulario() {
    if (_formKey.currentState!.validate()) {
      print('Nombre: ${_nombreController.text}');
      print('Email: ${_emailController.text}');

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Formulario enviado correctamente')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Formulario')),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                controller: _nombreController,
                decoration: InputDecoration(
                  labelText: 'Nombre',
                  border: OutlineInputBorder(),
                ),
                validator: _validarNombre,
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: _emailController,
                decoration: InputDecoration(
                  labelText: 'Email',
                  border: OutlineInputBorder(),
                ),
                validator: _validarEmail,
                keyboardType: TextInputType.emailAddress,
              ),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: _enviarFormulario,
                child: Text('Enviar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

## Ejemplo Práctico: Lista de Tareas

```dart
class Tarea {
  final String titulo;
  final String descripcion;
  bool completada;

  Tarea({
    required this.titulo,
    required this.descripcion,
    this.completada = false,
  });
}

class ListaTareas extends StatefulWidget {
  @override
  _ListaTareasState createState() => _ListaTareasState();
}

class _ListaTareasState extends State<ListaTareas> {
  final List<Tarea> _tareas = [
    Tarea(titulo: 'Aprender Flutter', descripcion: 'Estudiar los conceptos básicos'),
    Tarea(titulo: 'Crear primera app', descripcion: 'Desarrollar una aplicación simple'),
  ];

  final _tituloController = TextEditingController();
  final _descripcionController = TextEditingController();

  void _agregarTarea() {
    if (_tituloController.text.isNotEmpty) {
      setState(() {
        _tareas.add(Tarea(
          titulo: _tituloController.text,
          descripcion: _descripcionController.text,
        ));
      });
      _tituloController.clear();
      _descripcionController.clear();
      Navigator.of(context).pop();
    }
  }

  void _toggleTarea(int index) {
    setState(() {
      _tareas[index].completada = !_tareas[index].completada;
    });
  }

  void _eliminarTarea(int index) {
    setState(() {
      _tareas.removeAt(index);
    });
  }

  void _mostrarDialogoAgregar() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('Nueva Tarea'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: _tituloController,
                decoration: InputDecoration(labelText: 'Título'),
              ),
              TextField(
                controller: _descripcionController,
                decoration: InputDecoration(labelText: 'Descripción'),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: Text('Cancelar'),
            ),
            TextButton(
              onPressed: _agregarTarea,
              child: Text('Agregar'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lista de Tareas'),
        backgroundColor: Colors.blue,
      ),
      body: ListView.builder(
        itemCount: _tareas.length,
        itemBuilder: (context, index) {
          final tarea = _tareas[index];
          return Card(
            margin: EdgeInsets.all(8.0),
            child: ListTile(
              leading: Checkbox(
                value: tarea.completada,
                onChanged: (value) => _toggleTarea(index),
              ),
              title: Text(
                tarea.titulo,
                style: TextStyle(
                  decoration: tarea.completada
                      ? TextDecoration.lineThrough
                      : TextDecoration.none,
                ),
              ),
              subtitle: Text(tarea.descripcion),
              trailing: IconButton(
                icon: Icon(Icons.delete, color: Colors.red),
                onPressed: () => _eliminarTarea(index),
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _mostrarDialogoAgregar,
        child: Icon(Icons.add),
      ),
    );
  }
}
```

## Comandos Útiles

```bash
# Crear nuevo proyecto
flutter create mi_app

# Ejecutar aplicación
flutter run

# Compilar para release
flutter build apk          # Android
flutter build ios          # iOS

# Limpiar proyecto
flutter clean

# Obtener dependencias
flutter pub get

# Actualizar dependencias
flutter pub upgrade

# Analizar código
flutter analyze

# Ejecutar tests
flutter test
```

## Estructura de Archivos

```
mi_app/
├── android/           # Configuración Android
├── ios/              # Configuración iOS
├── lib/              # Código Dart
│   ├── main.dart     # Punto de entrada
│   ├── models/       # Modelos de datos
│   ├── screens/      # Pantallas
│   └── widgets/      # Widgets personalizados
├── test/             # Tests
├── assets/           # Recursos (imágenes, fuentes)
└── pubspec.yaml      # Configuración del proyecto
```

## Recursos Adicionales

### Documentación Oficial

- [Flutter.dev](https://flutter.dev) - Sitio oficial
- [API Documentation](https://api.flutter.dev) - Documentación de la API
- [Flutter Gallery](https://gallery.flutter.dev) - Ejemplos de widgets

### Herramientas

- **Flutter Inspector**: Para depurar la UI
- **Hot Reload**: Para desarrollo rápido
- **DartPad**: Para probar código Flutter online

### Packages Útiles

- **provider**: Gestión de estado
- **http**: Peticiones HTTP
- **shared_preferences**: Almacenamiento local
- **sqflite**: Base de datos SQLite
- **image_picker**: Selector de imágenes

Esta documentación básica te proporciona los fundamentos necesarios para empezar a desarrollar aplicaciones con Flutter. ¡Practica creando pequeños proyectos para reforzar estos conceptos!
