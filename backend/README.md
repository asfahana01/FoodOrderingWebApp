# Food-Genie : Backend

The backend API server for Food-Genie, a full-stack food ordering application. Built with Node.js, Express, and MongoDB.

---

## Tech Stack

- **Node.js + Express** : server & routing
- **MongoDB + Mongoose** : database & ODM
- **JWT** : authentication
- **Stripe** : payment processing
- **Cloudinary** : image hosting
- **Pug** : server-rendered templates (e.g. emails)

---

## Project Structure

```
backend/
├── config/                # DB connection, Cloudinary config, env secrets (config.env)
├── controllers/           # Route logic (auth, restaurants, orders, etc.)
├── middlewares/           # Auth guards, error handling
├── models/                # Mongoose schemas
├── routes/                # Express routers
├── services/              # Stripe, email, and other integrations
├── utils/                 # Helper functions
├── view/                  # Pug templates
├── app.js                 # Express app setup (CORS, middleware, routes)
├── server.js              # Entry point  
└── README.md              <-- you are here
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Stripe account (test mode keys)
- Cloudinary account

### Installation
```bash
cd backend
npm install
```

### Environment Variables
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

### Run the server
```bash
npm start
```
Server runs on `http://localhost:8000`.

---

## API Overview

| Area | Route prefix | Description |
|------|--------------|-------------|
| Auth | `/api/v1/users` | Register, login, profile, logout, password updates |
| Restaurants | `/api/v1/eats/stores` | Create, read, update, delete restaurants |
| Menu | `/api/v1/eats/menus`<br>`/api/v1/eats/stores/:storeId/menus` | Menu management and nested restaurant menus |
| Food Items | `/api/v1/eats` | Food item creation and retrieval (`/item`, `/items/:storeId`, `/item/:foodId`) |
| Orders | `/api/v1/eats/orders` | Create orders, get order details, user order history |
| Payments | `/api/v1/payment/process`<br>`/api/v1/stripeapi` | Stripe payment processing, API key delivery |
| Uploads | handled by restaurant/menu/item creation routes under `/api/v1/eats` | Cloudinary image upload handling |

> The backend uses `/api/v1` as the main API base path.

---

## Notes & Gotchas

- CORS is configured explicitly in `app.js` to allow `http://localhost:5173` with `credentials: true` — required for the frontend to send cookies/auth headers.
- Default port is `8000`. Avoid port `6000` — Chrome blocks it as an unsafe port.
- Stripe checkout sessions are created via `stripe.checkout.sessions.create(...)`.
- Keep `config.env` gitignored; keep non-secret config files (`database.js`, `cloudinary.js`) tracked as normal.



---

## 👨‍💻 Author

**Asfa Hana**

- 🔗 [LinkedIn](https://www.linkedin.com/in/asfa-hana-a6a36a391/)
- 🐙 [GitHub](https://github.com/asfahana01)

---