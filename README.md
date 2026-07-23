# ShoppyGlobe E‑commerce React Application

## Github
https://github.com/Keerthi-DC/shoppy-globe

## Overview
ShoppyGlobe is a **full‑featured e‑commerce prototype** built with **React** and **Vite**. It demonstrates modern front‑end patterns including routing, state management with Redux, data fetching, lazy loading, and responsive design.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Performance Optimizations](#performance-optimizations)
- [Styling & Responsiveness](#styling--responsiveness)
- [Testing & Validation](#testing--validation)
- [Repository & Contributions](#repository--contributions)

---

## Features
- **Component Architecture** (20 pts):
  - `App`, `Header`, `ProductList`, `ProductItem`, `ProductDetail`, `Cart`, `CartItem`, `NotFound`, `Checkout`.
- **Props & Reusability** (10 pts):
  - Data is passed via props; components are functional and reusable.
- **Data Fetching** (40 pts):
  - Custom hooks `useFetchProducts` & `useFetchProductDetail` fetch from `https://dummyjson.com/products`.
  - Graceful error handling for failed requests (including 404 handling for featured items).
- **State Management** (70 pts):
  - Redux Toolkit store with `cartSlice` and `searchSlice`.
  - Actions for `addItem`, `removeItem`, `incrementQuantity`, `decrementQuantity`, `clearCart`.
  - Search filter integrated into the product list.
- **Event Handling** (20 pts):
  - Add‑to‑cart, remove‑item, quantity adjustments (minimum 1).
- **Routing** (20 pts):
  - React Router v6 with routes for Home (`/`), Product Detail (`/product/:id`), Cart (`/cart`), Checkout (`/checkout`), and a catch‑all 404 page.
- **Lists & Keys** (10 pts):
  - Product and cart lists rendered with unique keys.
- **Performance Optimizations** (20 pts):
  - **Code splitting** using `React.lazy` & `Suspense` for all major components.
  - **Image lazy loading** via `loading="lazy"` on every `<img>`.
- **Styling** (20 pts):
  - Custom CSS (no Tailwind) with a modern, responsive layout.

---

## Project Structure
```
shoppyglobe/
├─ public/                # static assets
├─ src/
│  ├─ assets/            # images (keerus_*.png, shoppyglobe_logo.png)
│  ├─ components/        # React components
│  │   ├─ App.jsx
│  │   ├─ Header.jsx
│  │   ├─ ProductList.jsx
│  │   ├─ ProductItem.jsx
│  │   ├─ ProductDetail.jsx
│  │   ├─ Cart.jsx
│  │   ├─ CartItem.jsx
│  │   ├─ Checkout.jsx
│  │   ├─ NotFound.jsx
│  │   ├─ Loader.jsx
│  │   └─ (css files)
│  ├─ data/              # featuredProducts.js (custom featured items)
│  ├─ hooks/             # custom data‑fetch hooks
│  ├─ store/             # Redux slices (cartSlice, searchSlice, themeSlice)
│  ├─ index.css
│  └─ main.jsx            # Vite entry point
├─ vite.config.js
├─ package.json
└─ README.md              # **this file**
```

---

## Setup & Installation
1. **Clone the repository** (the link is provided below).
2. Ensure you have **Node.js (>=18)** installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

---

## Running the App
- **Home** – shows the product list with featured items on top.
- **Product Detail** – click a product to view its details.
- **Cart** – view, adjust quantity, or remove items.
- **Checkout** – dummy form; pressing **Place Order** displays a success toast, clears the cart, and redirects to Home.
- **404 Page** – any unknown route shows a styled `NotFound` component with error details.

---

## Performance Optimizations
- All route components (`Header`, `ProductList`, `ProductDetail`, `Cart`, `Checkout`, `NotFound`) are **lazy‑loaded** using `React.lazy` and wrapped with `Suspense`.
- Nested components (`ProductItem`, `CartItem`) are also lazy‑loaded.
- Images use the native `loading="lazy"` attribute.
- The bundle size is split into multiple chunks; you can verify in Chrome DevTools → Network.

---

## Styling & Responsiveness
- Hand‑crafted CSS (no Tailwind) ensures a clean, modern look.
- Layout uses flexbox and CSS grid to adapt to mobile, tablet, and desktop screens.
- Dark‑mode toggle is implemented via the `themeSlice`.

---

## Testing & Validation
- **No console errors** when navigating between pages.
- **Redux DevTools** can be used to inspect cart and search state.
- **React DevTools** (highly recommended) – install from https://react.dev/link/react-devtools for a better development experience.

---

## Repository & Contributions
- **GitHub Repository:** [https://github.com/your-username/shoppyglobe](https://github.com/your-username/shoppyglobe)
- The repository contains **≥ 25 meaningful commits** covering setup, component creation, Redux integration, performance work, and styling.
- **node_modules** folder is excluded via `.gitignore`.
- Feel free to fork, raise issues, or submit pull requests.


---

*Prepared by the Keerthi D C – ShoppyGlobe*
