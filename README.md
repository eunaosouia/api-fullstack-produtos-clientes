# Fullstack Products & Clients API

A modern RESTful API for managing products and clients, built with Node.js, Express, and SQLite. Includes Swagger documentation for easy testing and exploration.

## Features
- CRUD operations for products and clients
- SQLite database
- Modular controllers and routes
- Swagger (OpenAPI) documentation
- Nodemon for development

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/api-fullstack-produtos-clientes.git
cd api-fullstack-produtos-clientes
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Database Migration
This will create the SQLite database and tables.
```bash
npm run migrate
```

### 4. Start the API (Development)
```bash
npm run dev
```

The server will start on `http://localhost:3000`.

---

## API Endpoints

### Products
- `POST /produtos` — Create a new product
- `GET /produtos` — List all products and search them by name
- `GET /produtos/:id` — Get product by ID

### Clients
- `POST /clientes` — Create a new client
- `GET /clientes` — List all clients
- `GET /clientes/:id` — Get client by ID

---

## Testing with Swagger

1. Access Swagger UI at:
   - `http://localhost:3000/api-docs`
2. Explore and test all endpoints directly from the browser.

---

## Project Structure
```
├── src
│   ├── controllers
│   │   ├── produtosController.js
│   │   └── clientesController.js
│   ├── database
│   │   ├── connection.js
│   │   └── migrate.js
│   ├── routes
│   │   └── index.js
│   └── server.js
├── package.json
└── README.md
```

---

## Useful Commands
- `npm run migrate` — Run database migrations
- `npm run dev` — Start server with nodemon
- `npm start` — Start server normally

---

## Notes
- Make sure you have Node.js and npm installed.
- SQLite3 is used for local development; no extra setup required.
- For Swagger, ensure you have the necessary middleware (e.g., `swagger-ui-express`) installed and configured in `server.js`.

---

## License
MIT
