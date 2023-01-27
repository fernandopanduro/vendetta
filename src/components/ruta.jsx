import styles from '../assets/css/ruta.module.css';

import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

export function Ruta({ruta}) {
    return (
        <div className={styles.ruta}>
            <Link to='/' className={styles.rutaParrafo}><IoIosArrowBack size={22} /> Inicio / {ruta}</Link>
        </div>
    )
}