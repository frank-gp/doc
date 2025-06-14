```sh
# Crear un archivo .env manualmente
mkdir ~/n8n
cd ~/n8n

vim .env


N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=123456


export $(cat .env | xargs) && n8n
```

# Opción 2: Ejecutar n8n con variables en línea (sin archivo .env)

```sh
N8N_BASIC_AUTH_ACTIVE=true \
N8N_BASIC_AUTH_USER=admin \
N8N_BASIC_AUTH_PASSWORD=123456 \
n8n

```
