import {GiAmpleDress} from 'react-icons/gi';
import {BiCalendar, BiHomeAlt} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go';

import styles from '../assets/css/navigater.module.css';

import { Fade } from 'react-reveal';

export function Navigater() {
    return (
        <Fade LightSpeed={3000} bottom >
            <nav className={styles.nav}>
                <div className={styles.navList}>
                    <BiHomeAlt size={25}/>
                    <a href='#inicio' name='Enlace a Inicio'>Inicio</a>
                </div>
                <div className={styles.navList}>
                    <GiAmpleDress size={25}/>
                    <a href='#vestidos' name='Enlace a Vestidos'>Vestidos</a>
                </div>
                <div className={styles.navList}>
                    <BiCalendar size={25}/>
                    <a href='#rentar' name='Enlace a Rentar'>Rentar</a>
                </div>
                <div className={styles.navList}>
                    <GoLocation size={25}/>
                    <a href='#visitanos' name='Enlace a Visitanos'>Visitanos</a>
                </div>
            </nav>
        </Fade>
    )
}