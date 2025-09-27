
import styles from "./Home.module.scss";

import HomeImage from "../img/airplane-blue.svg";
import type { JSX } from "react";

const Home = ():JSX.Element => {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Bem Vindo <br />
                    <span>à Nossa Agência</span> <br />
                    Travel
                </p>
            </div>
            <button className={`${styles.btn} ${styles.btn_red}`}>
                Saiba mais
            </button>
            <figure>
                <img src={HomeImage} alt="Image da Home" />
            </figure>
        </section>
    )
}

export default Home;