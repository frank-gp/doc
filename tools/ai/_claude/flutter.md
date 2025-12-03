# Roadmap Completo para Flutter

## 🎯 **Fase 1: Dart Programming Language (4-6 semanas)**

### Dart Fundamentals
- **Sintaxis Básica**
  ```dart
  void main() {
    print('Hello, Dart!');
    
    // Variables y tipos
    var name = 'Flutter';
    String language = 'Dart';
    int version = 3;
    double rating = 4.8;
    bool isAwesome = true;
    
    // Null safety
    String? nullableName;
    String nonNullableName = 'Flutter';
  }
  ```

- **Tipos de Datos**
  - Numbers (int, double)
  - Strings y interpolación
  - Booleans
  - Lists, Sets, Maps
  - Null safety (`?`, `!`, `??`)

- **Control Flow**
  ```dart
  // Condicionales
  if (score >= 90) {
    print('A grade');
  } else if (score >= 80) {
    print('B grade');
  } else {
    print('Keep trying');
  }
  
  // Loops
  for (var i = 0; i < 5; i++) {
    print('Count: $i');
  }
  
  // For-in loops
  var fruits = ['apple', 'banana', 'orange'];
  for (var fruit in fruits) {
    print(fruit);
  }
  ```

### Object-Oriented Programming
- **Classes y Objects**
  ```dart
  class User {
    String name;
    int age;
    
    // Constructor
    User(this.name, this.age);
    
    // Named constructor
    User.anonymous() : name = 'Anonymous', age = 0;
    
    // Methods
    void sayHello() {
      print('Hello, I\'m $name and I\'m $age years old');
    }
    
    // Getters y Setters
    String get displayName => name.toUpperCase();
    set displayName(String value) => name = value;
  }
  ```

- **Inheritance y Polymorphism**
  ```dart
  class Animal {
    String name;
    Animal(this.name);
    
    void makeSound() {
      print('Some generic animal sound');
    }
  }
  
  class Dog extends Animal {
    Dog(String name) : super(name);
    
    @override
    void makeSound() {
      print('$name says: Woof!');
    }
  }
  ```

### Advanced Dart Concepts
- **Mixins**
  ```dart
  mixin Flyable {
    void fly() {
      print('Flying high!');
    }
  }
  
  class Bird extends Animal with Flyable {
    Bird(String name) : super(name);
  }
  ```

- **Enums y Extensions**
  ```dart
  enum Status { loading, success, error }
  
  extension StringExtension on String {
    String get capitalized => 
        '${this[0].toUpperCase()}${substring(1)}';
  }
  ```

- **Generics**
  ```dart
  class ApiResponse<T> {
    final T data;
    final String message;
    
    ApiResponse(this.data, this.message);
  }
  ```

### Asynchronous Programming
- **Futures y async/await**
  ```dart
  Future<String> fetchUserData() async {
    await Future.delayed(Duration(seconds: 2));
    return 'User data loaded';
  }
  
  void main() async {
    print('Loading...');
    String data = await fetchUserData();
    print(data);
  }
  ```

- **Streams**
  ```dart
  Stream<int> countStream() async* {
    for (int i = 1; i <= 5; i++) {
      await Future.delayed(Duration(seconds: 1));
      yield i;
    }
  }
  
  void listenToStream() {
    countStream().listen((number) {
      print('Count: $number');
    });
  }
  ```

**🛠️ Proyecto Práctico:** CLI app en Dart con clases, async/await y manejo de archivos

---

## 📱 **Fase 2: Flutter Fundamentals (6-8 semanas)**

### Environment Setup
- **Instalación**
  ```bash
  # Instalar Flutter SDK
  git clone https://github.com/flutter/flutter.git
  export PATH="$PATH:`pwd`/flutter/bin"
  
  # Verificar instalación
  flutter doctor
  
  # Crear nuevo proyecto
  flutter create my_first_app
  cd my_first_app
  flutter run
  ```

- **IDE Setup**
  - VS Code con Flutter/Dart extensions
  - Android Studio con Flutter plugin
  - IntelliJ IDEA
  - Debug configuration

### Flutter Architecture
- **Widget Tree Concept**
  ```dart
  import 'package:flutter/material.dart';
  
  void main() {
    runApp(MyApp());
  }
  
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MyHomePage(),
      );
    }
  }
  ```

- **Stateless vs Stateful Widgets**
  ```dart
  // Stateless Widget
  class WelcomeScreen extends StatelessWidget {
    final String title;
    
    const WelcomeScreen({Key? key, required this.title}) : super(key: key);
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text(title)),
        body: Center(
          child: Text('Welcome to Flutter!'),
        ),
      );
    }
  }
  
  // Stateful Widget
  class Counter extends StatefulWidget {
    @override
    _CounterState createState() => _CounterState();
  }
  
  class _CounterState extends State<Counter> {
    int _counter = 0;
    
    void _incrementCounter() {
      setState(() {
        _counter++;
      });
    }
    
    @override
    Widget build(BuildContext context) {
      return Column(
        children: [
          Text('Count: $_counter'),
          ElevatedButton(
            onPressed: _incrementCounter,
            child: Text('Increment'),
          ),
        ],
      );
    }
  }
  ```

### Basic Widgets
- **Layout Widgets**
  ```dart
  // Container
  Container(
    width: 200,
    height: 100,
    padding: EdgeInsets.all(16),
    margin: EdgeInsets.symmetric(vertical: 8),
    decoration: BoxDecoration(
      color: Colors.blue,
      borderRadius: BorderRadius.circular(8),
      boxShadow: [
        BoxShadow(
          color: Colors.grey.withOpacity(0.5),
          spreadRadius: 2,
          blurRadius: 5,
          offset: Offset(0, 3),
        ),
      ],
    ),
    child: Text('Hello Flutter'),
  )
  
  // Row y Column
  Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Icon(Icons.home),
          Icon(Icons.business),
          Icon(Icons.school),
        ],
      ),
      Expanded(
        child: ListView(
          children: [
            ListTile(title: Text('Item 1')),
            ListTile(title: Text('Item 2')),
          ],
        ),
      ),
    ],
  )
  ```

- **Input Widgets**
  ```dart
  class FormExample extends StatefulWidget {
    @override
    _FormExampleState createState() => _FormExampleState();
  }
  
  class _FormExampleState extends State<FormExample> {
    final _formKey = GlobalKey<FormState>();
    String _email = '';
    String _password = '';
    
    @override
    Widget build(BuildContext context) {
      return Form(
        key: _formKey,
        child: Column(
          children: [
            TextFormField(
              decoration: InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
              ),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter your email';
                }
                return null;
              },
              onSaved: (value) => _email = value!,
            ),
            SizedBox(height: 16),
            TextFormField(
              decoration: InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
              validator: (value) {
                if (value == null || value.length < 6) {
                  return 'Password must be at least 6 characters';
                }
                return null;
              },
              onSaved: (value) => _password = value!,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                if (_formKey.currentState!.validate()) {
                  _formKey.currentState!.save();
                  print('Email: $_email, Password: $_password');
                }
              },
              child: Text('Submit'),
            ),
          ],
        ),
      );
    }
  }
  ```

**🛠️ Proyecto:** App de calculadora con UI bonita y validaciones

---

## 🧭 **Fase 3: Navigation y State Management (5-6 semanas)**

### Navigation
- **Basic Navigation**
  ```dart
  // Push to new screen
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => SecondScreen()),
  );
  
  // Pop back
  Navigator.pop(context);
  
  // Push and replace
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => HomeScreen()),
  );
  ```

- **Named Routes**
  ```dart
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        initialRoute: '/',
        routes: {
          '/': (context) => HomeScreen(),
          '/profile': (context) => ProfileScreen(),
          '/settings': (context) => SettingsScreen(),
        },
        onGenerateRoute: (settings) {
          if (settings.name == '/product') {
            final ProductArguments args = settings.arguments as ProductArguments;
            return MaterialPageRoute(
              builder: (context) => ProductScreen(product: args.product),
            );
          }
          return null;
        },
      );
    }
  }
  
  // Navigation with arguments
  Navigator.pushNamed(
    context,
    '/product',
    arguments: ProductArguments(product),
  );
  ```

- **Bottom Navigation Bar**
  ```dart
  class MainScreen extends StatefulWidget {
    @override
    _MainScreenState createState() => _MainScreenState();
  }
  
  class _MainScreenState extends State<MainScreen> {
    int _currentIndex = 0;
    final List<Widget> _screens = [
      HomeScreen(),
      SearchScreen(),
      ProfileScreen(),
    ];
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: _screens[_currentIndex],
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.search),
              label: 'Search',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: 'Profile',
            ),
          ],
        ),
      );
    }
  }
  ```

### State Management
- **Provider Pattern** ⭐ *Recomendado para principiantes*
  ```dart
  // Model
  class Counter extends ChangeNotifier {
    int _count = 0;
    
    int get count => _count;
    
    void increment() {
      _count++;
      notifyListeners();
    }
    
    void decrement() {
      _count--;
      notifyListeners();
    }
  }
  
  // Main App
  void main() {
    runApp(
      ChangeNotifierProvider(
        create: (context) => Counter(),
        child: MyApp(),
      ),
    );
  }
  
  // Using Provider
  class CounterScreen extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Consumer<Counter>(
                builder: (context, counter, child) {
                  return Text(
                    'Count: ${counter.count}',
                    style: Theme.of(context).textTheme.headlineMedium,
                  );
                },
              ),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: () => context.read<Counter>().decrement(),
                    child: Text('-'),
                  ),
                  SizedBox(width: 20),
                  ElevatedButton(
                    onPressed: () => context.read<Counter>().increment(),
                    child: Text('+'),
                  ),
                ],
              ),
            ],
          ),
        ),
      );
    }
  }
  ```

- **Riverpod** ⭐ *Alternativa moderna*
  ```dart
  import 'package:flutter_riverpod/flutter_riverpod.dart';
  
  // Provider
  final counterProvider = StateNotifierProvider<Counter, int>((ref) {
    return Counter();
  });
  
  class Counter extends StateNotifier<int> {
    Counter() : super(0);
    
    void increment() => state++;
    void decrement() => state--;
  }
  
  // Usage
  class CounterScreen extends ConsumerWidget {
    @override
    Widget build(BuildContext context, WidgetRef ref) {
      final count = ref.watch(counterProvider);
      
      return Scaffold(
        body: Center(
          child: Text('Count: $count'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => ref.read(counterProvider.notifier).increment(),
          child: Icon(Icons.add),
        ),
      );
    }
  }
  ```

**🛠️ Proyecto:** App de lista de tareas con navegación y estado global

---

## 🌐 **Fase 4: HTTP y APIs (4-5 semanas)**

### HTTP Requests
- **HTTP Package**
  ```dart
  import 'package:http/http.dart' as http;
  import 'dart:convert';
  
  class ApiService {
    static const String baseUrl = 'https://jsonplaceholder.typicode.com';
    
    static Future<List<Post>> fetchPosts() async {
      final response = await http.get(Uri.parse('$baseUrl/posts'));
      
      if (response.statusCode == 200) {
        List<dynamic> body = jsonDecode(response.body);
        List<Post> posts = body.map((dynamic item) => Post.fromJson(item)).toList();
        return posts;
      } else {
        throw Exception('Failed to load posts');
      }
    }
    
    static Future<Post> createPost(Post post) async {
      final response = await http.post(
        Uri.parse('$baseUrl/posts'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(post.toJson()),
      );
      
      if (response.statusCode == 201) {
        return Post.fromJson(jsonDecode(response.body));
      } else {
        throw Exception('Failed to create post');
      }
    }
  }
  
  // Model class
  class Post {
    final int id;
    final String title;
    final String body;
    
    Post({required this.id, required this.title, required this.body});
    
    factory Post.fromJson(Map<String, dynamic> json) {
      return Post(
        id: json['id'],
        title: json['title'],
        body: json['body'],
      );
    }
    
    Map<String, dynamic> toJson() {
      return {
        'id': id,
        'title': title,
        'body': body,
      };
    }
  }
  ```

- **Dio Package** ⭐ *Más potente para APIs complejas*
  ```dart
  import 'package:dio/dio.dart';
  
  class DioService {
    late Dio _dio;
    
    DioService() {
      _dio = Dio();
      _dio.options.baseUrl = 'https://api.example.com';
      _dio.options.connectTimeout = Duration(seconds: 5);
      _dio.options.receiveTimeout = Duration(seconds: 3);
      
      // Interceptors
      _dio.interceptors.add(
        InterceptorsWrapper(
          onRequest: (options, handler) {
            // Add auth token
            options.headers['Authorization'] = 'Bearer $token';
            handler.next(options);
          },
          onError: (error, handler) {
            // Handle errors globally
            print('Error: ${error.message}');
            handler.next(error);
          },
        ),
      );
    }
    
    Future<Response> get(String path) async {
      try {
        final response = await _dio.get(path);
        return response;
      } catch (e) {
        throw Exception('GET request failed: $e');
      }
    }
  }
  ```

### Error Handling y Loading States
- **FutureBuilder**
  ```dart
  class PostsList extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return FutureBuilder<List<Post>>(
        future: ApiService.fetchPosts(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.error, size: 64, color: Colors.red),
                  SizedBox(height: 16),
                  Text('Error: ${snapshot.error}'),
                  ElevatedButton(
                    onPressed: () {
                      // Retry logic
                      setState(() {});
                    },
                    child: Text('Retry'),
                  ),
                ],
              ),
            );
          } else if (snapshot.hasData) {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                final post = snapshot.data![index];
                return ListTile(
                  title: Text(post.title),
                  subtitle: Text(post.body),
                );
              },
            );
          } else {
            return Center(child: Text('No data available'));
          }
        },
      );
    }
  }
  ```

### Image Loading
- **Cached Network Image**
  ```dart
  import 'package:cached_network_image/cached_network_image.dart';
  
  CachedNetworkImage(
    imageUrl: "https://via.placeholder.com/200x200",
    placeholder: (context, url) => CircularProgressIndicator(),
    errorWidget: (context, url, error) => Icon(Icons.error),
    fit: BoxFit.cover,
    height: 200,
    width: 200,
  )
  ```

**🛠️ Proyecto:** App de noticias con API REST, carga de imágenes y manejo de errores

---

## 💾 **Fase 5: Data Persistence (4-5 semanas)**

### Local Storage
- **SharedPreferences**
  ```dart
  import 'package:shared_preferences/shared_preferences.dart';
  
  class PreferencesService {
    static SharedPreferences? _preferences;
    
    static Future<void> init() async {
      _preferences = await SharedPreferences.getInstance();
    }
    
    static Future<bool> setString(String key, String value) async {
      return await _preferences!.setString(key, value);
    }
    
    static String? getString(String key) {
      return _preferences!.getString(key);
    }
    
    static Future<bool> setBool(String key, bool value) async {
      return await _preferences!.setBool(key, value);
    }
    
    static bool? getBool(String key) {
      return _preferences!.getBool(key);
    }
  }
  
  // Usage
  void main() async {
    WidgetsFlutterBinding.ensureInitialized();
    await PreferencesService.init();
    runApp(MyApp());
  }
  
  // Save user settings
  await PreferencesService.setString('username', 'john_doe');
  await PreferencesService.setBool('dark_mode', true);
  
  // Retrieve user settings
  String? username = PreferencesService.getString('username');
  bool? darkMode = PreferencesService.getBool('dark_mode') ?? false;
  ```

### SQLite Database
- **Sqflite Package**
  ```dart
  import 'package:sqflite/sqflite.dart';
  import 'package:path/path.dart';
  
  class DatabaseHelper {
    static final DatabaseHelper _instance = DatabaseHelper._internal();
    factory DatabaseHelper() => _instance;
    DatabaseHelper._internal();
    
    Database? _database;
    
    Future<Database> get database async {
      if (_database != null) return _database!;
      _database = await _initDatabase();
      return _database!;
    }
    
    Future<Database> _initDatabase() async {
      String path = join(await getDatabasesPath(), 'app_database.db');
      return await openDatabase(
        path,
        version: 1,
        onCreate: _onCreate,
      );
    }
    
    Future<void> _onCreate(Database db, int version) async {
      await db.execute('''
        CREATE TABLE users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          created_at TEXT NOT NULL
        )
      ''');
    }
    
    // CRUD Operations
    Future<int> insertUser(User user) async {
      final db = await database;
      return await db.insert('users', user.toMap());
    }
    
    Future<List<User>> getAllUsers() async {
      final db = await database;
      final List<Map<String, dynamic>> maps = await db.query('users');
      return List.generate(maps.length, (i) {
        return User.fromMap(maps[i]);
      });
    }
    
    Future<int> updateUser(User user) async {
      final db = await database;
      return await db.update(
        'users',
        user.toMap(),
        where: 'id = ?',
        whereArgs: [user.id],
      );
    }
    
    Future<int> deleteUser(int id) async {
      final db = await database;
      return await db.delete(
        'users',
        where: 'id = ?',
        whereArgs: [id],
      );
    }
  }
  
  // User Model
  class User {
    int? id;
    String name;
    String email;
    DateTime createdAt;
    
    User({
      this.id,
      required this.name,
      required this.email,
      required this.createdAt,
    });
    
    Map<String, dynamic> toMap() {
      return {
        'id': id,
        'name': name,
        'email': email,
        'created_at': createdAt.toIso8601String(),
      };
    }
    
    factory User.fromMap(Map<String, dynamic> map) {
      return User(
        id: map['id'],
        name: map['name'],
        email: map['email'],
        createdAt: DateTime.parse(map['created_at']),
      );
    }
  }
  ```

### Hive Database ⭐ *Recomendado para simplicidad*
- **NoSQL Box Storage**
  ```dart
  import 'package:hive/hive.dart';
  import 'package:hive_flutter/hive_flutter.dart';
  
  // Model with annotations
  @HiveType(typeId: 0)
  class Person extends HiveObject {
    @HiveField(0)
    String name;
    
    @HiveField(1)
    int age;
    
    @HiveField(2)
    List<String> hobbies;
    
    Person({required this.name, required this.age, required this.hobbies});
  }
  
  // Initialize Hive
  void main() async {
    WidgetsFlutterBinding.ensureInitialized();
    await Hive.initFlutter();
    Hive.registerAdapter(PersonAdapter());
    await Hive.openBox<Person>('persons');
    runApp(MyApp());
  }
  
  // CRUD Operations
  class PersonService {
    static final Box<Person> _box = Hive.box<Person>('persons');
    
    static void addPerson(Person person) {
      _box.add(person);
    }
    
    static List<Person> getAllPersons() {
      return _box.values.toList();
    }
    
    static void updatePerson(int index, Person person) {
      _box.putAt(index, person);
    }
    
    static void deletePerson(int index) {
      _box.deleteAt(index);
    }
  }
  ```

**🛠️ Proyecto:** App de contactos con CRUD completo y persistencia local

---

## 🎨 **Fase 6: UI/UX Avanzado y Animaciones (6-8 semanas)**

### Advanced Layouts
- **CustomScrollView y Slivers**
  ```dart
  class SliverExample extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 200,
            floating: false,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              title: Text('Sliver App Bar'),
              background: Image.network(
                'https://via.placeholder.com/400x200',
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                'This is some content before the list',
                style: Theme.of(context).textTheme.headlineSmall,
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (BuildContext context, int index) {
                return ListTile(
                  leading: CircleAvatar(child: Text('$index')),
                  title: Text('Item $index'),
                  subtitle: Text('Subtitle for item $index'),
                );
              },
              childCount: 50,
            ),
          ),
        ],
      );
    }
  }
  ```

- **GridView y StaggeredGrid**
  ```dart
  import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
  
  class GridExample extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return StaggeredGrid.count(
        crossAxisCount: 2,
        mainAxisSpacing: 4,
        crossAxisSpacing: 4,
        children: [
          StaggeredGridTile.count(
            crossAxisCellCount: 2,
            mainAxisCellCount: 1,
            child: Container(
              color: Colors.blue,
              child: Center(child: Text('Header')),
            ),
          ),
          StaggeredGridTile.count(
            crossAxisCellCount: 1,
            mainAxisCellCount: 2,
            child: Container(
              color: Colors.red,
              child: Center(child: Text('Tall')),
            ),
          ),
          StaggeredGridTile.count(
            crossAxisCellCount: 1,
            mainAxisCellCount: 1,
            child: Container(
              color: Colors.green,
              child: Center(child: Text('Square')),
            ),
          ),
        ],
      );
    }
  }
  ```

### Theming y Styling
- **Custom Themes**
  ```dart
  class AppTheme {
    static final lightTheme = ThemeData(
      primarySwatch: Colors.blue,
      brightness: Brightness.light,
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.blue,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ),
      cardTheme: CardTheme(
        elevation: 4,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
      ),
    );
    
    static final darkTheme = ThemeData(
      primarySwatch: Colors.blue,
      brightness: Brightness.dark,
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.grey[900],
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.blue,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
      ),
    );
  }
  
  // Usage in main app
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        title: 'Flutter Demo',
        theme: AppTheme.lightTheme,
        darkTheme: AppTheme.darkTheme,
        themeMode: ThemeMode.system,
        home: MyHomePage(),
      );
    }
  }
  ```

### Animations
- **Basic Animations**
  ```dart
  class AnimatedContainerExample extends StatefulWidget {
    @override
    _AnimatedContainerExampleState createState() => _AnimatedContainerExampleState();
  }
  
  class _AnimatedContainerExampleState extends State<AnimatedContainerExample> {
    bool _isExpanded = false;
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Center(
          child: GestureDetector(
            onTap: () {
              setState(() {
                _isExpanded = !_isExpanded;
              });
            },
            child: AnimatedContainer(
              duration: Duration(milliseconds: 500),
              curve: Curves.easeInOut,
              width: _isExpanded ? 300 : 100,
              height: _isExpanded ? 300 : 100,
              decoration: BoxDecoration(
                color: _isExpanded ? Colors.blue : Colors.red,
                borderRadius: BorderRadius.circular(_isExpanded ? 50 : 10),
              ),
              child: Center(
                child: Text(
                  'Tap me!',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: _isExpanded ? 24 : 16,
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    }
  }
  ```

- **Custom Animations with AnimationController**
  ```dart
  class CustomAnimationExample extends StatefulWidget {
    @override
    _CustomAnimationExampleState createState() => _CustomAnimationExampleState();
  }
  
  class _CustomAnimationExampleState extends State<CustomAnimationExample>
      with TickerProviderStateMixin {
    late AnimationController _controller;
    late Animation<double> _scaleAnimation;
    late Animation<double> _rotationAnimation;
    late Animation<Color?> _colorAnimation;
    
    @override
    void initState() {
      super.initState();
      _controller = AnimationController(
        duration: Duration(seconds: 2),
        vsync: this,
      );
      
      _scaleAnimation = Tween<double>(
        begin: 1.0,
        end: 2.0,
      ).animate(CurvedAnimation(
        parent: _controller,
        curve: Curves.elasticOut,
      ));
      
      _rotationAnimation = Tween<double>(
        begin: 0.0,
        end: 2 * 3.14159,
      ).animate(CurvedAnimation(
        parent: _controller,
        curve: Curves.linear,
      ));
      
      _colorAnimation = ColorTween(
        begin: Colors.blue,
        end: Colors.red,
      ).animate(_controller);
    }
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        body: Center(
          child: AnimatedBuilder(
            animation: _controller,
            builder: (context, child) {
              return Transform.scale(
                scale: _scaleAnimation.value,
                child: Transform.rotate(
                  angle: _rotationAnimation.value,
                  child: Container(
                    width: 100,
                    height: 100,
                    decoration: BoxDecoration(
                      color: _colorAnimation.value,
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
              );
            },
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            if (_controller.isCompleted) {
              _controller.reverse();
            } else {
              _controller.forward();
            }
          },
          child: Icon(Icons.play_arrow),
        ),
      );
    }
    
    @override
    void dispose() {
      _controller.dispose();
      super.dispose();
    }
  }
  ```

- **Hero Animations**
  ```dart
  class HeroAnimationExample extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text('Hero Animation')),
        body: GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 1,
          ),
          itemCount: 20,
          itemBuilder: (context, index) {
            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => DetailScreen(index: index),
                  ),
                );
              },
              child: Hero(
                tag: 'hero-$index',
                child: Card(
                  child: Center(
                    child: Text('Item $index'),
                  ),
                ),
              ),
            );
          },
        ),
      );
    }
  }
  
  class DetailScreen extends StatelessWidget {
    final int index;
    
    const DetailScreen({required this.index});
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text('Detail $index')),
        body: Center(
          child: Hero(
            tag: 'hero-$index',
            child: Card(
              child: Container(
                width: 300,
                height: 300,
                child: Center(
                  child: Text(
                    'Detail for Item $index',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    }
  }
  ```

**🛠️ Proyecto:** App de galería con animaciones, hero transitions y tema customizado

---

## 📱 **Fase 7: Native Features y Device APIs (6-8 semanas)**

### Camera y Media
- **Image Picker**
  ```dart
  import 'package:image_picker/image_picker.dart';
  import 'dart:io';
  
  class ImagePickerExample extends StatefulWidget {
    @override
    _ImagePickerExampleState createState() => _ImagePickerExampleState();
  }
  
  class _ImagePickerExampleState extends State<ImagePickerExample> {
    File? _image;
    final picker = ImagePicker();
    
    Future getImageFromCamera() async {
      final pickedFile = await picker.pickImage(source: ImageSource.camera);
      
      setState(() {
        if (pickedFile != null) {
          _image = File(pickedFile.path);
        }
      });
    }
    
    Future getImageFromGallery() async {
      final pickedFile = await picker.pickImage(source: ImageSource.gallery);
      
      setState(() {
        if (pickedFile != null) {
          _image = File(pickedFile.path);
        }
      });
    }
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text('Image Picker')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _image == null
                  ? Text('No image selected.')
                  : Container(
                      width: 300,
                      height: 300,
                      child: Image.file(_image!, fit: BoxFit.cover),
                    ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: getImageFromCamera,
                child: Text('Take Photo'),
              ),
              ElevatedButton(
                onPressed: getImageFromGallery,
                child: Text('Choose from Gallery'),
              ),
            ],
          ),
        ),
      );
    }
  }
  ```

### Location Services
- **Geolocator Package**
  ```dart
  import 'package:geolocator/geolocator.dart';
  
  class LocationService {
    static Future<Position?> getCurrentLocation() async {
      bool serviceEnabled;
      LocationPermission permission;
      
      // Check if location services are enabled
      serviceEnabled = await Geolocator.isLocationServiceEnabled();
      if (!serviceEnabled) {
        throw Exception('Location services are disabled.');
      }
      
      permission = await Geolocator.checkPermission();
      if (permission == LocationPermission.denied) {
        permission = await Geolocator.requestPermission();
        if (permission == LocationPermission.denied) {
          throw Exception('Location permissions are denied');
        }
      }
      
      if (permission == LocationPermission.deniedForever) {
        throw Exception('Location permissions are permanently denied');
      }
      
      return await Geolocator.getCurrentPosition();
    }
    
    static Stream<Position> getLocationStream() {
      return Geolocator.getPositionStream(
        locationSettings: LocationSettings(
          accuracy: LocationAccuracy.high,
          distanceFilter: 10,
        ),
      );
    }
  }
  
  // Usage in widget
  class LocationExample extends StatefulWidget {
    @override
    _LocationExampleState createState() => _LocationExampleState();
  }
  
  class _LocationExampleState extends State<LocationExample> {
    Position? _currentPosition;
    String _locationMessage = '';
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text('Location Example')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(_locationMessage),
              SizedBox(height: 20),
              if (_currentPosition != null)
                Text(
                  'Lat: ${_currentPosition!.latitude}\n'
                  'Lng: ${_currentPosition!.longitude}',
                ),
              ElevatedButton(
                onPressed: _getCurrentLocation,
                child: Text('Get Current Location'),
              ),
            ],
          ),
        ),
      );
    }
    
    void _getCurrentLocation() async {
      try {
        Position? position = await LocationService.getCurrentLocation();
        setState(() {
          _currentPosition = position;
          _locationMessage = 'Location found!';
        });
      } catch (e) {
        setState(() {
          _locationMessage = 'Error: $e';
        });
      }
    }
  }
  ```

### Push Notifications
- **Firebase Cloud Messaging**
  ```dart
  import 'package:firebase_messaging/firebase_messaging.dart';
  import 'package:flutter_local_notifications/flutter_local_notifications.dart';
  
  class NotificationService {
    static final FlutterLocalNotificationsPlugin _notificationsPlugin =
        FlutterLocalNotificationsPlugin();
    
    static Future<void> initialize() async {
      const AndroidInitializationSettings androidSettings =
          AndroidInitializationSettings('@mipmap/ic_launcher');
      
      const DarwinInitializationSettings iosSettings =
          DarwinInitializationSettings();
      
      const InitializationSettings settings = InitializationSettings(
        android: androidSettings,
        iOS: iosSettings,
      );
      
      await _notificationsPlugin.initialize(
        settings,
        onDidReceiveNotificationResponse: (NotificationResponse response) {
          // Handle notification tap
        },
      );
      
      // Request permissions
      await FirebaseMessaging.instance.requestPermission();
      
      // Get FCM token
      String? token = await FirebaseMessaging.instance.getToken();
      print('FCM Token: $token');
      
      // Listen for background messages
      FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
      
      // Listen for foreground messages
      FirebaseMessaging.onMessage.listen((RemoteMessage message) {
        _showLocalNotification(message);
      });
    }
    
    static Future<void> _showLocalNotification(RemoteMessage message) async {
      const AndroidNotificationDetails androidDetails =
          AndroidNotificationDetails(
        'default_channel',
        'Default Channel',
        channelDescription: 'Default notification channel',
        importance: Importance.max,
        priority: Priority.high,
      );
      
      const NotificationDetails details = NotificationDetails(
        android: androidDetails,
        iOS: DarwinNotificationDetails(),
      );
      
      await _notificationsPlugin.show(
        0,
        message.notification?.title,
        message.notification?.body,
        details,
      );
    }
  }
  
  @pragma('vm:entry-point')
  Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
    print('Background message: ${message.messageId}');
  }
  ```

### File System y Storage
- **Path Provider**
  ```dart
  import 'package:path_provider/path_provider.dart';
  import 'dart:io';
  
  class FileService {
    static Future<String> get _localPath async {
      final directory = await getApplicationDocumentsDirectory();
      return directory.path;
    }
    
    static Future<File> get _localFile async {
      final path = await _localPath;
      return File('$path/data.txt');
    }
    
    static Future<String> readData() async {
      try {
        final file = await _localFile;
        String contents = await file.readAsString();
        return contents;
      } catch (e) {
        return '';
      }
    }
    
    static Future<File> writeData(String data) async {
      final file = await _localFile;
      return file.writeAsString(data);
    }
    
    static Future<void> deleteFile() async {
      try {
        final file = await _localFile;
        await file.delete();
      } catch (e) {
        print('Error deleting file: $e');
      }
    }
  }
  
  // Usage
  class FileExample extends StatefulWidget {
    @override
    _FileExampleState createState() => _FileExampleState();
  }
  
  class _FileExampleState extends State<FileExample> {
    TextEditingController _controller = TextEditingController();
    String _fileContent = '';
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text('File Storage')),
        body: Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            children: [
              TextField(
                controller: _controller,
                decoration: InputDecoration(
                  labelText: 'Enter text to save',
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 16),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: _saveData,
                    child: Text('Save'),
                  ),
                  SizedBox(width: 8),
                  ElevatedButton(
                    onPressed: _loadData,
                    child: Text('Load'),
                  ),
                  SizedBox(width: 8),
                  ElevatedButton(
                    onPressed: _deleteData,
                    child: Text('Delete'),
                  ),
                ],
              ),
              SizedBox(height: 16),
              Text('File Content: $_fileContent'),
            ],
          ),
        ),
      );
    }
    
    void _saveData() async {
      await FileService.writeData(_controller.text);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Data saved!')),
      );
    }
    
    void _loadData() async {
      String content = await FileService.readData();
      setState(() {
        _fileContent = content;
      });
    }
    
    void _deleteData() async {
      await FileService.deleteFile();
      setState(() {
        _fileContent = '';
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('File deleted!')),
      );
    }
  }
  ```

**🛠️ Proyecto:** App de notas con cámara, localización y notificaciones

---

## 🧪 **Fase 8: Testing y Quality Assurance (4-6 semanas)**

### Unit Testing
- **Widget Testing**
  ```dart
  import 'package:flutter/material.dart';
  import 'package:flutter_test/flutter_test.dart';
  import 'package:myapp/main.dart';
  
  void main() {
    group('Counter App Tests', () {
      testWidgets('Counter increments smoke test', (WidgetTester tester) async {
        // Build our app and trigger a frame
        await tester.pumpWidget(MyApp());
        
        // Verify that our counter starts at 0
        expect(find.text('0'), findsOneWidget);
        expect(find.text('1'), findsNothing);
        
        // Tap the '+' icon and trigger a frame
        await tester.tap(find.byIcon(Icons.add));
        await tester.pump();
        
        // Verify that our counter has incremented
        expect(find.text('0'), findsNothing);
        expect(find.text('1'), findsOneWidget);
      });
      
      testWidgets('Counter decrements test', (WidgetTester tester) async {
        await tester.pumpWidget(MyApp());
        
        // First increment to 1
        await tester.tap(find.byIcon(Icons.add));
        await tester.pump();
        expect(find.text('1'), findsOneWidget);
        
        // Then decrement back to 0
        await tester.tap(find.byIcon(Icons.remove));
        await tester.pump();
        expect(find.text('0'), findsOneWidget);
      });
    });
    
    group('Form Validation Tests', () {
      testWidgets('Email validation test', (WidgetTester tester) async {
        await tester.pumpWidget(MaterialApp(home: LoginForm()));
        
        // Find email field and enter invalid email
        await tester.enterText(find.byKey(Key('email_field')), 'invalid-email');
        await tester.tap(find.byKey(Key('submit_button')));
        await tester.pump();
        
        // Expect validation error
        expect(find.text('Please enter a valid email'), findsOneWidget);
      });
    });
  }
  ```

- **Unit Tests**
  ```dart
  import 'package:flutter_test/flutter_test.dart';
  import 'package:myapp/services/calculator_service.dart';
  import 'package:myapp/models/user.dart';
  
  void main() {
    group('Calculator Service', () {
      late CalculatorService calculator;
      
      setUp(() {
        calculator = CalculatorService();
      });
      
      test('should add two numbers correctly', () {
        // Arrange
        final a = 5;
        final b = 3;
        
        // Act
        final result = calculator.add(a, b);
        
        // Assert
        expect(result, 8);
      });
      
      test('should throw exception when dividing by zero', () {
        // Arrange
        final a = 10;
        final b = 0;
        
        // Act & Assert
        expect(() => calculator.divide(a, b), throwsException);
      });
    });
    
    group('User Model', () {
      test('should create user from JSON correctly', () {
        // Arrange
        final json = {
          'id': 1,
          'name': 'John Doe',
          'email': 'john@example.com',
        };
        
        // Act
        final user = User.fromJson(json);
        
        // Assert
        expect(user.id, 1);
        expect(user.name, 'John Doe');
        expect(user.email, 'john@example.com');
      });
      
      test('should convert user to JSON correctly', () {
        // Arrange
        final user = User(id: 1, name: 'Jane Doe', email: 'jane@example.com');
        
        // Act
        final json = user.toJson();
        
        // Assert
        expect(json['id'], 1);
        expect(json['name'], 'Jane Doe');
        expect(json['email'], 'jane@example.com');
      });
    });
  }
  ```

### Integration Testing
- **Integration Tests**
  ```dart
  import 'package:flutter/material.dart';
  import 'package:flutter_test/flutter_test.dart';
  import 'package:integration_test/integration_test.dart';
  import 'package:myapp/main.dart' as app;
  
  void main() {
    IntegrationTestWidgetsFlutterBinding.ensureInitialized();
    
    group('App Integration Tests', () {
      testWidgets('Complete user flow test', (WidgetTester tester) async {
        // Launch app
        app.main();
        await tester.pumpAndSettle();
        
        // Test login flow
        await tester.enterText(find.byKey(Key('email_field')), 'test@example.com');
        await tester.enterText(find.byKey(Key('password_field')), 'password123');
        await tester.tap(find.byKey(Key('login_button')));
        await tester.pumpAndSettle();
        
        // Verify navigation to home screen
        expect(find.text('Welcome'), findsOneWidget);
        
        // Test navigation to profile
        await tester.tap(find.byIcon(Icons.person));
        await tester.pumpAndSettle();
        
        // Verify profile screen
        expect(find.text('Profile'), findsOneWidget);
        
        // Test logout
        await tester.tap(find.byKey(Key('logout_button')));
        await tester.pumpAndSettle();
        
        // Verify back to login
        expect(find.text('Login'), findsOneWidget);
      });
    });
  }
  ```

### Golden Tests
- **Visual Regression Testing**
  ```dart
  import 'package:flutter/material.dart';
  import 'package:flutter_test/flutter_test.dart';
  import 'package:myapp/widgets/user_card.dart';
  
  void main() {
    group('Golden Tests', () {
      testWidgets('UserCard golden test', (WidgetTester tester) async {
        await tester.pumpWidget(
          MaterialApp(
            home: Scaffold(
              body: UserCard(
                name: 'John Doe',
                email: 'john@example.com',
                avatar: 'https://via.placeholder.com/100',
              ),
            ),
          ),
        );
        
        await expectLater(
          find.byType(UserCard),
          matchesGoldenFile('goldens/user_card.png'),
        );
      });
      
      testWidgets('UserCard dark theme golden test', (WidgetTester tester) async {
        await tester.pumpWidget(
          MaterialApp(
            theme: ThemeData.dark(),
            home: Scaffold(
              body: UserCard(
                name: 'John Doe',
                email: 'john@example.com',
                avatar: 'https://via.placeholder.com/100',
              ),
            ),
          ),
        );
        
        await expectLater(
          find.byType(UserCard),
          matchesGoldenFile('goldens/user_card_dark.png'),
        );
      });
    });
  }
  ```

**🛠️ Proyecto:** Suite completa de tests para app existente

---

## 🚀 **Fase 9: Performance y Optimization (4-6 semanas)**

### Performance Best Practices
- **Widget Optimization**
  ```dart
  // ✅ Good: Use const constructors
  class MyWidget extends StatelessWidget {
    const MyWidget({Key? key}) : super(key: key);
    
    @override
    Widget build(BuildContext context) {
      return const Text('Hello World'); // const constructor
    }
  }
  
  // ✅ Good: Extract widgets to avoid rebuilds
  class ParentWidget extends StatefulWidget {
    @override
    _ParentWidgetState createState() => _ParentWidgetState();
  }
  
  class _ParentWidgetState extends State<ParentWidget> {
    int counter = 0;
    
    @override
    Widget build(BuildContext context) {
      return Column(
        children: [
          Text('Counter: $counter'),
          const ExpensiveWidget(), // Won't rebuild when counter changes
          ElevatedButton(
            onPressed: () => setState(() => counter++),
            child: Text('Increment'),
          ),
        ],
      );
    }
  }
  
  class ExpensiveWidget extends StatelessWidget {
    const ExpensiveWidget({Key? key}) : super(key: key);
    
    @override
    Widget build(BuildContext context) {
      print('ExpensiveWidget rebuilt'); // This won't print on counter changes
      return Container(
        height: 200,
        child: ListView.builder(
          itemCount: 1000,
          itemBuilder: (context, index) => ListTile(title: Text('Item $index')),
        ),
      );
    }
  }
  ```

- **List Performance**
  ```dart
  // ✅ Good: Use ListView.builder for large lists
  ListView.builder(
    itemCount: items.length,
    itemBuilder: (context, index) {
      return ListTile(title: Text(items[index]));
    },
  )
  
  // ✅ Good: Use AutomaticKeepAliveClientMixin for complex list items
  class ComplexListItem extends StatefulWidget {
    @override
    _ComplexListItemState createState() => _ComplexListItemState();
  }
  
  class _ComplexListItemState extends State<ComplexListItem>
      with AutomaticKeepAliveClientMixin {
    
    @override
    bool get wantKeepAlive => true;
    
    @override
    Widget build(BuildContext context) {
      super.build(context); // Required for AutomaticKeepAliveClientMixin
      return ExpensiveWidget();
    }
  }
  ```

### Memory Management
- **Image Optimization**
  ```dart
  // ✅ Good: Use cacheWidth and cacheHeight
  Image.network(
    'https://example.com/large-image.jpg',
    cacheWidth: 300,
    cacheHeight: 200,
    fit: BoxFit.cover,
  )
  
  // ✅ Good: Dispose resources properly
  class VideoPlayerScreen extends StatefulWidget {
    @override
    _VideoPlayerScreenState createState() => _VideoPlayerScreenState();
  }
  
  class _VideoPlayerScreenState extends State<VideoPlayerScreen> {
    late VideoPlayerController _controller;
    
    @override
    void initState() {
      super.initState();
      _controller = VideoPlayerController.network('video_url');
    }
    
    @override
    void dispose() {
      _controller.dispose(); // Always dispose controllers
      super.dispose();
    }
    
    @override
    Widget build(BuildContext context) {
      return VideoPlayer(_controller);
    }
  }
  ```

### Performance Monitoring
- **Performance Overlay**
  ```dart
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        title: 'Flutter Demo',
        showPerformanceOverlay: true, // Shows FPS and GPU usage
        home: MyHomePage(),
      );
    }
  }
  
  // Profile widget rebuilds
  class DebugWidget extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      print('DebugWidget rebuilt at ${DateTime.now()}');
      return Container();
    }
  }
  ```

**🛠️ Proyecto:** Optimizar app existente y medir mejoras de performance

---

## 📦 **Fase 10: Build, Deploy y CI/CD (4-5 semanas)**

### Build Configuration
- **Android Build**
  ```gradle
  // android/app/build.gradle
  android {
      compileSdkVersion 33
      
      compileOptions {
          sourceCompatibility JavaVersion.VERSION_1_8
          targetCompatibility JavaVersion.VERSION_1_8
      }
      
      defaultConfig {
          applicationId "com.example.myapp"
          minSdkVersion 21
          targetSdkVersion 33
          versionCode flutterVersionCode.toInteger()
          versionName flutterVersionName
      }
      
      signingConfigs {
          release {
              keyAlias keystoreProperties['keyAlias']
              keyPassword keystoreProperties['keyPassword']
              storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
              storePassword keystoreProperties['storePassword']
          }
      }
      
      buildTypes {
          release {
              signingConfig signingConfigs.release
              minifyEnabled true
              proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
          }
      }
  }
  ```

- **iOS Build Configuration**
  ```xml
  <!-- ios/Runner/Info.plist -->
  <dict>
      <key>CFBundleName</key>
      <string>MyApp</string>
      <key>CFBundleIdentifier</key>
      <string>com.example.myapp</string>
      <key>CFBundleVersion</key>
      <string>$(FLUTTER_BUILD_NUMBER)</string>
      <key>CFBundleShortVersionString</key>
      <string>$(FLUTTER_BUILD_NAME)</string>
      
      <!-- Permissions -->
      <key>NSCameraUsageDescription</key>
      <string>This app needs access to camera to take photos</string>
      <key>NSLocationWhenInUseUsageDescription</key>
      <string>This app needs location access to show nearby places</string>
  </dict>
  ```

### Continuous Integration
- **GitHub Actions**
  ```yaml
  # .github/workflows/flutter.yml
  name: Flutter CI/CD
  
  on:
    push:
      branches: [ main, develop ]
    pull_request:
      branches: [ main ]
  
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: flutter pub get
      - run: flutter test
      - run: flutter analyze
  
    build-android:
      needs: test
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: flutter pub get
      - run: flutter build apk --release
      - uses: actions/upload-artifact@v3
        with:
          name: android-apk
          path: build/app/outputs/flutter-apk/app-release.apk
  
    build-ios:
      needs: test
      runs-on: macos-latest
      steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: flutter pub get
      - run: flutter build ios --release --no-codesign
  ```

### App Store Deployment
- **Fastlane Configuration**
  ```ruby
  # ios/fastlane/Fastfile
  default_platform(:ios)
  
  platform :ios do
    desc "Build and upload to TestFlight"
    lane :beta do
      increment_build_number(xcodeproj: "Runner.xcodeproj")
      build_app(workspace: "Runner.xcworkspace", scheme: "Runner")
      upload_to_testflight
    end
    
    desc "Deploy to App Store"
    lane :release do
      increment_build_number(xcodeproj: "Runner.xcodeproj")
      build_app(workspace: "Runner.xcworkspace", scheme: "Runner")
      upload_to_app_store
    end
  end
  
  # android/fastlane/Fastfile
  default_platform(:android)
  
  platform :android do
    desc "Deploy to Play Store"
    lane :deploy do
      gradle(task: "clean bundleRelease")
      upload_to_play_store(
        track: 'production',
        aab: 'app/build/outputs/bundle/release/app-release.aab'
      )
    end
    
    desc "Deploy to Play Store Internal Testing"
    lane :internal do
      gradle(task: "clean bundleRelease")
      upload_to_play_store(
        track: 'internal',
        aab: 'app/build/outputs/bundle/release/app-release.aab'
      )
    end
  end
  ```

**🛠️ Proyecto:** Pipeline completo de CI/CD con deployment automático

---

## 🏗️ **Fase 11: Advanced Architecture Patterns (6-8 semanas)**

### Clean Architecture
- **Project Structure**
  ```
  lib/
  ├── main.dart
  ├── core/
  │   ├── error/
  │   │   ├── failures.dart
  │   │   └── exceptions.dart
  │   ├── network/
  │   │   └── network_info.dart
  │   └── usecases/
  │       └── usecase.dart
  ├── features/
  │   └── user_profile/
  │       ├── data/
  │       │   ├── datasources/
  │       │   │   ├── user_local_data_source.dart
  │       │   │   └── user_remote_data_source.dart
  │       │   ├── models/
  │       │   │   └── user_model.dart
  │       │   └── repositories/
  │       │       └── user_repository_impl.dart
  │       ├── domain/
  │       │   ├── entities/
  │       │   │   └── user.dart
  │       │   ├── repositories/
  │       │   │   └── user_repository.dart
  │       │   └── usecases/
  │       │       ├── get_user_profile.dart
  │       │       └── update_user_profile.dart
  │       └── presentation/
  │           ├── bloc/
  │           │   ├── user_bloc.dart
  │           │   ├── user_event.dart
  │           │   └── user_state.dart
  │           ├── pages/
  │           │   └── user_profile_page.dart
  │           └── widgets/
  │               └── user_info_widget.dart
  ```

- **Domain Layer**
  ```dart
  // Domain Entity
  class User extends Equatable {
    final String id;
    final String name;
    final String email;
    final String? avatarUrl;
    
    const User({
      required this.id,
      required this.name,
      required this.email,
      this.avatarUrl,
    });
    
    @override
    List<Object?> get props => [id, name, email, avatarUrl];
  }
  
  // Repository Abstract Class
  abstract class UserRepository {
    Future<Either<Failure, User>> getUserProfile(String userId);
    Future<Either<Failure, User>> updateUserProfile(User user);
  }
  
  // Use Case
  class GetUserProfile implements UseCase<User, String> {
    final UserRepository repository;
    
    GetUserProfile(this.repository);
    
    @override
    Future<Either<Failure, User>> call(String userId) async {
      return await repository.getUserProfile(userId);
    }
  }
  ```

- **Data Layer**
  ```dart
  // Data Model
  class UserModel extends User {
    const UserModel({
      required String id,
      required String name,
      required String email,
      String? avatarUrl,
    }) : super(id: id, name: name, email: email, avatarUrl: avatarUrl);
    
    factory UserModel.fromJson(Map<String, dynamic> json) {
      return UserModel(
        id: json['id'],
        name: json['name'],
        email: json['email'],
        avatarUrl: json['avatar_url'],
      );
    }
    
    Map<String, dynamic> toJson() {
      return {
        'id': id,
        'name': name,
        'email': email,
        'avatar_url': avatarUrl,
      };
    }
  }
  
  // Repository Implementation
  class UserRepositoryImpl implements UserRepository {
    final UserRemoteDataSource remoteDataSource;
    final UserLocalDataSource localDataSource;
    final NetworkInfo networkInfo;
    
    UserRepositoryImpl({
      required this.remoteDataSource,
      required this.localDataSource,
      required this.networkInfo,
    });
    
    @override
    Future<Either<Failure, User>> getUserProfile(String userId) async {
      if (await networkInfo.isConnected) {
        try {
          final remoteUser = await remoteDataSource.getUserProfile(userId);
          localDataSource.cacheUser(remoteUser);
          return Right(remoteUser);
        } on ServerException {
          return Left(ServerFailure());
        }
      } else {
        try {
          final localUser = await localDataSource.getLastUser();
          return Right(localUser);
        } on CacheException {
          return Left(CacheFailure());
        }
      }
    }
  }
  ```

### BLoC Architecture
- **BLoC Implementation**
  ```dart
  // Events
  abstract class UserEvent extends Equatable {
    const UserEvent();
    
    @override
    List<Object> get props => [];
  }
  
  class GetUserProfileEvent extends UserEvent {
    final String userId;
    
    const GetUserProfileEvent(this.userId);
    
    @override
    List<Object> get props => [userId];
  }
  
  class UpdateUserProfileEvent extends UserEvent {
    final User user;
    
    const UpdateUserProfileEvent(this.user);
    
    @override
    List<Object> get props => [user];
  }
  
  // States
  abstract class UserState extends Equatable {
    const UserState();
    
    @override
    List<Object> get props => [];
  }
  
  class UserInitial extends UserState {}
  
  class UserLoading extends UserState {}
  
  class UserLoaded extends UserState {
    final User user;
    
    const UserLoaded(this.user);
    
    @override
    List<Object> get props => [user];
  }
  
  class UserError extends UserState {
    final String message;
    
    const UserError(this.message);
    
    @override
    List<Object> get props => [message];
  }
  
  // BLoC
  class UserBloc extends Bloc<UserEvent, UserState> {
    final GetUserProfile getUserProfile;
    final UpdateUserProfile updateUserProfile;
    
    UserBloc({
      required this.getUserProfile,
      required this.updateUserProfile,
    }) : super(UserInitial()) {
      on<GetUserProfileEvent>(_onGetUserProfile);
      on<UpdateUserProfileEvent>(_onUpdateUserProfile);
    }
    
    Future<void> _onGetUserProfile(
      GetUserProfileEvent event,
      Emitter<UserState> emit,
    ) async {
      emit(UserLoading());
      
      final failureOrUser = await getUserProfile(event.userId);
      
      failureOrUser.fold(
        (failure) => emit(UserError(_mapFailureToMessage(failure))),
        (user) => emit(UserLoaded(user)),
      );
    }
    
    Future<void> _onUpdateUserProfile(
      UpdateUserProfileEvent event,
      Emitter<UserState> emit,
    ) async {
      emit(UserLoading());
      
      final failureOrUser = await updateUserProfile(event.user);
      
      failureOrUser.fold(
        (failure) => emit(UserError(_mapFailureToMessage(failure))),
        (user) => emit(UserLoaded(user)),
      );
    }
    
    String _mapFailureToMessage(Failure failure) {
      switch (failure.runtimeType) {
        case ServerFailure:
          return 'Server error occurred';
        case CacheFailure:
          return 'Cache error occurred';
        default:
          return 'Unexpected error occurred';
      }
    }
  }
  ```

- **Presentation Layer**
  ```dart
  class UserProfilePage extends StatelessWidget {
    final String userId;
    
    const UserProfilePage({required this.userId});
    
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text('User Profile')),
        body: BlocProvider(
          create: (context) => GetIt.instance<UserBloc>()
            ..add(GetUserProfileEvent(userId)),
          child: BlocBuilder<UserBloc, UserState>(
            builder: (context, state) {
              if (state is UserInitial || state is UserLoading) {
                return Center(child: CircularProgressIndicator());
              } else if (state is UserLoaded) {
                return UserProfileWidget(user: state.user);
              } else if (state is UserError) {
                return Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text('Error: ${state.message}'),
                      ElevatedButton(
                        onPressed: () {
                          context.read<UserBloc>().add(GetUserProfileEvent(userId));
                        },
                        child: Text('Retry'),
                      ),
                    ],
                  ),
                );
              }
              return Container();
            },
          ),
        ),
      );
    }
  }
  ```

### Dependency Injection
- **GetIt Setup**
  ```dart
  import 'package:get_it/get_it.dart';
  
  final GetIt sl = GetIt.instance;
  
  Future<void> init() async {
    //! Features - User Profile
    // Bloc
    sl.registerFactory(
      () => UserBloc(
        getUserProfile: sl(),
        updateUserProfile: sl(),
      ),
    );
    
    // Use cases
    sl.registerLazySingleton(() => GetUserProfile(sl()));
    sl.registerLazySingleton(() => UpdateUserProfile(sl()));
    
    // Repository
    sl.registerLazySingleton<UserRepository>(
      () => UserRepositoryImpl(
        remoteDataSource: sl(),
        localDataSource: sl(),
        networkInfo: sl(),
      ),
    );
    
    // Data sources
    sl.registerLazySingleton<UserRemoteDataSource>(
      () => UserRemoteDataSourceImpl(client: sl()),
    );
    
    sl.registerLazySingleton<UserLocalDataSource>(
      () => UserLocalDataSourceImpl(sharedPreferences: sl()),
    );
    
    //! Core
    sl.registerLazySingleton<NetworkInfo>(() => NetworkInfoImpl(sl()));
    
    //! External
    final sharedPreferences = await SharedPreferences.getInstance();
    sl.registerLazySingleton(() => sharedPreferences);
    sl.registerLazySingleton(() => http.Client());
    sl.registerLazySingleton(() => DataConnectionChecker());
  }
  
  // Main app
  void main() async {
    WidgetsFlutterBinding.ensureInitialized();
    await init();
    runApp(MyApp());
  }
  ```

**🛠️ Proyecto:** App enterprise con Clean Architecture y BLoC

---

## 🎯 **Fase 12: Especialización y Advanced Topics (Ongoing)**

### Elige tu Especialización

#### 1. **Flutter Web Development**
- **Web-Specific Considerations**
  ```dart
  import 'package:flutter/foundation.dart';
  
  class ResponsiveWidget extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      if (kIsWeb) {
        return LayoutBuilder(
          builder: (context, constraints) {
            if (constraints.maxWidth > 1200) {
              return DesktopLayout();
            } else if (constraints.maxWidth > 800) {
              return TabletLayout();
            } else {
              return MobileLayout();
            }
          },
        );
      } else {
        return MobileLayout();
      }
    }
  }
  
  // URL Strategy for web
  import 'package:flutter_web_plugins/url_strategy.dart';
  
  void main() {
    usePathUrlStrategy(); // Remove # from URLs
    runApp(MyApp());
  }
  ```

#### 2. **Flutter Desktop Development**
- **Desktop-Specific Features**
  ```dart
  import 'dart:io';
  
  class DesktopFeatures {
    static bool get isDesktop {
      return Platform.isWindows || Platform.isLinux || Platform.isMacOS;
    }
    
    static void setupWindowManager() async {
      if (isDesktop) {
        await windowManager.ensureInitialized();
        
        WindowOptions windowOptions = const WindowOptions(
          size: Size(1200, 800),
          minimumSize: Size(800, 600),
          center: true,
          backgroundColor: Colors.transparent,
          skipTaskbar: false,
          titleBarStyle: TitleBarStyle.normal,
        );
        
        windowManager.waitUntilReadyToShow(windowOptions, () async {
          await windowManager.show();
          await windowManager.focus();
        });
      }
    }
  }
  ```

#### 3. **Game Development con Flutter**
- **Flame Game Engine**
  ```dart
  import 'package:flame/game.dart';
  import 'package:flame/components.dart';
  
  class MyGame extends FlameGame {
    @override
    Future<void> onLoad() async {
      // Load sprites
      final playerSprite = await loadSprite('player.png');
      
      // Add components
      add(Player(sprite: playerSprite));
      add(Background());
    }
  }
  
  class Player extends SpriteComponent with HasKeyboardHandlerComponents {
    @override
    Future<void> onLoad() async {
      size = Vector2.all(50);
      position = Vector2(100, 100);
    }
    
    @override
    void update(double dt) {
      super.update(dt);
      // Game logic here
    }
  }
  
  // Main app
  class GameApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return GameWidget<MyGame>.controlled(
        gameFactory: MyGame.new,
      );
    }
  }
  ```

#### 4. **Machine Learning Integration**
- **TensorFlow Lite**
  ```dart
  import 'package:tflite_flutter/tflite_flutter.dart';
  
  class MLService {
    Interpreter? _interpreter;
    
    Future<void> loadModel() async {
      try {
        _interpreter = await Interpreter.fromAsset('model.tflite');
        print('Model loaded successfully');
      } catch (e) {
        print('Failed to load model: $e');
      }
    }
    
    Future<List<double>> predict(List<List<List<List<double>>>> input) async {
      if (_interpreter == null) return [];
      
      var output = List.filled(1 * 10, 0.0).reshape([1, 10]);
      _interpreter!.run(input, output);
      
      return output[0];
    }
    
    void dispose() {
      _interpreter?.close();
    }
  }
  ```

#### 5. **IoT y Hardware Integration**
- **Bluetooth Integration**
  ```dart
  import 'package:flutter_bluetooth_serial/flutter_bluetooth_serial.dart';
  
  class BluetoothService {
    BluetoothConnection? connection;
    
    Future<void> connectToDevice(BluetoothDevice device) async {
      try {
        connection = await BluetoothConnection.toAddress(device.address);
        print('Connected to ${device.name}');
        
        connection!.input!.listen((data) {
          // Handle incoming data
          String message = String.fromCharCodes(data);
          print('Received: $message');
        });
      } catch (e) {
        print('Cannot connect, exception occurred: $e');
      }
    }
    
    void sendData(String data) {
      if (connection != null && connection!.isConnected) {
        connection!.output.add(utf8.encode(data));
        connection!.output.allSent;
      }
    }
    
    void disconnect() {
      connection?.close();
    }
  }
  ```

**🛠️ Proyecto:** App especializada en tu dominio elegido

---

## 🛠️ **Herramientas y Ecosystem**

### Essential Development Tools
- **IDEs y Editors:**
  - Android Studio con Flutter plugin
  - VS Code con Flutter/Dart extensions
  - IntelliJ IDEA
  - Vim/Neovim con CoC

- **Debugging Tools:**
  - Flutter Inspector
  - Dart DevTools
  - Firebase Crashlytics
  - Sentry for error tracking

### Popular Packages
- **State Management:**
  - provider, riverpod
  - bloc, flutter_bloc
  - get, mobx
  - redux, redux_toolkit

- **UI/UX:**
  - animations, lottie
  - shimmer, skeleton_text
  - flutter_svg, cached_network_image
  - google_fonts

- **Networking:**
  - dio, http
  - retrofit, chopper
  - web_socket_channel
  - connectivity_plus

- **Storage:**
  - shared_preferences, hive
  - sqflite, isar
  - path_provider, file_picker

### Backend Services
- **Firebase:**
  - Authentication, Firestore
  - Cloud Functions, Storage
  - Analytics, Crashlytics
  - Remote Config

- **Supabase:**
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication
  - Storage

---

## ⏱️ **Timeline Detallado**

| Fase | Duración | Dedicación | Total Horas | Skills Clave |
|------|----------|------------|-------------|--------------|
| **1. Dart Fundamentals** | 4-6 sem | 15-20h/sem | 60-120h | OOP, Async, Null safety |
| **2. Flutter Basics** | 6-8 sem | 20-25h/sem | 120-200h | Widgets, Layouts, Forms |
| **3. Navigation/State** | 5-6 sem | 20-25h/sem | 100-150h | Navigation, Provider/BLoC |
| **4. HTTP/APIs** | 4-5 sem | 15-20h/sem | 60-100h | REST APIs, Error handling |
| **5. Data Persistence** | 4-5 sem | 15-20h/sem | 60-100h | SQLite, Hive, SharedPrefs |
| **6. Advanced UI** | 6-8 sem | 20-30h/sem | 120-240h | Animations, Custom widgets |
| **7. Native Features** | 6-8 sem | 20-25h/sem | 120-200h | Camera, Location, Push |
| **8. Testing** | 4-6 sem | 15-20h/sem | 60-120h | Unit, Widget, Integration |
| **9. Performance** | 4-6 sem | 15-25h/sem | 60-150h | Optimization, Profiling |
| **10. Deploy** | 4-5 sem | 10-20h/sem | 40-100h | CI/CD, App stores |
| **11. Architecture** | 6-8 sem | 25-30h/sem | 150-240h | Clean arch, DI, Patterns |
| **12. Especialización** | Ongoing | 20-30h/sem | 200+ h | Domain-specific skills |

**Total:** 15-20 meses (1130-1720 horas)

---

## 💡 **Pro Tips para Flutter**

### 1. **Start Smart**
```dart
// ✅ Always use const constructors when possible
const Text('Hello World');

// ✅ Use meaningful widget names
class UserProfileCard extends StatelessWidget {}

// ✅ Extract complex widgets
Widget _buildUserInfo() => Column(children: [...]);
```

### 2. **Performance desde el Día 1**
```dart
// ✅ Use ListView.builder for dynamic lists
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ItemWidget(items[index]),
)

// ❌ Avoid this for large lists
Column(children: items.map((item) => ItemWidget(item)).toList())

// ✅ Use const in loops
ListView.builder(
  itemBuilder: (context, index) => const Divider(), // const!
)
```

### 3. **State Management Best Practices**
```dart
// ✅ Provider for simple state
ChangeNotifierProvider(
  create: (context) => CounterModel(),
  child: MyApp(),
)

// ✅ BLoC for complex business logic
BlocProvider(
  create: (context) => UserBloc(repository: sl()),
  child: UserScreen(),
)
```

### 4. **Common Flutter Pitfalls**
```dart
// ❌ Don't do this
setState(() {}); // Empty setState

// ✅ Do this
if (mounted) {
  setState(() {
    _counter++;
  });
}

// ❌ Don't forget to dispose
class _MyWidgetState extends State<MyWidget> {
  late AnimationController _controller;
  
  @override
  void dispose() {
    _controller.dispose(); // Always dispose!
    super.dispose();
  }
}
```

---

## 🎯 **Tu Siguiente Paso**

1. **Evalúa tu experiencia con programación** - ¿Principiante total o tienes experiencia?
2. **Instala Flutter** - Sigue la guía oficial de instalación
3. **Crea tu primer "Hello World"** - `flutter create my_first_app`
4. **Aprende Dart básico** - Si no tienes experiencia en programación
5. **Construye el proyecto de calculadora** - Para practicar widgets básicos
6. **Únete a la comunidad** - Flutter Discord, Reddit r/FlutterDev

---

## 🏆 **Project Ideas Progression**

### Beginner (Fases 1-3)
1. **Calculator App** - Layouts, state básico
2. **Todo List** - Forms, lists, local storage
3. **Weather App** - APIs, JSON parsing

### Intermediate (Fases 4-7)
4. **Chat App** - Real-time, authentication
5. **E-commerce App** - Navigation compleja, cart management
6. **Photo Gallery** - Camera, storage, grid layouts

### Advanced (Fases 8-12)
7. **Social Media App** - Complex state, real-time updates
8. **Banking App** - Security, biometrics, complex forms
9. **Game/Entertainment App** - Animations, custom painting

---

## 📈 **Career Path Flutter**

### Junior Flutter Developer (0-2 años)
- **Skills:** Basic widgets, simple state management, API integration
- **Salary:** $35,000 - $55,000
- **Projects:** Simple CRUD apps, UI implementations

### Mid-Level Flutter Developer (2-4 años)
- **Skills:** Complex state management, testing, performance optimization
- **Salary:** $55,000 - $85,000
- **Projects:** Feature-complete apps, team collaboration

### Senior Flutter Developer (4-6 años)
- **Skills:** Architecture patterns, mentoring, technical decisions
- **Salary:** $85,000 - $120,000
- **Projects:** App architecture, code review, team leadership

### Flutter Architect/Lead (6+ años)
- **Skills:** System design, technology strategy, cross-platform decisions
- **Salary:** $120,000 - $180,000+
- **Projects:** Technical strategy, multiple teams, architecture decisions

¡Flutter es una tecnología increíblemente potente y demandada! Con una sola base de código puedes crear apps nativas para iOS, Android, Web y Desktop. 🚀

¿Qué proyecto te emociona más construir con Flutter?