# Fullstack Products & Clients API

A modern RESTful API for managing products and clients, built with Node.js, Express, TypeORM, and Docker. Designed with Domain-Driven Design (DDD) principles for scalability and maintainability.

---

## 🚀 Features
- CRUD operations for products and clients
- DDD architecture: controllers, services, repositories, entities
- TypeORM for database management
- Docker support for easy deployment
- Environment variable support (.env)
- Swagger (OpenAPI) documentation at `/api-docs`
- Input validation (e.g., phone accepts only numbers)
- Error handling and clean responses

---

## 🗂️ Project Structure
```
├── src
│   ├── controllers
│   ├── database
│   ├── entities
│   ├── repositories
│   ├── routes
│   ├── services
│   └── server.js
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/api-fullstack-produtos-clientes.git
cd api-fullstack-produtos-clientes
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env` and update as needed.

### 4. Run Database Migration
```bash
npm run migrate
```

### 5. Start the API
```bash
npm start
```
Or for development with auto-reload:
```bash
npm run dev
```

### 6. Access Swagger Documentation
Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser.

---

## 🐳 Docker Usage

Build and run the API with Docker:
```bash
docker-compose up --build
```

---

## 📚 API Endpoints

### Products
- `POST /produtos` — Create a new product
- `GET /produtos` — List all products (search by name)
- `GET /produtos/:id` — Get product by ID

### Clients
- `POST /clientes` — Create a new client
- `GET /clientes` — List all clients
- `GET /clientes/:id` — Get client by ID

---

## 🧪 Testing with Swagger
1. Access [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
2. Explore and test all endpoints directly from the browser.

---

## 💡 Notes
- Node.js and npm required
- SQLite3 used for local development
- Phone input accepts only phone numbers structure
- DDD architecture for clean code separation

---

## 📄 License
MIT
