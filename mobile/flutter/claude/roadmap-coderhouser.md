# Curso Completo de Flutter - Contenido Detallado

## **Unidad 1: Iniciando con Flutter & Trabajando con el Emulador**

### Objetivos de Aprendizaje

- Comprender qué es Flutter y su arquitectura
- Configurar el entorno de desarrollo completo
- Crear tu primera aplicación Flutter
- Dominar el uso de emuladores y dispositivos físicos

### Contenido Teórico

- **¿Qué es Flutter?**

  - Flutter vs React Native vs desarrollo nativo
  - Dart como lenguaje de programación
  - Arquitectura de Flutter (Widgets, Elements, RenderObjects)
  - Flutter Engine y Skia
  - Casos de éxito: Google Ads, Alibaba, BMW

- **Configuración del Entorno**
  - Instalación de Flutter SDK
  - Configuración de Android Studio y VS Code
  - Instalación de Xcode (macOS)
  - Flutter Doctor para verificar instalación
  - Extensiones útiles para VS Code

### Contenido Práctico

- **Primera Aplicación Flutter**

  - `flutter create` y estructura del proyecto
  - Archivos principales: main.dart, pubspec.yaml
  - Hot Reload vs Hot Restart
  - Widget tree y primer widget personalizado

- **Emuladores y Dispositivos**
  - Configuración AVD Manager (Android)
  - iOS Simulator setup
  - Conectar dispositivos físicos
  - Flutter Inspector para debug visual
  - Performance overlay

### Ejercicios

1. Crear app "Contador Personalizado" con diferentes estilos
2. Modificar colores y temas de la aplicación
3. Ejecutar la misma app en Android e iOS

---

## **Unidad 2: Core Widgets & Eventos & Listas Optimizadas**

### Objetivos de Aprendizaje

- Dominar los widgets fundamentales de Flutter
- Implementar gestión de eventos y interacciones
- Crear listas eficientes y performantes

### Contenido Teórico

- **Widgets Fundamentales**

  - StatelessWidget vs StatefulWidget
  - Container, Row, Column, Stack
  - Text, Image, Icon widgets
  - Material Design vs Cupertino widgets
  - Widget lifecycle

- **Sistema de Eventos**
  - GestureDetector y sus variaciones
  - InkWell y Material ripple effects
  - Form validation y TextEditingController
  - Focus management

### Contenido Práctico

- **Layouts Básicos**

  - Flexbox con Row y Column
  - Alignment y MainAxisAlignment
  - Expanded, Flexible y Spacer
  - Container decoration y margin/padding
  - SafeArea y MediaQuery

- **Listas Optimizadas**

  - ListView vs ListView.builder
  - GridView y sus variaciones
  - CustomScrollView con Slivers
  - RefreshIndicator para pull-to-refresh
  - Infinite scroll con pagination
  - AnimatedList para animaciones

- **Formularios e Inputs**
  - TextField y TextFormField
  - Form widget y GlobalKey
  - Validation strategies
  - Keyboard types y input formatters

### Ejercicios

1. Lista de tareas con CRUD operations
2. Grid de fotos con lazy loading
3. Formulario de registro con validación completa

---

## **Unidad 3: Debug & Arquitectura de Widgets & Temas y Estilos**

### Objetivos de Aprendizaje

- Dominar herramientas de debugging en Flutter
- Crear arquitectura de widgets escalable
- Implementar sistemas de temas consistentes

### Contenido Teórico

- **Debugging Avanzado**

  - Flutter Inspector y Widget Inspector
  - Performance profiling
  - Memory leak detection
  - Network profiling
  - Assert y debugging tools

- **Arquitectura de Widgets**
  - Composition over inheritance
  - Widget extraction strategies
  - Builder pattern en Flutter
  - Custom widgets reutilizables

### Contenido Práctico

- **Debug Tooling**

  - Dart DevTools setup
  - Performance timeline
  - Memory tab usage
  - Network tab para HTTP debugging
  - Logging strategies

- **Sistema de Temas**

  - ThemeData y ColorScheme
  - Material 3 (Material You)
  - Dark theme implementation
  - Custom theme extensions
  - Typography themes
  - Responsive breakpoints

- **Widget Architecture**
  - Separating UI from logic
  - Custom widget libraries
  - Barrel exports para organización
  - Widget testing basics

### Ejercicios

1. Crear sistema de design tokens
2. Implementar dark/light theme switch
3. Debug y optimizar una app con problemas de performance

---

## **Unidad 4: Navegación & Fuentes Personalizadas & Responsive Design & Animaciones**

### Objetivos de Aprendizaje

- Implementar navegación compleja
- Personalizar tipografías y assets
- Crear interfaces adaptativas
- Añadir animaciones fluidas

### Contenido Teórico

- **Sistema de Navegación**

  - Navigator 1.0 vs Navigator 2.0
  - Named routes vs route objects
  - Navigation stack management
  - Deep linking fundamentals

- **Assets y Recursos**
  - Asset bundling strategy
  - Font loading y fallbacks
  - Image optimization
  - Internationalization basics

### Contenido Práctico

- **Navegación con GoRouter**

  - Setup de go_router package
  - Route configuration
  - Path parameters y query strings
  - Nested navigation
  - Route guards y redirection

- **Responsive Design**

  - LayoutBuilder para responsive widgets
  - MediaQuery breakpoints
  - Adaptive widgets (Cupertino/Material)
  - Orientation handling
  - Desktop/web considerations

- **Tipografías y Assets**

  - Google Fonts integration
  - Custom font installation
  - Icon fonts y vector icons
  - SVG support con flutter_svg
  - Asset variants para different densities

- **Animaciones Básicas**
  - AnimatedContainer y implicit animations
  - Hero animations
  - Page transitions
  - AnimationController basics
  - Curves y Tween animations

### Ejercicios

1. App multi-pantalla con navegación compleja
2. Interface completamente responsive
3. Galería con animaciones y transitions

---

## **Unidad 5: Navegación Avanzada & Tab Navigation & Drawer Navigation**

### Objetivos de Aprendizaje

- Dominar patrones de navegación complejos
- Implementar navegación por pestañas
- Crear navigation drawers personalizados

### Contenido Teórico

- **Patrones de Navegación**

  - Bottom navigation patterns
  - Tab navigation best practices
  - Drawer navigation UX
  - Modal navigation
  - Nested navigation strategies

- **State Management en Navegación**
  - Navigation state persistence
  - Deep linking con parámetros
  - Navigation analytics
  - Back button handling

### Contenido Práctico

- **Bottom Navigation**

  - BottomNavigationBar personalizada
  - Persistent bottom navigation
  - Badge notifications
  - Animated tab indicators
  - Floating action button integration

- **Tab Navigation**

  - TabBar y TabBarView
  - Scrollable tabs
  - Custom tab indicators
  - Nested tabs
  - Tab controller management

- **Drawer Navigation**

  - Drawer customization
  - Navigation rail para desktop
  - Mini drawer implementation
  - User profile integration
  - Drawer animations

- **Advanced Navigation**
  - Modal bottom sheets
  - Dialogs y overlays
  - Custom page transitions
  - Navigation interceptors

### Ejercicios

1. E-commerce app con navegación completa
2. Social media app layout
3. Dashboard admin con drawer y tabs

---

## **Unidad 6: State Management & HTTP & Firebase**

### Objetivos de Aprendizaje

- Dominar gestión de estado global
- Realizar peticiones HTTP eficientes
- Integrar Firebase como BaaS completo

### Contenido Teórico

- **State Management Options**

  - setState vs Provider vs Bloc vs Riverpod
  - When to use each approach
  - State architecture patterns
  - Reactive programming concepts

- **HTTP y Networking**
  - Dio vs http package
  - Request/response interceptors
  - Error handling strategies
  - Caching mechanisms
  - Offline-first approaches

### Contenido Práctico

- **Provider Pattern**

  - ChangeNotifier implementation
  - MultiProvider setup
  - Consumer y Selector widgets
  - Provider.of context access
  - State management best practices

- **BLoC Pattern**

  - Business Logic Components
  - Events y States
  - BlocBuilder y BlocListener
  - Repository pattern
  - Testing BLoCs

- **HTTP con Dio**

  - Instance configuration
  - Interceptors para auth y logging
  - FormData para file uploads
  - Request cancellation
  - Retry logic implementation

- **Firebase Integration**
  - Firebase project setup
  - FlutterFire installation
  - Firestore CRUD operations
  - Real-time listeners
  - Firebase Auth integration
  - Cloud Storage para files
  - Remote Config y Analytics

### Ejercicios

1. News app con Provider y HTTP
2. Chat app con BLoC y Firestore
3. Todo app con offline-first architecture

---

## **Unidad 7: Autenticación & Authentication Flows & Camera Integration**

### Objetivos de Aprendizaje

- Implementar autenticación robusta
- Crear flujos de login/registro
- Integrar funcionalidades de cámara

### Contenido Teórico

- **Authentication Patterns**

  - JWT token management
  - OAuth 2.0 flows
  - Biometric authentication
  - Social login strategies
  - Security best practices

- **Camera y Media**
  - Camera permissions
  - Image processing
  - File system access
  - Media storage strategies

### Contenido Práctico

- **Firebase Authentication**

  - Email/password registration
  - Email verification flows
  - Password reset functionality
  - Phone number authentication
  - Anonymous authentication
  - Multi-factor authentication

- **Social Login**

  - Google Sign-In integration
  - Apple Sign-In (iOS)
  - Facebook Login
  - Custom OAuth providers

- **Camera Integration**

  - camera package setup
  - Live camera preview
  - Photo capture y video recording
  - Gallery integration con image_picker
  - Image cropping y filters
  - QR code scanning

- **Biometric Auth**

  - local_auth package
  - Fingerprint y face recognition
  - Secure storage con flutter_secure_storage
  - Keychain/Keystore integration

- **Auth State Management**
  - Authentication streams
  - Auto-login functionality
  - Token refresh strategies
  - Logout y session management

### Ejercicios

1. Complete authentication system
2. Instagram-like photo sharing app
3. QR scanner con camera integration

---

## **Unidad 8: Geolocalización & Maps & Local Database (SQLite)**

### Objetivos de Aprendizaje

- Implementar servicios de localización
- Integrar mapas interactivos
- Crear bases de datos locales eficientes

### Contenido Teórico

- **Location Services**

  - GPS accuracy y battery optimization
  - Location permissions y privacy
  - Background location tracking
  - Geofencing concepts
  - Maps SDK comparison

- **Local Storage Options**
  - SQLite vs Hive vs ObjectBox
  - Database design para mobile
  - Migration strategies
  - Sync patterns con backend

### Contenido Práctico

- **Geolocalización**

  - geolocator package setup
  - Location permissions handling
  - Real-time location tracking
  - Distance calculations
  - Location accuracy settings
  - Background location service

- **Google Maps Integration**

  - google_maps_flutter setup
  - Map customization y styling
  - Markers y info windows
  - Polylines y polygons
  - Directions API integration
  - Places API y autocomplete

- **SQLite Database**

  - sqflite package implementation
  - Database schema design
  - CRUD operations
  - Complex queries y joins
  - Database versioning y migrations
  - Batch operations para performance

- **Offline Capabilities**
  - connectivity_plus para network status
  - Data synchronization patterns
  - Conflict resolution strategies
  - Queue management para offline actions

### Ejercicios

1. Location tracking app con maps
2. Places finder con search functionality
3. Offline-first notes app con SQLite

---

## **Unidad 9: Proyecto Final & Testing & Publicación**

### Objetivos de Aprendizaje

- Integrar todos los conocimientos adquiridos
- Implementar testing comprehensivo
- Preparar y publicar en app stores

### Contenido Teórico

- **Testing Strategies**

  - Unit testing vs Widget testing vs Integration testing
  - Test-driven development (TDD)
  - Mocking y stubbing
  - Code coverage importance

- **Production Readiness**

  - Performance optimization
  - Memory management
  - Battery optimization
  - Security hardening

- **Publishing Process**
  - App store guidelines
  - App signing y certificates
  - CI/CD pipelines
  - Release management

### Contenido Práctico

- **Comprehensive Testing**

  - Unit tests con test package
  - Widget tests con flutter_test
  - Integration tests con integration_test
  - Golden tests para UI consistency
  - Mock setup con mockito

- **Performance Optimization**

  - Widget rebuild optimization
  - Image loading optimization
  - List performance tuning
  - Memory leak prevention
  - Build size optimization

- **Build y Release**

  - Android: Build signed APK/AAB
  - iOS: Archive y App Store Connect
  - Fastlane automation setup
  - Code signing management
  - Release notes automation

- **Monitoring y Analytics**
  - Crashlytics integration
  - Firebase Analytics setup
  - Custom event tracking
  - Performance monitoring
  - User behavior analysis

### Proyecto Final

- **E-Commerce App Completa**
  - User authentication system
  - Product catalog con search
  - Shopping cart functionality
  - Payment integration
  - Order tracking con maps
  - Push notifications
  - Offline support
  - Admin panel features

### Testing del Proyecto

- Comprehensive test suite
- Performance benchmarks
- User acceptance testing
- Beta testing con Firebase App Distribution
- Store submission preparation

### Deployment Pipeline

- GitHub Actions setup
- Automated testing
- Build automation
- Store deployment
- Post-release monitoring

---

## Recursos Adicionales

### Herramientas de Desarrollo

- **IDEs**: VS Code con Flutter extension, Android Studio
- **Design**: Figma, Adobe XD, FlutterFlow
- **Testing**: Flutter Inspector, Dart DevTools, Firebase Test Lab
- **CI/CD**: Codemagic, GitHub Actions, Bitrise
- **Analytics**: Firebase Analytics, Mixpanel, Amplitude

### Packages Esenciales

- **State Management**: provider, bloc, riverpod, get
- **Navigation**: go_router, auto_route
- **HTTP**: dio, http, retrofit
- **Database**: sqflite, hive, objectbox
- **UI**: flutter_screenutil, cached_network_image
- **Utilities**: shared_preferences, path_provider, permission_handler

### Arquitecturas Recomendadas

- **Clean Architecture** con BLoC
- **MVVM** con Provider
- **Repository Pattern** para data layer
- **Dependency Injection** con get_it

### Mejores Prácticas

- **Code Style**: Effective Dart guidelines
- **Performance**: Widget optimization strategies
- **Security**: Secure storage, API key management
- **Accessibility**: Semantic widgets, screen readers
- **Internationalization**: Flutter i18n support

### Recursos de Aprendizaje

- Flutter Documentation oficial
- Flutter YouTube channel
- DartPad para experimentación
- Flutter samples repository
- Community packages en pub.dev
- Flutter events y conferences
