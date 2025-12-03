# ⚠️ ¿Qué es un .SNAPSHOT realmente?

Un SNAPSHOT en Maven es una versión en desarrollo que puede cambiar en cualquier momento, aunque mantenga el mismo nombre.

| Característica        | `1.0.0-SNAPSHOT` (desarrollo) | `1.0.0` (versión final) |
| --------------------- | ----------------------------- | ----------------------- |
| Cambia con frecuencia | Sí                            | No                      |
| Estabilidad           | Baja                          | Alta                    |
| Cache en Maven        | No (descarga cada vez)        | Sí                      |
| Uso en producción     | **No recomendado**            | **Sí**                  |
| Firma o checksum      | Rara vez                      | Casi siempre            |

❌ Problemas de usar SNAPSHOT en producción

- Actualizaciones inesperadas: si usas dependencias SNAPSHOT, Maven puede traerte una versión nueva sin que te des cuenta.
- Difícil de depurar: no sabrás exactamente qué código está en producción.
- No es reproducible: otro desarrollador podría construir el mismo .jar con código diferente.
- Puede contener código no probado o inestable.
