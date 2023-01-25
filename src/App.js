import { Header } from "./components/header";

import styles from './assets/css/app.module.css';
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landinPage";
import { Navigater } from "./components/navigate";
import { Footer } from "./components/footer";

function App() {
  return (
    <div >
      <Header />

      <main className={styles.app}>

      <LandingPage />

        {/* <Routes>
          <Route path='/' element={<LandingPage />} />
          
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes> */}

      </main>

      <Footer />

    </div>
  );
}

export default App;
