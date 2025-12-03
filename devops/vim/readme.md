# Guía Rápida de Vim

```sh
# ✅ Reemplazar en texto
:%s/oldText/newText/g

# ✅ Método directo para borrar todo:
:%d
ggVGd

# Modo visual para seleccionar todo el contenido y eliminarlo
# gg      " ir al inicio del archivo
# V       " entrar en modo visual línea
# G       " ir al final del archivo (selecciona todo)


# Seleccionar todo el contenido
ggVG
# copiar
y
```

# 📝 Comandos Básicos de Vim

## 🧭 Navegación

| Comando | Acción                      |
| ------- | --------------------------- |
| `h`     | Mover cursor a la izquierda |
| `l`     | Mover cursor a la derecha   |
| `j`     | Mover cursor hacia abajo    |
| `k`     | Mover cursor hacia arriba   |
| `gg`    | Ir al principio del archivo |
| `G`     | Ir al final del archivo     |
| `0`     | Ir al inicio de la línea    |
| `$`     | Ir al final de la línea     |

---

## ✏️ Modo de edición

| Comando | Acción                                     |
| ------- | ------------------------------------------ |
| `i`     | Insertar antes del cursor                  |
| `a`     | Insertar después del cursor                |
| `I`     | Insertar al inicio de la línea             |
| `A`     | Insertar al final de la línea              |
| `o`     | Nueva línea debajo y entrar en modo insert |
| `O`     | Nueva línea encima y entrar en modo insert |

---

## 💾 Guardar y salir

| Comando | Acción                            |
| ------- | --------------------------------- |
| `:w`    | Guardar (write)                   |
| `:q`    | Salir (quit)                      |
| `:wq`   | Guardar y salir                   |
| `:x`    | Guardar y salir (igual que `:wq`) |
| `:q!`   | Salir sin guardar                 |
| `ZZ`    | Guardar y salir (modo rápido)     |

---

## 📋 Copiar, pegar y eliminar

| Comando    | Acción                              |
| ---------- | ----------------------------------- |
| `yy`       | Copiar línea actual ("yank")        |
| `y2y`      | Copiar 2 lineas                     |
| `p`        | Pegar después del cursor            |
| `P`        | Pegar antes del cursor              |
| `dd`       | Eliminar línea actual ("cut")       |
| `d2d`      | Eliminar 2 lineas                   |
| `x`        | Eliminar el carácter bajo el cursor |
| `u`        | Deshacer                            |
| `U`        | Deshacer todo                       |
| `Ctrl + r` | Rehacer                             |

---

## 🔍 Buscar y reemplazar

| Comando             | Acción                                   |
| ------------------- | ---------------------------------------- |
| `/texto`            | Buscar "texto" hacia abajo               |
| `?texto`            | Buscar "texto" hacia arriba              |
| `n`                 | Repetir búsqueda en la misma dirección   |
| `Shift + n`         | Repetir búsqueda en la opuesta dirección |
| `:%s/viejo/nuevo/g` | Reemplazar todo "viejo" por "nuevo"      |

---

## 👁️ Modo visual (selección)

| Comando    | Acción                                   |
| ---------- | ---------------------------------------- |
| `v`        | Iniciar selección carácter a carácter    |
| `V`        | Iniciar selección línea por línea        |
| `Ctrl + v` | Selección en bloque (modo visual bloque) |
| `y`        | Copiar selección                         |
| `d`        | Cortar selección                         |
| `p`        | Pegar selección                          |

---

## 💡 Consejos útiles

- Siempre presiona `Esc` para volver al **modo normal**.
- Usa `:help comando` para ayuda detallada dentro de Vim.

---

## ✅ Seleccionar todo el archivo

```vim
ggVG
```
