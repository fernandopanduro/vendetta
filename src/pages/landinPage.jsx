import { Inicio } from "../components/inicio";
import { Navigater } from "../components/navigate";

import styles from '../assets/css/landingPage.module.css';

import { Vestidos } from "../components/vestidos";
import { Rentar } from "../components/rentar";
import { Citas } from "../components/citas";
import { Visitanos } from "../components/visitanos";
import { Helmet } from "react-helmet";

export function LandingPage() {
    return (
        <section className={styles.landingPage}>
            
            <Helmet>
                <title>Vendetta Vestidos Mazatlan</title>
                <meta name="description" content={`Sitio web de Vendetta vestidos en mazatlan sinaloa`} />
            </Helmet>

            <Inicio />
            <Navigater />  
            <Vestidos /> 
            <Rentar />
            <Citas />
            <Visitanos />
        </section>
    )
}