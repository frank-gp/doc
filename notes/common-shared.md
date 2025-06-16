# Diferencia entre `common/` y `shared/` en Arquitectura de Aplicaciones

En el contexto de arquitectura de aplicaciones (por ejemplo, en **NestJS**), los directorios `common/` y `shared/` tienen propósitos **relacionados pero distintos**. Aunque a veces se usan indistintamente, su correcta separación mejora la organización, mantenibilidad y escalabilidad del código.

---

## 📁 `common/`

Contiene **código fundamental y universal** para el funcionamiento de toda la aplicación.

### Características:

- Necesario para que la aplicación funcione correctamente.
- Código que rara vez cambia.
- Generalmente no depende de módulos específicos.

### Contenido típico:

- Middlewares globales
- Excepciones base (por ejemplo, `HttpExceptionFilter`)
- Utilidades core
- Interceptores
- Decoradores
- Guardias globales
- Pipes globales

---

## 📁 `shared/`

Contiene **código reutilizable pero no esencial** para el núcleo de la aplicación.

### Características:

- Compartido entre múltiples módulos.
- Puede cambiar con mayor frecuencia.
- No es crítico para el arranque o funcionamiento base.

### Contenido típico:

- Componentes reutilizables (UI en frontend)
- Utilidades auxiliares (helpers)
- DTOs compartidos
- Interfaces y tipos comunes
- Servicios genéricos reutilizables

---

## 📌 En NestJS

- `common/`: Código **central y obligatorio** para la app (ej. filtros globales, decoradores universales).
- `shared/`: Código **útil y reutilizable**, pero que no afecta al núcleo si se elimina o modifica.

---

## 🎯 ¿Cómo decidir dónde poner algo?

| Criterio                              | `common/`   | `shared/`                     |
| ------------------------------------- | ----------- | ----------------------------- |
| **¿Es esencial para la app?**         | ✅ Sí       | ❌ No                         |
| **¿Lo usan todos los módulos?**       | ✅ Sí       | ✅/❌ A veces                 |
| **¿Depende de un módulo específico?** | ❌ No       | ✅ Puede depender             |
| **¿Cambia con frecuencia?**           | ❌ Rara vez | ✅ Es más probable que cambie |

---

## ✅ Recomendación

Mantén `common/` **estable y minimalista**, y usa `shared/` para todo lo que se **pueda reutilizar pero no sea crítico**. Esto te ayudará a mantener una arquitectura **limpia y escalable**.
