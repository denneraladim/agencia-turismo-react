
import styles from "./Home.module.scss";

import HomeImage from "../img/airplane-blue.svg";
import type { JSX } from "react";

const Home = (): JSX.Element => {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Bem Vindo <br />
                        <span>à Nossa Agência</span> <br />
                        Travel
                    </p>
                    <button className={`${styles.btn} ${styles.btn_blue}`}>
                    Saiba Mais
                </button>
                </div>                
                <img src={HomeImage} alt="Image da Home" />
            </section>
        </>

    )
}

export default Home;