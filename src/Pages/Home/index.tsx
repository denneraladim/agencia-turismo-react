
import styles from "./Home.module.scss";

import HomeImage from "../img/airplane-blue.svg";
import type { JSX } from "react";
import { Link } from "react-router-dom";

const Home = ():JSX.Element => {
    return (
        <>
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Bem Vindo <br />
                    <span>à Nossa Agência</span> <br />
                    Travel
                </p>
            </div>
             <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`}>
                Saiba mais
             </Link>
                
            <figure>
                <img src={HomeImage} alt="Image da Home" />
            </figure>
        </section>
        </>
        
    )
}

export default Home;