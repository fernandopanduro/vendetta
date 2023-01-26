import styles from '../assets/css/vestidos.module.css';

import { Card } from './card';

import { AiOutlineArrowRight } from 'react-icons/ai';

export function Vestidos() {
    return (
        <section id='vestidos' className={`${styles.vestidos} contenedor`}>
            <h2 className='titulo'>Vestidos</h2>
            <Card />
            <Card />
            <Card />    
            <a className={styles.link} href="">Ver mas <AiOutlineArrowRight size={28} /></a>
        </section>
    )
}