import { Inicio } from "../components/inicio";
import { Navigater } from "../components/navigate";

import styles from '../assets/css/landingPage.module.css'

export function LandingPage() {
    return (
        <section className={styles.landingPage}>
            <Inicio />
            <Navigater />   
        </section>
    )
}