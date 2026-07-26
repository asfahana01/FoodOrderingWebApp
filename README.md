# Food-Genie 🍔

A full-stack food ordering web application where users can browse restaurants, view menus, add items to a cart, and securely check out with Stripe.

---

## Tech Stack

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT-based authentication
- Stripe (payments)
- Cloudinary (image uploads)
- Pug (templating)

**Frontend**
- React + Vite
- Redux Toolkit
- Axios

---

## Project Structure

```
Food-Genie/
├── backend/
│   ├── config/              # DB, Cloudinary, and environment config
│   ├── controllers/         # Route logic (auth, restaurants, orders, etc.)
│   ├── middlewares/         # Auth guards, error handling
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routers
│   ├── services/            # Stripe, email, and other integrations
│   ├── utils/               # Helper functions
│   ├── view/                # Pug templates
│   ├── app.js
│   └── server.js
│
├──  frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── redux/           # Store, slices
│   │   ├── utils/  
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css     
│   ├── eslint.config.js
│   ├── index.html
│   └── vite.config.js
│
├── .gitattributes
├── .gitignore
├──  LICENSE
├── README.md       <--you are here
```

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Stripe account (test mode keys)
- Cloudinary account

### 1. Clone the repository
```bash
git clone https://github.com/asfahana01/Food-Genie.git
cd Food-Genie
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `config.env` file inside `backend/config/`:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run the backend:
```bash
npm start
```
Server runs on `http://localhost:8000`.

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

Run the frontend:
```bash
npm run dev
```
App runs on `http://localhost:5173`.

---

## Features

- 🔐 **User Authentication** : Register/login with JWT-based sessions
- 🍽️ **Restaurant & Menu Management** : Create, update, and delete restaurants/menus
- 🛒 **Cart System** : Add/remove items, manage quantities via Redux Toolkit
- 💳 **Stripe Checkout** : Secure payment processing
- 🖼️ **Image Uploads** : Restaurant/menu images hosted via Cloudinary
- 📦 **Order Management** : Track and view past orders

---

## Notes

- Default dev ports: backend `8000`, frontend `5173` (avoid port `6000`, which Chrome blocks).
- If using OneDrive-synced folders on Windows, Vite's cache cleanup can throw `EPERM` errors — prefer a local (non-synced) path such as `C:\dev\Food-Genie`.

---

## 👨‍💻 Author

**Asfa Hana**

- 🔗 [LinkedIn](https://www.linkedin.com/in/asfa-hana-a6a36a391/)
- 🐙 [GitHub](https://github.com/asfahana01)

---

## License

This project is licensed under the MIT License, see the LICENSE file for details.

---
