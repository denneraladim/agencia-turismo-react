import styles from "./Sobre.module.scss";

import SobreEmpresa from "../img/undraw_team-work_i1f3.svg";

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <article className={styles.content}>
        <img src={SobreEmpresa} alt="Ilustração representando a equipe da agência de turismo" />
        <div className={styles.textos}>
          <h1>Sobre</h1>
          <p>Somos uma agência de turismo apaixonada por criar experiências
            inesquecíveis para viajantes de todo o mundo. Com anos de
            experiência no setor, nossa equipe está empenhada em oferecer
            viagens excepcionais, explorando destinos emocionantes e
            criando momentos únicos para nossos clientes.
          </p>
        </div>
      </article>
    </section>
  )
}

export default Sobre;