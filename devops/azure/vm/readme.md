```sh
ssh -i my-key-pair.pem azureuser@4.206.156.44

# generar la clave pública desde la privada
ssh-keygen -y -f my-key-pair.pem
ssh-keygen -y -f my-key-pair.pem > my-key.pub

```

# ☁️ Configuración de VM en Azure (Free Tier)

## 📌 Información general

- **Nombre de la VM**: `vm-tutorial-02`
- **Región**: `Canada Central`
- **Grupo de recursos**: `rg-tutorial-02`
- **Sistema operativo**: `Ubuntu Server 22.04 LTS (Gen2)`
- **Arquitectura**: `x64`
- **Nombre de usuario**: `azureuser`
- **Autenticación**: Clave SSH (`my-key-pair.pem`)
- **Tipo de clave**: RSA (formato .pem)
- **IP pública**: `4.206.156.44` (estática, SKU Standard)
- **IP privada**: `10.0.0.4`

---

## ⚙️ Tamaño de máquina virtual

- **Tipo**: `Standard B1s` ✅ _(Free Tier eligible)_
- **CPU**: 1 vCPU
- **RAM**: 1 GiB
- **Precio por hora**: `~$0.0116 USD` _(no aplica si no superas 750h/mes)_

---

## 💾 Discos

- **Tipo de disco OS**: Premium SSD LRS
- **Tamaño de disco OS**: `30 GiB` _(dentro del límite gratuito de 64 GiB)_
- **Discos gestionados**: ✅ Sí
- **Borrar disco con la VM**: ✅ Activado

---

## 🔐 Seguridad y red

- **Puerto SSH (22)**: Abierto a internet (⚠️ recomendado restringir por IP)
- **Puertos adicionales abiertos**: HTTP (80), HTTPS (443)
- **Aceleración de red**: ❌ Desactivado
- **Tipo de seguridad**: Standard
- **Eliminar IP pública y NIC con la VM**: ✅ Sí
- **Balanceo de carga**: ❌ Ninguno

---

## 🧩 Otras opciones

- **Auto-shutdown**: ❌ Desactivado _(recomendado para ahorrar tiempo si no necesitas 24/7)_
- **Microsoft Defender for Cloud**: ❌ Desactivado
- **Identidad gestionada**: ❌ Desactivado
- **Hotpatch / Guest diagnostics / WAF / Bastion**: ❌ No habilitados

---

## 🗂️ Archivos relacionados

- `my-key-pair.pem`: clave privada SSH para acceso seguro

---

## ✅ Free Tier Checklist

| Recurso                          | Estado       | Comentario                  |
| -------------------------------- | ------------ | --------------------------- |
| VM B1s                           | ✅ OK        | Incluida en Free Tier       |
| Disco < 64 GiB                   | ✅ OK        | Usas 30 GiB                 |
| IP pública SKU Standard          | ✅ OK        | Hasta 5 permitidas          |
| Defender, Bastion, Load Balancer | ❌ NO USADO  | No hay cargos ocultos       |
| Auto-shutdown                    | ❌ No activo | Recomendado si no usas 24/7 |

---

## 🧠 Recomendación adicional

- ✅ Restringe el puerto 22 solo a tu IP pública
- ✅ Haz backup de `my-key-pair.pem`
- ✅ Activa Auto-shutdown si solo usas tu VM por horas

---

📅 **Última actualización**: 2025-06-22
