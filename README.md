# 🎓 Online Course Management System

Live Demo

Frontend: https://online-course-management-system-one.vercel.app/

Backend API: https://online-course-management-system-as0l.onrender.com

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** based Online Course Management System that allows administrators, instructors, and students to interact through a modern learning platform.

This project is being built from scratch to understand the complete workflow of a production-ready Learning Management System (LMS), including authentication, authorization, course management, enrollments, progress tracking, and much more.

---

## 📌 Project Overview

The Online Course Management System is a web application that enables educational institutions or independent instructors to create and manage online courses while allowing students to enroll, learn, and track their progress.

The project follows modern web development practices and implements secure authentication, role-based authorization, responsive UI, REST APIs, and scalable backend architecture.

---

# 🚀 Features

## 👨‍💼 Admin

* Admin Login
* Dashboard
* Manage Students
* Manage Instructors
* Manage Courses
* View Enrollments
* Analytics Dashboard
* Approve or Reject Instructor Requests
* Manage Categories
* System Settings

---

## 👨‍🏫 Instructor

* Register/Login
* Instructor Dashboard
* Create Courses
* Update Courses
* Delete Courses
* Upload Course Thumbnail
* Add Lectures
* Upload Videos
* Create Quizzes
* View Student Enrollments
* View Course Analytics

---

## 👨‍🎓 Student

* Register/Login
* Browse Courses
* Search Courses
* Enroll in Courses
* Watch Video Lectures
* Track Learning Progress
* Complete Quizzes
* Download Certificates
* Manage Profile

---

# 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Context API
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js
* Multer

### Database

* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* Postman
* VS Code

---

# 📂 Project Structure

```
Online-Course-Management-System/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🔐 Authentication

* JWT Authentication
* Password Hashing using Bcrypt
* Protected Routes
* Role-Based Access Control (RBAC)

---

# 📊 Database Collections

* Users
* Courses
* Lectures
* Enrollments
* Categories
* Progress
* Certificates
* Quizzes

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Laptop
* Tablet
* Mobile Devices

---

# 📚 Learning Objectives

This project is designed to understand:

* MERN Stack Development
* REST API Development
* JWT Authentication
* MongoDB Database Design
* File Upload Handling
* Protected Routes
* React Routing
* State Management
* CRUD Operations
* Role-Based Authorization
* Deployment

---

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

# 📈 Future Enhancements

* Razorpay Payment Integration
* Course Reviews & Ratings
* Wishlist
* Live Classes
* Chat System
* Discussion Forums
* Notifications
* Email Verification
* Password Reset
* AI Course Recommendations
* Attendance Tracking
* Assignment Submission
* Cloud Storage Integration
* Admin Analytics Dashboard
* Docker Deployment

---

# 🚀 Deployment

Frontend

* Vercel

Backend

* Render

Database

* MongoDB Atlas

---

# 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

# 👨‍💻 Author

**Ankit Umath**

Full Stack Developer | MERN Stack Enthusiast | AI & Web Development Learner

If you found this project helpful, consider giving it a ⭐ on GitHub.
