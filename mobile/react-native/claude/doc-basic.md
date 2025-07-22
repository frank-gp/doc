# Documentación Básica de React Native con Expo

## Introducción

React Native es un framework de desarrollo móvil que permite crear aplicaciones nativas para iOS y Android utilizando JavaScript y React. Expo es una plataforma y conjunto de herramientas que simplifica enormemente el desarrollo con React Native.

## ¿Qué es Expo?

Expo es una plataforma que facilita el desarrollo, construcción y despliegue de aplicaciones React Native. Proporciona:

- Un SDK con APIs nativas pre-configuradas
- Herramientas de desarrollo sin necesidad de configuración compleja
- Un cliente para probar aplicaciones en dispositivos reales
- Servicios de construcción y publicación

## Configuración del Entorno

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Expo CLI
- Dispositivo móvil o emulador

### Instalación

```bash
# Instalar Expo CLI globalmente
npm install -g @expo/cli

# Crear un nuevo proyecto
npx create-expo-app MiApp

# Navegar al directorio del proyecto
cd MiApp

# Iniciar el servidor de desarrollo
npx expo start
```

## Estructura del Proyecto

```
MiApp/
├── App.js              # Componente principal
├── app.json           # Configuración de la app
├── package.json       # Dependencias
├── assets/            # Imágenes, iconos, fuentes
├── components/        # Componentes reutilizables
└── screens/          # Pantallas de la aplicación
```

## Conceptos Fundamentales

### Componentes Básicos

React Native utiliza componentes específicos para móviles en lugar de elementos HTML:

```javascript
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola React Native!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Presiona aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
```

### Componentes Principales

| Componente         | Descripción       | Equivalente Web    |
| ------------------ | ----------------- | ------------------ |
| `View`             | Contenedor básico | `div`              |
| `Text`             | Mostrar texto     | `p`, `span`        |
| `ScrollView`       | Área desplazable  | `div` con overflow |
| `Image`            | Mostrar imágenes  | `img`              |
| `TouchableOpacity` | Botón táctil      | `button`           |
| `TextInput`        | Campo de entrada  | `input`            |
| `FlatList`         | Lista eficiente   | Lista virtual      |

## Estilos en React Native

### StyleSheet

```javascript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
  },
});
```

### Flexbox

React Native utiliza Flexbox para el layout:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // 'row' para horizontal
    justifyContent: "center", // alineación principal
    alignItems: "center", // alineación cruzada
  },
  item: {
    flex: 1, // toma espacio disponible
    margin: 10,
  },
});
```

## Navegación

Para navegación entre pantallas, se utiliza React Navigation:

```bash
# Instalar React Navigation
npm install @react-navigation/native @react-navigation/stack

# Dependencias para Expo
npx expo install react-native-screens react-native-safe-area-context
```

### Ejemplo de Navegación

```javascript
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ir a Detalles" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pantalla de Detalles</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Estado y Hooks

### useState

```javascript
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handlePress = () => {
    setDisplayText(text);
    setText("");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        value={text}
        onChangeText={setText}
        placeholder="Escribe algo..."
      />
      <Button title="Mostrar" onPress={handlePress} />
      <Text style={{ marginTop: 20, fontSize: 18 }}>{displayText}</Text>
    </View>
  );
}
```

### useEffect

```javascript
import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.title}</Text>
      <Text style={{ marginTop: 10 }}>{data.body}</Text>
    </View>
  );
}
```

## APIs de Expo

### Cámara y Galería

```javascript
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View, Button, Image } from "react-native";

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Seleccionar imagen" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
```

### Notificaciones

```javascript
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  const registerForPushNotificationsAsync = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Se necesitan permisos para notificaciones");
      return;
    }
  };

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Mi notificación",
        body: "Este es el contenido de la notificación",
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Programar notificación" onPress={scheduleNotification} />
    </View>
  );
}
```

## Gestión del Estado Global

### Context API

```javascript
import React, { createContext, useContext, useReducer } from "react";

// Crear contexto
const AppContext = createContext();

// Reducer
const initialState = { user: null, theme: "light" };

function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

// Provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

// Hook personalizado
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context;
}
```

## Construcción y Despliegue

### Configuración en app.json

```json
{
  "expo": {
    "name": "Mi App",
    "slug": "mi-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "platforms": ["ios", "android"],
    "ios": {
      "bundleIdentifier": "com.miempresa.miapp"
    },
    "android": {
      "package": "com.miempresa.miapp"
    }
  }
}
```

### Comandos de Construcción

```bash
# Construcción para desarrollo
npx expo start

# Construcción para producción
npx expo build:android
npx expo build:ios

# Publicar en Expo
npx expo publish
```

## Debugging y Testing

### Console.log y Flipper

```javascript
// Para debugging básico
console.log("Información de debug:", data);
console.warn("Advertencia");
console.error("Error");

// Para objetos complejos
console.log("Estado actual:", JSON.stringify(state, null, 2));
```

### React Native Debugger

1. Instalar React Native Debugger
2. Ejecutar la aplicación
3. Sacudir el dispositivo y seleccionar "Debug"

## Mejores Prácticas

### Organización del Código

```
src/
├── components/
│   ├── common/        # Componentes reutilizables
│   └── screens/       # Componentes de pantalla
├── navigation/        # Configuración de navegación
├── services/         # APIs y servicios externos
├── utils/            # Funciones utilitarias
├── hooks/            # Hooks personalizados
└── constants/        # Constantes de la aplicación
```

### Optimización de Performance

- Usa `FlatList` en lugar de `ScrollView` para listas largas
- Implementa `PureComponent` o `memo` para componentes que no cambian frecuentemente
- Optimiza imágenes y usa formatos apropiados
- Evita operaciones pesadas en el hilo principal

### Seguridad

- No hardcodees claves API en el código
- Usa variables de entorno para información sensible
- Valida datos de entrada
- Implementa autenticación segura

## Recursos Adicionales

### Documentación Oficial

- [React Native](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

### Herramientas Útiles

- **Expo Snack**: Editor online para prototipar
- **React Native Elements**: Biblioteca de componentes UI
- **NativeBase**: Framework de componentes nativos
- **React Hook Form**: Gestión de formularios

### Comunidad

- Stack Overflow con tag `react-native`
- Reddit: r/reactnative
- Discord de React Native Community

## Conclusión

React Native con Expo proporciona una excelente plataforma para el desarrollo de aplicaciones móviles multiplataforma. Esta documentación cubre los conceptos fundamentales, pero el ecosistema es muy amplio y en constante evolución. Te recomendamos explorar la documentación oficial y practicar con proyectos pequeños para dominar estas tecnologías.

¡Feliz desarrollo!
