# 🎀 TinyTap

TinyTap is a full-stack URL shortener built using React, Node.js, Express, and MongoDB.

It allows users to:

- Convert long URLs into short, shareable links
- Redirect users to the original URL
- Track total clicks on each short link
- View detailed click history and timestamps
- Copy short IDs for analytics tracking

---

## ✨ Features

### 🔗 URL Shortening
Paste a long URL and generate a unique short link instantly.

### 📊 Analytics Dashboard
Track:

- Total number of clicks
- Visit timestamps
- Usage history of each shortened URL

### 🎨 Custom UI
Built with a soft pink custom design inspired by a cute aesthetic while keeping the interface clean and professional.

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Deployment
- Render

---

## 📂 Project Structure

```bash
TinyTap/
│
├── controllers/
├── models/
├── routes/
├── index.js
├── connect.js
├── package.json
│
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd TinyTap
```

---

## Backend Setup

### Install dependencies

```bash
npm install
```

### Create `.env`

```env
PORT=8001
MONGO_URI=your_mongodb_connection_string
```

### Start backend

```bash
npm start
```

Backend runs on:

```txt
http://localhost:8001
```

---

## Frontend Setup

Move to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:8001
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## API Endpoints

### Create Short URL

```http
POST /url
```

Request Body:

```json
{
  "url": "https://example.com"
}
```

---

### Redirect

```http
GET /:shortID
```

---

### Analytics

```http
GET /url/analytic/:shortID
```

Returns:

- Total clicks
- Click timestamps

---

## Deployment

TinyTap is deployed using Render.

### Backend
Deployed as Web Service

### Frontend
Deployed as Static Site

---

## Future Improvements

- User authentication
- Custom aliases
- QR code generation
- Link expiration
- Dashboard for multiple URLs

---

## Author

Built by Anjali 🚀
