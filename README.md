# MERN Authentication & Test System

This is a full-stack MERN application that includes user authentication (mobile number & password) and an MCQ-based test with a feedback system.

## Project Structure

### Client (Frontend)
```bash
📂 client          # Frontend (React.js + Vite + Tailwind CSS)
├── 📂 api         # API calls
├── 📂 assets      # Static assets (images, icons, etc.)
├── 📂 components  # Reusable UI components
├── 📂 pages       # Application pages (Login, Register, Test, Feedback)
├── 📂 validation  # Form validation logic
├── App.js        # Main App component
├── index.css     # Global styles
├── main.js       # Entry point
```

## Features
- User Authentication (Register/Login with Mobile Number & Password)
- JWT-based Authentication
- User Role Selection (Student/Employee)
- MCQ Test with 5 questions
- Score Calculation (5 marks per question)
- Emoji-based Feedback System
- Responsive UI using Tailwind CSS

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router
- useForm/Formik for validation
- Axios for API requests


## Deployment
- **Frontend:** Vercel / Netlify
- **Backend:** Vercel / Render
- **Database:** MongoDB Atlas

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-auth-test.git
   cd TSEEP-MCQ-CLIENT
   ```
2. Install dependencies
   ```bash
   cd TSEEP-MCQ-CLIENT && npm install
   ```
3. Start the development servers:
   ```bash
   cd TSEEP-MCQ-CLIENT && npm run dev
   ```
   
4. Access the  backend at `http://localhost:5000`.

## Contributing
Feel free to fork the repo and create a pull request if you want to improve this project.

## License
This project is open-source and available under the MIT License.
