
import styles from "./NotFound.module.scss";

const NotFound = () => {
    return (

        <section className={styles.container404}>
            <h2 className={styles.titulo2}>Algo esta  incorreto!</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span> <br />
                <strong className={styles.texto_red}>Página não encontrada!</strong>
            </div>
        </section>

    )
}


export default NotFound;