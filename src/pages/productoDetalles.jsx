import styles from '../assets/css/productoDetalles.module.css';

import { FaPhoneAlt } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { Ruta } from "../components/ruta";
import { Fade } from 'react-reveal';
import { useParams } from 'react-router-dom';
import { Productos } from '../vestidos';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export function ProductoDetalles() {

    const {vestidoId} = useParams();

    const producto = Productos.find(producto => producto.Id == vestidoId);
    console.log(producto)

    /* Imagenes */
    let imgJpg1 = producto.ImagnesJpg[0];
    let imagenesJpg = producto.ImagnesJpg;
    let imagenesAvif = producto.ImagnesAvif;
    let imagenesWebp = producto.ImagnesWebp;

    let descripcion = producto.Descripcion;

    const [img, setImg] = useState(imgJpg1)

    const hoverHandler = (imagen, i) => {
        setImg(imagen);
    }

    return (
        <section className={`${styles.productoDetalles} contenedor`}>

            <Helmet>
                <title>Vendetta | Vestido 🥂 | {descripcion}</title>
                <meta name="description" content={`Sitio web de Vendetta vestidos en mazatlan sinaloa | ${descripcion}`} />
            </Helmet>

            <Ruta ruta='Vestido' />

            <div className={styles.contenedorProducto}>

                <div className={styles.contenedorImages}>

                    <div>
                        <picture className={styles.picture}>
                            <Fade bottom>
                                <img className={styles.img} src={img} alt={descripcion} loading='lazy' />
                            </Fade>
                        </picture>
                    </div>

                    <div className={styles.pictures}>    

                        <picture className={`${styles.picture}`}>
                            <Fade left>
                                {   
                                    imagenesJpg.map((imagen, i) => (
                                        <img 
                                        src={imagen} 
                                        className={styles.imgSecundaria}
                                        onMouseOver={() => hoverHandler(imagen, i)}
                                        key={i}
                                        alt={descripcion}
                                        />
                                    ))
                                }
                            </Fade>
                        </picture>                    
                    </div>
                </div>


                <div className={styles.detalles}>
                    <Fade top>
                        <h2 className={styles.titulo}>{descripcion}</h2>
                        <a name='telefono de vendetta' className={styles.llamarBtn} href='tel:6693251837'><FaPhoneAlt /> Llamar</a>
                        <a name='instagram de vendetta' className={`${styles.llamarBtn} ${styles.igBtn}`} href="https://www.instagram.com/vendetta_vestidos/"><BsInstagram size={27} /> Instagram</a>
                    </Fade>
                </div>
            
            </div>


        </section>
        )
}