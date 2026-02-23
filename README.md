# Blog App

A simple blog application backend built with **Node.js**, **Express.js**, and **MongoDB** that allows users to create, read, update, and delete blog posts.

## 🚀 Features

- Create a new blog post
- Retrieve all blog posts
- Retrieve a single blog post by ID
- Update an existing blog post
- Delete a blog post
- MongoDB for data persistence

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB & Mongoose
- **Environment Variables:** dotenv

## 📋 Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 📁 Project Structure

```
Blog-App/
├── Controllers/
│   ├── commentController.js
│   ├── likeController.js
│   └── postController.js
├── Modals/
│   ├── commentModal.js
│   ├── likeModal.js
│   └── postModal.js
├── Routes/
│   └── blog.js
├── config/
│   └── database.js
├── index.js
├── package.json
├── README.md
└── .env
```

## 💾 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankurtyagi-dev/Blog-App.git
   cd Blog-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your configuration:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Start the production server:
   ```bash
   npm start
   ```

## 📡 API Endpoints

**Base URL:** `http://localhost:3000/api/v1`

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| POST   | /blogs       | Create a new blog post |
| GET    | /blogs       | Get all blog posts  |
| GET    | /blogs/:id   | Get a blog post by ID |
| PUT    | /blogs/:id   | Update a blog post  |
| DELETE | /blogs/:id   | Delete a blog post  |

## 🧪 Example Requests and Responses

### Create Blog Post
**Request:**
```
POST /api/v1/blogs
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "This is my first blog post!"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Blog post created successfully",
  "data": {
    "_id": "60d5ecb74b24c72b8c8b4567",
    "title": "My First Blog",
    "content": "This is my first blog post!",
    "createdAt": "2023-06-25T10:30:00.000Z",
    "updatedAt": "2023-06-25T10:30:00.000Z"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Title and content are required"
}
```

### Get All Blog Posts
**Request:**
```
GET /api/v1/blogs
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d5ecb74b24c72b8c8b4567",
      "title": "My First Blog",
      "content": "This is my first blog post!",
      "createdAt": "2023-06-25T10:30:00.000Z",
      "updatedAt": "2023-06-25T10:30:00.000Z"
    }
  ]
}
```

## 📌 Model (Mongoose Schema)

```javascript
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
```

## 🤝 Contributing

1. Fork this project.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).