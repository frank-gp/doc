# Kafka vs WebSocket

## 🧩 Similitudes con WebSocket

| Característica                  | Kafka                    | WebSocket       |
| ------------------------------- | ------------------------ | --------------- |
| Comunicación asíncrona          | ✅ Sí                    | ✅ Sí           |
| Tiempo real                     | ✅ Sí (casi real-time)   | ✅ Sí           |
| Basado en mensajes              | ✅ Usa eventos (records) | ✅ Usa mensajes |
| Soporte para múltiples clientes | ✅ Sí                    | ✅ Sí           |

---

## ❗ Diferencias clave

| Característica               | Kafka                               | WebSocket                        |
| ---------------------------- | ----------------------------------- | -------------------------------- |
| **Modelo de comunicación**   | _Publicador / suscriptor_ (Pub/Sub) | _Cliente / servidor_             |
| **Persistencia de mensajes** | ✅ Mensajes persistentes (logs)     | ❌ Solo mensajes en vivo         |
| **Escalabilidad**            | 🔥 Muy alta (miles de consumidores) | 😐 Limitada a conexiones activas |
| **Tolerancia a fallos**      | ✅ Muy alta (replicación)           | ❌ No persiste si cliente cae    |
| **Historial de mensajes**    | ✅ Se puede volver a consumir       | ❌ No guarda historial           |
| **Reintentos y offsets**     | ✅ Se puede reintentar por offset   | ❌ No aplica                     |
| **Orientado a eventos**      | ✅ Nativamente                      | ❌ Debe implementarse            |

---

## 🔍 ¿Cuándo usar qué?

| Uso                                     | ¿Kafka? | ¿WebSocket? |
| --------------------------------------- | ------- | ----------- |
| Eventos distribuidos entre servicios    | ✅ Sí   | ❌ No       |
| Chat en tiempo real entre usuarios      | ❌ No   | ✅ Sí       |
| Procesamiento de datos en segundo plano | ✅ Sí   | ❌ No       |
| Notificaciones push                     | ❌ No   | ✅ Sí       |
| Alta disponibilidad y durabilidad       | ✅ Sí   | ❌ No       |
| Comunicación backend a backend          | ✅ Sí   | ❌ Parcial  |

---

## 🧠 Metáfora rápida

> **WebSocket** es como una llamada telefónica: solo funciona mientras ambas partes están conectadas.

> **Kafka** es como un contestador automático con respaldo en la nube: podés dejar mensajes, escucharlos después, reenviarlos, y todo queda registrado.
