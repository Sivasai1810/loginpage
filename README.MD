🚀 Full Stack Login Page – MERN Stack Project
✅ Tech Stack
Frontend:
React
Tailwind CSS
JavaScript
Backend:
Node.js
Express.js
JWT (for authentication tokens)
Bcrypt (for password hashing)
Database:
MongoDB
Passwords are securely stored using hashing with bcrypt.
📦 Features
Secure user registration and login
Password hashing with Bcrypt
JWT-based authentication
Tailwind-styled UI
Fully functional frontend & backend integration

🛠️ Getting Started – Run Locally
1. Clone the Repository
git clone "URL_OF_THE_REPOSITORY"
cd your-project-folder
2. Install Backend Dependencies
npm install express bcrypt jsonwebtoken joi
(You may also need mongoose, cors, and dotenv depending on your setup.)
3. Start the Backend Server
bash
Copy code
node index.js
Make sure MongoDB is running locally or update your connection string to use MongoDB Atlas.

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Log in an existing user

🧪 Postman Testing
You can test the API routes using Postman.
Make sure the server is running at http://localhost:3000.
