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
                    <p>Inicio</p>
                </div>
                <div className={styles.navList}>
                    <GiAmpleDress size={25}/>
                    <p>Vestidos</p>
                </div>
                <div className={styles.navList}>
                    <BiCalendar size={25}/>
                    <p>Rentar</p>
                </div>
                <div className={styles.navList}>
                    <GoLocation size={25}/>
                    <p>Visitanos</p>
                </div>
            </nav>
        </Fade>
    )
}