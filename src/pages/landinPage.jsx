import { Inicio } from "../components/inicio";
import { Navigater } from "../components/navigate";

import styles from '../assets/css/landingPage.module.css'
import { Vestidos } from "../components/vestidos";

export function LandingPage() {
    return (
        <section className={styles.landingPage}>
            <Inicio />
            <Navigater />  
            <Vestidos /> 
        </section>
    )
}