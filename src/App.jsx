import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Layout from "./components/layout/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Layout>
              <OnBoarding />
            </Layout>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

          <Route
          path="/login"
          exact
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
