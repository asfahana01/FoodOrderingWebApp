# Food-Genie : Frontend

The client-side application for Food-Genie, a full-stack food ordering app. Built with React, Vite, and Redux Toolkit.

---

## Tech Stack

- **React** : UI library
- **Vite** : build tool & dev server
- **Redux Toolkit** : state management (auth, cart, etc.)
- **Axios** : API requests
- **Stripe.js** : checkout integration

---

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/  
│   ├── components/       # Reusable UI components
│   ├── redux/            # Store setup & slices
│   ├── utils/ 
│   ├── App.css     
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package-lock.json
├── README.md            <-- you are here
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- Backend server running (see `backend/README.md`)

### Installation
```bash
cd frontend
npm install
```

### Environment Variables
Create a `.env` file inside `frontend/`:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Run the dev server
```bash
npm run dev
```
App runs on `http://localhost:5173`.

### Build for production
```bash
npm run build
```

---

## Features

- 🔐 Login/Register forms with JWT-based session handling
- 🍽️ Browse restaurants & menus
- 🛒 Cart management via Redux Toolkit
- 💳 Stripe-powered checkout flow
- 🖼️ Cloudinary-hosted images displayed via API responses

---

## Notes & Gotchas

- The backend must have CORS configured to explicitly allow `http://localhost:5173` with `credentials: true`, or requests will fail with a "Network Error."
- If Vite throws stale cache/export errors after renaming a file or fixing a typo (e.g. a slice name), clear the Vite cache:
  ```bash
  rm -rf node_modules/.vite
  ```
- Avoid storing this project inside a OneDrive-synced folder on Windows, it can cause `EPERM` file-locking errors during Vite's cache cleanup. Prefer a local path like `C:\dev\Food-Genie`.
- Display errors using JSX-based UI state (e.g. a `useState` error message), not `alert.error()` — that's not a valid browser/React pattern.


---

## 👨‍💻 Author

**Asfa Hana**

- 🔗 [LinkedIn](https://www.linkedin.com/in/asfa-hana-a6a36a391/)
- 🐙 [GitHub](https://github.com/asfahana01)

---