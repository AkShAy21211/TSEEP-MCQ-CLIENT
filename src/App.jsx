import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Layout from "./components/layout/Layout";
import Register from "./pages/Register";

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
      </Routes>
    </Router>
  );
}

export default App;
