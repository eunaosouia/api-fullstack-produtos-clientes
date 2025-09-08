# Fullstack Products & Clients API

A robust RESTful API for managing products and clients, built with Node.js, Express, TypeORM, and Docker. The project follows Domain-Driven Design (DDD) principles for scalability and maintainability, and includes input validation, error handling, and Swagger documentation.

---

## 🚀 Features
- CRUD operations for products and clients
- DDD architecture: controllers, services, repositories, entities
- TypeORM for database management (SQLite)
- Docker support for easy deployment
- Environment variable support (`.env`)
- Swagger (OpenAPI) documentation at `/api-docs`
- Input validation (regex for email and phone)
- Unique constraints for name, email, and phone
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
│   ├── server.js
│   └── swagger.js
├── .dockerignore
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
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
- Phone input accepts only valid phone numbers (regex)
- Email input validated with regex
- DDD architecture for clean code separation
- Unique constraints for name, email, and phone

---

## 📄 License
MIT
