<!-- documetacion para c# WPF build.md -->

# 🧱 OPCIÓN 1: Compilar (solo .exe, requiere .NET instalado)

💡 TIP: Ejecuta esto desde la carpeta raíz del proyecto

```sh
# Ideal si tú o el usuario tienen .NET 8 ya instalado:
dotnet publish -c Release -r win-x64 --self-contained false -p:PublishSingleFile=true

# cd C:\Users\Frank\source\repos\WpfApp1\WpfApp1\bin\Release\net8.0-windows\win-x64\publish\

```

# 🧱 OPCIÓN 2: Compilar como standalone (más pesado, no requiere .NET)

```sh
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true
```

# ✅ Hacer build en modo Release desde Visual Studio

```sh
[ Debug ▼ ] → [ Release ▼ ]

# Ve al menú principal superior:
Build > Build Solution
# O simplemente presiona el atajo de teclado:
Ctrl + Shift + B

# C:\Users\Frank\source\repos\WpfApp1\WpfApp1\bin\Release\net8.0-windows\

```

# 🖼️ Agregar ícono personalizado a tu app

## 1. Preparar el archivo `.ico`

- https://cloudconvert.com/ico-converter
- Nómbralo, por ejemplo, `myicon.ico` y colócalo en la raíz del proyecto.

## 2. Agregar el ícono al proyecto

- En el **Explorador de soluciones**, haz clic derecho sobre `myicon.ico` > **Propiedades**:
  - **Build Action**: `Resource`
  - **Copy to Output Directory**: `Do not copy`

## 3. Aplicar el ícono a la ventana

Edita tu archivo `MainWindow.xaml` y agrega el atributo:

```xml
<Window ...
        Icon="myicon.ico">
```
