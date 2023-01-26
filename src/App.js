import { Header } from "./components/header";

import styles from './assets/css/app.module.css';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import { LandingPage } from "./pages/landinPage";
import { Footer } from "./components/footer";

function App() {
  return (
    <Router >

      <Header />

      <main className={styles.app}>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          
          <Route path='*' element={<Navigate replace to='/' />} />

        </Routes>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
