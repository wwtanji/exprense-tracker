# Expense Tracker Application

> **Status:** Work in Progress

Welcome to the **Expense Tracker** project, a MERN-stack application to help users track incomes and expenses, visualize data, and export reports. This repository is actively under development; features and UI are still evolving.

---

## Technologies

- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Styling**: Tailwind CSS
- **Charts**: Recharts (integration upcoming)
- **Excel Handling**: SheetJS (xlsx) (to be added)
- **Auth**: JWT (routes set up, frontend TBD)

---

## Setup (for Development)

1. **Clone the repo**
   ```bash
   git clone https://github.com/wwtanji/expense-tracker.git
   cd expense-tracker
   ```

2. **Backend**
   ```bash
   cd backend
   npm install
   # configure `.env`:
   # MONGO_URI=your_mongodb_connection_string
   # JWT_SECRET=your_jwt_secret
   # PORT=5000
   npm run dev
   ```

3. **Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## Author

**Roman Zotsenko**

**I’m open to feedback and suggestions since this is my first experience with Node.js, Express, and React. Let’s make this project even better together!**
