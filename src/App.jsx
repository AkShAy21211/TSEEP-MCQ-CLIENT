import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import OnBoarding from "./pages/OnBoarding";
import Layout from "./components/layout/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Question from "./pages/Question";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PublicRoute>
              <Layout>
                <OnBoarding />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <PublicRoute>
              <Layout>
                <Register />
              </Layout>
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          exact
          
          element={
            <PublicRoute>
              <Layout>
                <Login />
              </Layout>
            </PublicRoute>
          }
        />
        <Route
          path="/questions"
          exact
          element={
            <ProtectedRoute>
              <Layout>
                <Question />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          exact
          element={
            <ProtectedRoute>
              <Layout>
                <Success />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/*"
          exact
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
