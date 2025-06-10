# PEP 8: La Guía de Estilo Oficial de Python

**PEP 8** (Python Enhancement Proposal 8) es la **guía de estilo oficial para el código Python**. Es un documento que proporciona un conjunto de convenciones y recomendaciones para escribir código Python de manera consistente, legible y fácil de mantener.

---

### ¿Por qué es importante PEP 8?

Aunque seguir PEP 8 no es obligatorio para que el código funcione, es **altamente recomendable** por varias razones clave:

1.  **Legibilidad:** La razón principal detrás de PEP 8 es la legibilidad. Un código consistente y bien formateado es más fácil de entender por ti mismo en el futuro y, crucialmente, por otros desarrolladores que trabajen en tu proyecto.
2.  **Consistencia:** Asegura que todo el código en un proyecto tenga un aspecto similar, sin importar quién lo haya escrito, lo que reduce la fricción y el tiempo dedicado a entender diferentes estilos.
3.  **Mantenimiento:** El código legible y consistente es más fácil de depurar, modificar y extender.
4.  **Colaboración:** Facilita la colaboración en proyectos de código abierto y equipos de desarrollo.
5.  **Profesionalismo:** Seguir estándares demuestra profesionalismo y cuidado en tu trabajo como desarrollador.

---

### Puntos Clave y Recomendaciones de PEP 8

PEP 8 cubre muchos aspectos del estilo de codificación. Aquí tienes algunas de las recomendaciones más importantes:

- **Indentación:**

  - Usa **4 espacios** por nivel de indentación.
  - **Nunca uses tabulaciones** (o al menos, no las mezcles con espacios).

- **Longitud Máxima de Línea:**

  - Limita todas las líneas a un **máximo de 79 caracteres**.
  - Si una línea es demasiado larga, divídela utilizando paréntesis, corchetes o llaves para la continuación implícita de líneas.

- **Líneas en Blanco:**

  - Separa las definiciones de **clases y funciones** con **dos líneas en blanco**.
  - Separa los **métodos dentro de una clase** con **una línea en blanco**.
  - Usa líneas en blanco para separar secciones lógicas dentro del código.

- **Importaciones (`import`):**

  - Deben ir **siempre al principio del archivo**, después de los comentarios a nivel de módulo y la documentación (`docstring`).
  - Cada importación debe estar en una **línea separada**.
  - Agrupa las importaciones en el siguiente orden, separadas por una línea en blanco entre cada grupo:
    1.  Módulos de la librería estándar de Python.
    2.  Módulos de terceros.
    3.  Módulos locales de tu propia aplicación.
  - Evita las importaciones con `*` (`from modulo import *`).

- **Espacios en Blanco:**

  - Usa un **único espacio a cada lado de los operadores binarios** (`=`, `+`, `-`, `*`, `/`, `==`, `>`, `<`, `and`, `or`, etc.).
    ```python
    x = y + z # Correcto
    x=y+z     # Incorrecto
    ```
  - No uses espacios inmediatamente dentro de paréntesis, corchetes o llaves.
    ```python
    mi_lista = [1, 2, 3] # Correcto
    mi_lista = [ 1, 2, 3 ] # Incorrecto
    ```
  - No uses espacios al final de las líneas (trailing whitespace).

- **Convenciones de Nomenclatura:**

  - **Módulos y paquetes:** `snake_case` (todo en minúsculas, guiones bajos) (ej., `mi_modulo`).
  - **Clases:** `CamelCase` (ej., `MiClase`, `Persona`).
  - **Funciones y variables:** `snake_case` (ej., `mi_funcion`, `nombre_de_variable`).
  - **Constantes:** `ALL_CAPS` (ej., `MAX_ATTEMPTS`).
  - **Argumentos de métodos de instancia:** El primer argumento debe ser `self`.
  - **Argumentos de métodos de clase:** El primer argumento debe ser `cls`.
  - **Nombres a evitar:** No uses `l` minúscula, `O` mayúscula o `I` mayúscula como nombres de variables individuales.

- **Comentarios y Docstrings:**
  - Usa `docstrings` (cadenas de documentación con triples comillas) para describir módulos, clases y funciones.
  - Los comentarios de línea (`#`) deben explicar el "por qué" del código.

---

### Herramientas para cumplir con PEP 8

Existen herramientas que te ayudan a verificar y formatear tu código automáticamente:

- **`flake8`**: Combina verificaciones de errores lógicos y estilo (PEP 8).
- **`autopep8`**: Corrige automáticamente muchas infracciones de PEP 8.
- **`Black`**: Un formateador de código "sin concesiones" que aplica un estilo consistente automáticamente.
- **Extensiones de IDE/Editores de Código:** Muchos entornos de desarrollo integrados (IDE) y editores de código tienen integraciones que resaltan las infracciones de PEP 8 y ofrecen soluciones.

---

En resumen, PEP 8 es la piedra angular del estilo de codificación en Python. Adoptarlo no solo mejora la calidad de tu código, sino que también te integra mejor en la comunidad Python, donde la legibilidad y la consistencia son valores muy apreciados.
