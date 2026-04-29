# Backend COLOBRAS

API para recibir mensajes del formulario de contacto y enviarlos al correo de la empresa.

## Scripts

```bash
npm run dev
npm start
```

## Endpoints

- `GET /`: verifica que el backend está funcionando.
- `POST /api/contact`: recibe `name`, `email`, `phone` y `message`.

## Variables de entorno

Copia `.env.example` como `.env` y configura las credenciales SMTP reales.

No subas el archivo `.env` al repositorio.
