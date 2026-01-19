
import styles from "./Home.module.scss";

import HomeImage from "../img/airplane-blue.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className={styles.home}>
                <h1>Bem Vindo <br />
                    <span>à Nossa Agência</span><br />
                    Travel</h1>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`}
                aria-label="Saiba mais sobre a agência"
                >Saiba mais</Link>
            <img src={HomeImage} alt="Ilustração de avião azul representando viagens" />
        </section>


    )
}

export default Home;