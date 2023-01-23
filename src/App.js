import { Header } from "./components/header";

import styles from './assets/css/app.module.css';
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landinPage";
import { Navigater } from "./components/navigate";

function App() {
  return (
    <div >
      <Header />

      <main className={styles.app}>

      <Navigater />

        {/* <Routes>
          <Route path='/' element={<LandingPage />} />
          
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes> */}

      </main>

    </div>
  );
}

export default App;
