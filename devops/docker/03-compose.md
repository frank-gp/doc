## 🐳 Docker Compose

### Comandos Docker Compose

```bash
# Start services defined in docker-compose.yml
docker compose up

# Start in background
docker compose up -d

# Stop and remove containers
docker compose down

# Use specific compose file
docker compose -f docker-compose-dev.yml up

# Rebuild images
docker compose build

# View logs from all services
docker compose logs

# Scale services
docker compose up --scale web=3
```

### Ejemplo docker-compose.yml

```yaml
version: "3.8"

services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - NODE_ENV=development
    networks:
      - app-network

  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: postgres_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  postgres_data:
```
