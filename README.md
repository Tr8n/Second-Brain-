# Second Brain API

Backend system for a structured knowledge storage platform. Supports authentication, content organization, tagging, and importance prioritization.

---

## Core Concept

A “Second Brain” is a persistent system for storing, retrieving, and prioritizing information. This backend provides:

* Secure user authentication
* Structured content storage
* Tag-based classification
* Importance scaling for prioritization

---

## Features

### Authentication

* User registration
* Login with JWT
* Password hashing using bcrypt with salt

### Content Management

* Create, update, delete notes/posts
* Structured storage per user

### Tag System

* Attach multiple tags to content
* Efficient filtering and retrieval

### Importance Scale

* Assign priority levels (e.g. 1–5)
* Enables sorting and focus on high-value information

### Caching (Redis)

* Fast access for frequently used data
* Session/token optimization (optional)

---

## Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB (MERN architecture)

### Caching

* Redis

### Authentication & Security

* JSON Web Tokens (JWT)
* bcrypt (salted hashing)

---

## Project Structure

```
src/
  controllers/
  routes/
  db/
  middleware/
  utils/
```

---

## API Overview

### Auth Routes

```
POST /api/users/register
POST /api/users/login
```

### Content Routes

```
POST   /api/content
GET    /api/content
PUT    /api/content/:id
DELETE /api/content/:id
```

### Tag Routes

```
POST /api/tags
GET  /api/tags
```

---

## Environment Variables

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
REDIS_URL=your_redis_url
```

---

## Security

* Passwords are hashed using bcrypt with salt
* JWT used for stateless authentication
* Input validation required at route level

---

## Future Enhancements

* Role-based access control
* Full-text search
* AI-assisted summarization
* Graph-based knowledge linking

---

## Usage

1. Install dependencies

   ```
   npm install
   ```

2. Run development server

   ```
   npm run dev
   ```

3. Build project

   ```
   npm run build
   ```

---

## Summary

This system functions as a scalable backend for personal knowledge management, emphasizing structure, speed, and security.
