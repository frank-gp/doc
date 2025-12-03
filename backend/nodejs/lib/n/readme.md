
# 📦 `n` - Node.js Version Manager

`n` es un sencillo pero potente gestor de versiones de Node.js escrito en JavaScript. Permite instalar y cambiar entre múltiples versiones de Node.js de forma rápida.

---

## ✅ Requisitos

- Tener Node.js y npm instalados (incluso una versión antigua)
- Tener permisos de superusuario (sudo) para instalaciones globales

---

## 🚀 Instalación

```bash
sudo npm install -g n
```

Esto instalará el comando `n` globalmente.

---

## 🧪 Comandos principales

### Instalar y activar una versión específica

```bash
sudo n 20.15.0
```

### Instalar y activar la última versión LTS

```bash
sudo n lts
```

### Instalar y activar la última versión estable (latest)

```bash
sudo n latest
```

### Ver las versiones instaladas y cambiar entre ellas

```bash
sudo n
```

> Abre un menú interactivo en la terminal (usa flechas y Enter)

### Ver la versión activa de Node

```bash
node -v
```

---

## 📂 Ubicación de versiones instaladas

- Las versiones se almacenan en:

  ```
  /usr/local/n/versions/node/
  ```

- Los ejecutables (`node`, `npm`) están en:

  ```
  /usr/local/bin/
  ```

---

## 🧹 Eliminar versiones manualmente

Puedes borrar versiones antiguas eliminando sus carpetas:

```bash
sudo rm -rf /usr/local/n/versions/node/vXX.XX.X
```

---

## 🔄 Cambiar de versión en scripts o terminal

```bash
sudo n 18.20.0    # Cambia globalmente a v18.20.0
```

---

## 🤔 `n` vs `nvm`

| Característica         | `n`                    | `nvm`                     |
|------------------------|------------------------|---------------------------|
| Instalación global     | ✅ Sí                  | ❌ No                     |
| Simplicidad            | ✅ Muy simple          | ⚠️ Más compleja            |
| Por usuario            | ❌ No                  | ✅ Sí                     |
| Interfaz interactiva   | ✅ Sí (`n`)            | ❌ No (sólo comandos)     |

---

## 🔗 Recursos oficiales

- GitHub: [https://github.com/tj/n](https://github.com/tj/n)

---

## 🛠️ Tips

- Usa `sudo n` para evitar errores de permisos
- Después de instalar una nueva versión, cierra y vuelve a abrir tu terminal
- Puedes usar `n lts` o `n latest` para mantenerte actualizado
