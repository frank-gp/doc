# ⚙️ Comandos `:set` en Vim

Los comandos `:set` permiten personalizar el comportamiento de Vim. Aquí tienes los más comunes y útiles:

---

## 📝 Configuración básica

| Comando               | Descripción                                         |
|-----------------------|-----------------------------------------------------|
| `:set number`         | Mostrar números de línea                            |
| `:set relativenumber` | Mostrar números relativos de línea                 |
| `:set nowrap`         | No ajustar líneas largas                           |
| `:set wrap`           | Ajustar líneas largas al ancho de la ventana        |
| `:set cursorline`     | Resalta la línea donde está el cursor               |
| `:set title`          | Muestra el nombre del archivo en la barra de título |
| `:set showcmd`        | Muestra comandos parcialmente escritos              |
| `:set showmode`       | Muestra el modo (INSERT, VISUAL, etc.)              |
| `:set ruler`          | Muestra la posición del cursor                      |
| `:set background=dark`  | Ajusta Vim para fondos oscuros (mejora colores)   |
| `:set background=light` | Ajusta Vim para fondos claros                       |

---

## ⌨️ Tabulación y espacios

| Comando                | Descripción                                       |
|------------------------|---------------------------------------------------|
| `:set tabstop=4`       | Número de espacios que representa una tabulación  |
| `:set shiftwidth=4`    | Espacios usados para la indentación automática    |
| `:set expandtab`       | Convierte tabs en espacios                        |
| `:set noexpandtab`     | Usa tabulaciones reales en vez de espacios        |
| `:set autoindent`      | Copia indentación de la línea anterior            |
| `:set smartindent`     | Indentación inteligente basada en el contexto     |

---

## 🔍 Búsqueda

| Comando             | Descripción                                         |
|---------------------|-----------------------------------------------------|
| `:set ignorecase`   | Ignora mayúsculas/minúsculas en búsquedas           |
| `:set smartcase`    | Usa mayúsculas para activar búsqueda sensible       |
| `:set hlsearch`     | Resalta todas las coincidencias                     |
| `:set incsearch`    | Muestra resultados mientras escribes                |
| `:set nohlsearch`   | Elimina resaltado de la búsqueda actual             |

---

## 💾 Archivo y comportamiento

| Comando             | Descripción                                         |
|---------------------|-----------------------------------------------------|
| `:set autochdir`    | Cambia el directorio de trabajo al del archivo      |
| `:set backup`       | Habilita archivos de respaldo                       |
| `:set noswapfile`   | Desactiva los archivos `.swp`                       |
| `:set undofile`     | Guarda historial de deshacer entre sesiones         |
| `:set confirm`      | Pregunta antes de cerrar sin guardar                |

---

## 🧪 Ver configuración activa

- Ver configuración completa actual:
  ```vim
  :set
