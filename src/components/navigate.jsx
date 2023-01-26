import {GiAmpleDress} from 'react-icons/gi';
import {BiCalendar, BiHomeAlt} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';

import styles from '../assets/css/navigater.module.css';

import { Fade } from 'react-reveal';

export function Navigater() {
    return (
        <Fade LightSpeed={3000} bottom >
            <nav className={styles.nav}>
                <a href='#inicio' name='Enlace a Inicio' className={styles.navList}>
                    <BiHomeAlt size={25}/>
                    <p>Inicio</p>
                </a>
                <a href='#vestidos' name='Enlace a Vestidos' className={styles.navList}>
                    <GiAmpleDress size={25}/>
                    <p>Vestidos</p>
                </a>
                <a href='#rentar' name='Enlace a Rentar' className={styles.navList}>
                    <BiCalendar size={25}/>
                    <p>Rentar</p>
                </a>
                <a href='#visitanos' name='Enlace a Visitanos' className={styles.navList}>
                    <GoLocation size={25}/>
                    <p>Visitanos</p>
                </a>
            </nav>
        </Fade>
    )
}