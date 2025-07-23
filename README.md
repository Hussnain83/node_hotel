# Node Hotel Application

Developed by **Muhammad Hussnain Dogar**  
📧 Email: [hussnaindogar2006@gmail.com](mailto:hussnaindogar2006@gmail.com)

The **Node Hotel Application** is a Node.js-based RESTful API built using the Express.js framework, with MongoDB as the database. It manages hotel staff (persons) and menu items, allowing full CRUD operations through defined endpoints.

---

## 📦 Installation

```bash
npm install
```

---

## 📁 Project Structure

- `models/` — Mongoose schemas for `Person` and `MenuItem`
- `routes/` — Express routes for handling API requests
- `server.js` — Main application file

---

## 📌 API Endpoints

### 👨‍🍳 Persons

| Method | Endpoint            | Description                                      |
|--------|---------------------|--------------------------------------------------|
| POST   | `/person`           | Add a new person (name, role, etc.)             |
| GET    | `/person`           | Retrieve all persons                            |
| GET    | `/person/:workType` | Retrieve persons by work type (chef, waiter...) |
| PUT    | `/person/:id`       | Update a person by ID                           |
| DELETE | `/person/:id`       | Delete a person by ID                           |

### 🍽️ Menu Items

| Method | Endpoint         | Description                                  |
|--------|------------------|----------------------------------------------|
| POST   | `/menu`          | Add a new menu item                          |
| GET    | `/menu`          | Retrieve all menu items                      |
| GET    | `/menu/:taste`   | Retrieve menu items by taste (sweet, spicy)  |
| PUT    | `/menu/:id`      | Update a menu item by ID                     |
| DELETE | `/menu/:id`      | Delete a menu item by ID                     |

---

## 🧩 Data Models

### Person

```json
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}
```

### MenuItem

```json
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}
```

---

## ✅ Features

- Add, update, delete, and retrieve hotel staff
- Manage menu items by category (taste)
- Built with Express.js and MongoDB using Mongoose
- Clean RESTful API architecture

---

## 🚀 Future Improvements

- Add authentication (JWT)
- Role-based access control (admin, staff)
- Frontend dashboard (React or Next.js)
- Menu item images

---

## 📜 License

This project is for learning purposes and is open to improvements and contributions.
