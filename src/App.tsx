import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StepperExample from "./pages/Stepper/stepper";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Top Bar */}
        <header className="top-bar">
          <img src="/menu/top.png" alt="Top bar" className="top-bar-img" />
        </header>

        {/* Main area with side menu (right) and routed content (center) */}
        <main className="content-area">
          <aside className="side-menu">
            <img src="/menu/side.png" alt="Side menu" className="side-menu-img" />
          </aside>

          <section className="page-content" style={{ direction: 'rtl' }}>
            <Routes>
              <Route path="/" element={<StepperExample />} />
              <Route path="/step3" element={<StepperExample />} />
              {/* Add more routes here */}
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}
