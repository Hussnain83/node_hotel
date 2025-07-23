🍽️ Node Hotel Application
A hotel management backend system developed using Node.js, Express.js, and MongoDB, designed to manage staff and menu items efficiently. This project was built by Muhammad Hussnain Dogar.

📧 Email: hussnaindogar2006@gmail.com

🚀 Features
Manage hotel staff (Add, View, Update, Delete)

Manage menu items (Add, View, Update, Delete)

Filter persons by work type (chef, waiter, manager)

Filter menu items by taste (sweet, spicy, sour)

📦 Installation
bash
Copy
Edit
git clone https://github.com/your-username/node-hotel-app.git
cd node-hotel-app
npm install
🧠 Endpoints
👤 Person (Staff)
Method	Endpoint	Description
POST	/person	Add a new person
GET	/person	Get all persons
GET	/person/:workType	Get persons by work type
PUT	/person/:id	Update a person by ID
DELETE	/person/:id	Delete a person by ID

🍔 Menu Items
Method	Endpoint	Description
POST	/menu	Add a new menu item
GET	/menu	Get all menu items
GET	/menu/:taste	Get menu items by taste
PUT	/menu/:id	Update a menu item by ID
DELETE	/menu/:id	Delete a menu item by ID

🧾 Data Models
🧑 Person Model
json
Copy
Edit
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}
🍲 Menu Item Model
json
Copy
Edit
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}
👨‍💻 Developer
Muhammad Hussnain Dogar
📧 hussnaindogar2006@gmail.com

