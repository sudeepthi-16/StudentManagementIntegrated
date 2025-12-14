# Student Management System – Angular & ASP.NET Core

This project is a simple Student Management System developed using Angular (Frontend) and ASP.NET Core Web API (Backend) with JWT-based authentication and SQL Server for data storage. The application allows authenticated users to perform CRUD operations on student records.

**Key Features**
Authentication
Users can register using the Register page.
Users can log in using valid credentials.
After successful login, a JWT token is generated and stored in the browser.
Only authenticated users can access the Students page.

**Navigation Flow**

The Login page contains a button for new users that redirects to the Register page.
The Register page contains a button for existing users that redirects back to the Login page.
After successful login, the user is redirected to the Students page.
Direct access to the Students page without authentication redirects the user to the Login page.

**Student Management**

The Students page displays all student records in a table format.

**Users can:**
Add a new student
Edit an existing student
Delete a student
The add/edit form is displayed above the student table for ease of use.
All CRUD operations are performed using secured API endpoints.

**Security**

JWT authentication is implemented on the backend.
Protected endpoints require a valid token.
The frontend attaches the JWT token to API requests for authorized access.
