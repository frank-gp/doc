https://github.com/fgp555/restaurant-nextjs/settings/rules/6624565

# 🔐 Proteger la rama `main` en GitHub

## ✅ Objetivo

Evitar que los colaboradores puedan hacer `push` directo a la rama `main` y forzar que todo cambio pase por un Pull Request aprobado.

---

## 🛠️ Pasos para proteger la rama `main`

1. Ir a la pestaña **Settings** de tu repositorio.
2. En el menú lateral, seleccionar **Rulesets** (dentro de "Code and automation").
3. Hacer clic en **“New branch ruleset”**.

---

## 🧾 Configuración recomendada

### 1. **Ruleset name**

```
Protege rama main
```

### 2. **Activar el ruleset**

✅ Activar el switch `Active`

### 3. **Bypass list**

- Dejar vacío (nadie puede saltarse la regla)
- O agregar tu usuario si necesitas control total

### 4. **Target branches**

Agregar una regla de patrón:

```
main
```

---

## ✅ Reglas recomendadas para activar

| Opción                                   | Descripción                                    |
| ---------------------------------------- | ---------------------------------------------- |
| ✅ Restrict updates                      | Impide hacer push directo                      |
| ✅ Restrict deletions                    | Impide borrar la rama                          |
| ✅ Require a pull request before merging | Obliga a usar PR antes de fusionar             |
| ✅ Require approvals (1)                 | Requiere al menos 1 aprobación antes del merge |
| ✅ Block force pushes                    | Impide sobrescribir la historia con `--force`  |

---

## ⚠️ Sección: "Require status checks to pass"

GitHub mostrará:

> ❌ **No required checks**  
> _"No checks have been added"_

Esto significa que no tienes workflows de CI configurados aún (como GitHub Actions). Por lo tanto:

- **NO marques** estas opciones si no usas CI/CD:
  - `Require status checks to pass`
  - `Require branches to be up to date before merging`

Estas opciones **solo funcionan si tienes al menos un status check activo**.

---

## 🧪 (Opcional) ¿Cómo activar status checks?

Si deseas exigir que el código pase pruebas antes de hacer merge:

1. Agrega un archivo `.github/workflows/test.yml` como este ejemplo para Node.js:

```yaml
name: Pruebas

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Node.js setup
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

2. Una vez que se ejecute, el nombre del check aparecerá en el ruleset y podrás activarlo desde la interfaz de GitHub.

---

## ✅ Recomendación mínima para colaboración segura

Con las siguientes reglas ya tienes buena protección sin necesidad de status checks:

- `Require a pull request before merging`
- `Require approvals`
- `Restrict updates`
- `Restrict deletions`
- `Block force pushes`

---

## 📌 Notas

- Estas reglas también se pueden aplicar a otras ramas críticas (`dev`, `release`, etc.).
- Se recomienda documentar en el `README.md` que todos los colaboradores deben crear ramas y hacer Pull Requests para modificar `main`.
