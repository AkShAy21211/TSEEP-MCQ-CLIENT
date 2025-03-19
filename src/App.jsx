
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={
          <Layout>
            <OnBoarding />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
