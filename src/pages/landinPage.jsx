import { Inicio } from "../components/inicio";
import { Navigater } from "../components/navigate";

import styles from '../assets/css/landingPage.module.css';

import { Vestidos } from "../components/vestidos";
import { Rentar } from "../components/rentar";
import { Citas } from "../components/citas";

export function LandingPage() {
    return (
        <section className={styles.landingPage}>
            <Inicio />
            <Navigater />  
            <Vestidos /> 
            <Rentar />
            <Citas />
        </section>
    )
}