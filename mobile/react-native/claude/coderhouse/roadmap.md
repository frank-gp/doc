# Curso Completo de React Native - Contenido Detallado

## **Unidad 1: Iniciando con React Native & Trabajando con el Emulador**

### Objetivos de Aprendizaje

- Comprender qué es React Native y sus ventajas
- Configurar el entorno de desarrollo
- Crear tu primera aplicación
- Configurar y usar emuladores

### Contenido Teórico

- **¿Qué es React Native?**

  - Diferencias entre React Native, React y desarrollo nativo
  - Ventajas y desventajas
  - Arquitectura de React Native
  - Casos de éxito en la industria

- **Configuración del Entorno**
  - Instalación de Node.js y npm/yarn
  - Configuración de React Native CLI vs Expo CLI
  - Configuración de Android Studio y Xcode
  - Variables de entorno necesarias

### Contenido Práctico

- **Primera Aplicación**

  - Crear proyecto con `npx react-native init`
  - Estructura de carpetas del proyecto
  - Archivos principales: App.js, index.js
  - Ejecutar la aplicación

- **Trabajando con Emuladores**
  - Configuración del emulador Android (AVD Manager)
  - Configuración del simulador iOS
  - Debugging básico
  - Hot Reload y Fast Refresh
  - Uso de dispositivos físicos

### Ejercicios

1. Crear una aplicación "Hola Mundo" personalizada
2. Modificar el texto y estilos básicos
3. Ejecutar la app en diferentes emuladores

---

## **Unidad 2: Core Components & Eventos & Lista Optimizada**

### Objetivos de Aprendizaje

- Dominar los componentes básicos de React Native
- Manejar eventos de usuario
- Implementar listas eficientes

### Contenido Teórico

- **Core Components Esenciales**

  - View: El contenedor básico
  - Text: Manejo de texto
  - Image: Mostrar imágenes locales y remotas
  - ScrollView vs FlatList
  - TextInput: Entrada de datos
  - TouchableOpacity, TouchableHighlight, Pressable

- **Sistema de Eventos**
  - Eventos táctiles (onPress, onLongPress)
  - Eventos de cambio de texto
  - Eventos de scroll
  - Gestores de eventos personalizados

### Contenido Práctico

- **Implementación de Components**

  - Crear interfaces básicas con View y Text
  - Mostrar imágenes desde assets y URLs
  - Formularios básicos con TextInput
  - Botones interactivos

- **Listas Optimizadas**
  - FlatList para listas grandes
  - Propiedades de rendimiento: keyExtractor, getItemLayout
  - SectionList para listas agrupadas
  - Pull to refresh y paginación
  - VirtualizedList para casos avanzados

### Ejercicios

1. Crear una lista de contactos con FlatList
2. Implementar un formulario de registro
3. Galería de imágenes con ScrollView horizontal

---

## **Unidad 3: Debug & Split Components & Estilos, Props y Constantes**

### Objetivos de Aprendizaje

- Dominar técnicas de debugging
- Crear componentes reutilizables
- Implementar sistemas de estilos eficientes

### Contenido Teórico

- **Debugging Avanzado**

  - React Native Debugger
  - Chrome DevTools
  - Console.log vs debugging tools
  - Flipper para debugging
  - Error boundaries

- **Arquitectura de Componentes**
  - Principios de componentes reutilizables
  - Props y PropTypes
  - Composición vs herencia
  - Patrones de diseño comunes

### Contenido Práctico

- **Debugging**

  - Configurar herramientas de debug
  - Inspección de elementos
  - Performance monitoring
  - Network debugging

- **Sistema de Estilos**

  - StyleSheet.create()
  - Estilos inline vs separados
  - Flexbox en React Native
  - Estilos condicionales
  - Constantes de diseño y tema
  - Responsive design basics

- **Component Architecture**
  - Dividir componentes grandes
  - Crear biblioteca de componentes
  - Manejo de props y default values
  - Higher-Order Components (HOC)

### Ejercicios

1. Crear un sistema de componentes UI reutilizables
2. Implementar tema de colores y constantes de diseño
3. Debug de una aplicación con errores intencionados

---

## **Unidad 4: Switch entre Pantallas, Fonts & Elementos Externos & Responsividad & Reglas**

### Objetivos de Aprendizaje

- Implementar navegación básica entre pantallas
- Personalizar tipografías
- Crear interfaces responsivas

### Contenido Teórico

- **Navegación Básica**

  - Concepto de Stack Navigation
  - Pasar datos entre pantallas
  - Navegación programática
  - Lifecycle de pantallas

- **Tipografías y Assets**
  - Instalación de fuentes personalizadas
  - Font weights y styles
  - Iconos y assets externos
  - Optimización de recursos

### Contenido Práctico

- **Implementación de Navegación**

  - React Navigation setup básico
  - Stack Navigator
  - Pasar parámetros entre pantallas
  - Headers personalizados

- **Responsive Design**

  - Dimensions API
  - Flexbox avanzado
  - Orientación de pantalla
  - Safe Area Context
  - Breakpoints para tablets

- **Fuentes e Iconos**
  - Instalar fuentes custom (iOS/Android)
  - React Native Vector Icons
  - Optimización de imágenes
  - SVG support

### Ejercicios

1. App multi-pantalla con navegación
2. Implementar fuentes custom e iconos
3. Interface responsive para móvil y tablet

---

## **Unidad 5: Pantallas & Navegación Base & Tab Navigation**

### Objetivos de Aprendizaje

- Dominar React Navigation
- Implementar navegación por pestañas
- Crear flujos de navegación complejos

### Contenido Teórico

- **React Navigation Avanzado**

  - Stack, Tab y Drawer Navigation
  - Nested Navigators
  - Navigation lifecycle
  - Deep linking basics

- **UX/UI de Navegación**
  - Patrones de navegación móvil
  - Tab bar personalizada
  - Indicadores de navegación
  - Animaciones de transición

### Contenido Práctico

- **Tab Navigation**

  - Bottom Tab Navigator
  - Top Tab Navigator (Material)
  - Tab bar personalizada
  - Badge notifications
  - Iconos y estilos de tabs

- **Stack Navigation Avanzado**

  - Modal presentation
  - Header personalizados
  - Screen options dinámicas
  - Navigation guards

- **Drawer Navigation**
  - Side menu implementation
  - Custom drawer content
  - Drawer combined with tabs

### Ejercicios

1. App con tabs, stack y drawer navigation
2. Personalizar completamente la navegación
3. Implementar deep linking básico

---

## **Unidad 6: State & Redux & HTTP & Firebase**

### Objetivos de Aprendizaje

- Manejar estado global con Redux
- Realizar peticiones HTTP
- Integrar Firebase como backend

### Contenido Teórico

- **State Management**

  - Local state vs Global state
  - Context API vs Redux
  - Redux Toolkit moderno
  - Async actions con Redux Thunk

- **HTTP y APIs**
  - Fetch API vs Axios
  - Manejo de errores de red
  - Caching y offline strategies
  - Authentication headers

### Contenido Práctico

- **Redux Implementation**

  - Store setup con Redux Toolkit
  - Slices y reducers
  - Async thunks
  - DevTools integration

- **HTTP Requests**

  - GET, POST, PUT, DELETE operations
  - Error handling y loading states
  - Interceptors y middleware
  - Offline data management

- **Firebase Integration**
  - Firebase setup para React Native
  - Firestore database operations
  - Real-time listeners
  - Firebase Authentication basics
  - Cloud Functions integration

### Ejercicios

1. Todo app con Redux y API REST
2. Chat app con Firebase Firestore
3. Manejo completo de estados de carga y error

---

## **Unidad 7: Login & Autenticación & Device Features: Cámara**

### Objetivos de Aprendizaje

- Implementar sistemas de autenticación
- Usar características del dispositivo
- Manejar permisos y seguridad

### Contenido Teórico

- **Autenticación**

  - JWT tokens y refresh tokens
  - OAuth y social login
  - Biometric authentication
  - Security best practices
  - Secure storage

- **Device Features**
  - Permissions system
  - Camera API
  - Image processing
  - File system access

### Contenido Práctico

- **Sistema de Login**

  - Forms con validación
  - Firebase Authentication
  - Social login (Google, Facebook)
  - Biometric login
  - Logout y session management

- **Camera Integration**

  - react-native-image-picker
  - Camera permissions
  - Image capture y gallery
  - Image upload to server/Firebase
  - Image processing básico

- **Security**
  - Keychain/Keystore storage
  - Token refresh strategies
  - API security
  - Data encryption basics

### Ejercicios

1. App completa de autenticación
2. Photo sharing app con cámara
3. Profile management con imagen

---

## **Unidad 8: Device Features: Location & Device Features: SQLite**

### Objetivos de Aprendizaje

- Trabajar con geolocalización
- Implementar base de datos local
- Crear apps que funcionen offline

### Contenido Teórico

- **Geolocalización**

  - GPS y location services
  - Maps integration
  - Geofencing
  - Location permissions y privacy

- **Local Database**
  - SQLite vs Realm vs AsyncStorage
  - Database design para mobile
  - Migrations y versioning
  - Sync strategies

### Contenido Práctico

- **Location Services**

  - @react-native-community/geolocation
  - Real-time location tracking
  - React Native Maps
  - Markers, regions y overlays
  - Directions API integration

- **SQLite Implementation**

  - react-native-sqlite-storage
  - Database setup y migrations
  - CRUD operations
  - Complex queries
  - Offline-first architecture

- **Offline Capabilities**
  - NetInfo para detectar conectividad
  - Queue de operaciones offline
  - Sync con servidor
  - Conflict resolution

### Ejercicios

1. Location tracking app con mapa
2. Notes app con SQLite
3. Offline-first task manager

---

## **Unidad 9: Workshop & Publicación**

### Objetivos de Aprendizaje

- Integrar todos los conocimientos
- Preparar app para producción
- Publicar en app stores

### Contenido Teórico

- **Production Ready**

  - Code splitting y optimization
  - Bundle analysis
  - Performance monitoring
  - Crash reporting
  - Analytics integration

- **App Store Guidelines**
  - iOS App Store requirements
  - Google Play Store requirements
  - App signing y certificates
  - Store listing optimization

### Contenido Práctico

- **Workshop Project**

  - Planificación de app completa
  - Implementación por features
  - Testing integration
  - Code review process

- **Build y Deploy**

  - Android: Generate signed APK/Bundle
  - iOS: Archive y provisioning profiles
  - Fastlane automation
  - CI/CD basics con GitHub Actions

- **Store Submission**

  - App metadata y screenshots
  - Store descriptions
  - Privacy policy y legal requirements
  - Beta testing con TestFlight/Internal Testing
  - Production release process

- **Post-Launch**
  - Monitoring y analytics
  - User feedback management
  - Update strategies
  - A/B testing basics

### Workshop Final

- **Proyecto Capstone**
  - App completa con todas las características
  - Backend integration
  - UI/UX pulido
  - Testing completo
  - Documentation
  - Store submission

### Ejercicios Finales

1. Completar y optimizar proyecto workshop
2. Preparar assets para store submission
3. Implementar analytics y monitoring
4. Presentación final del proyecto

---

## Recursos Adicionales

### Herramientas Recomendadas

- **Development**: VS Code, React Native Debugger, Flipper
- **Design**: Figma, Sketch, Adobe XD
- **Testing**: Jest, Detox, Maestro
- **Analytics**: Firebase Analytics, Mixpanel
- **Crash Reporting**: Crashlytics, Bugsnag
- **CI/CD**: Fastlane, CodePush, GitHub Actions

### Librerías Importantes

- **Navigation**: @react-navigation/native
- **State**: @reduxjs/toolkit, react-redux
- **HTTP**: axios, @tanstack/react-query
- **UI**: react-native-elements, NativeBase
- **Forms**: react-hook-form, formik
- **Animations**: react-native-reanimated, lottie-react-native

### Lecturas y Referencias

- Documentación oficial de React Native
- React Navigation docs
- Redux Toolkit documentation
- Firebase for React Native guides
- iOS Human Interface Guidelines
- Material Design Guidelines
