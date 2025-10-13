import type { JSX } from "react";

import styles from "./Sobre.module.scss";

import SobreEmpresa from "../img/undraw_team-work_i1f3.svg";

const Sobre = ():JSX.Element => {
    return (
         <section className={styles.sobre}>
        <div className={styles.content}>
          <img src={SobreEmpresa} alt="Sobre a empresa"/>
          <div className={styles.textos}>
            <h1>Sobre</h1>
            <p>
              Somos uma agência de turismo apaixonada por criar experiências
              inesquecíveis para viajantes de todo o mundo. Com anos de
              experiência no setor, nossa equipe está empenhada em proporcionar
              viagens excepcionais, explorando destinos emocionantes e  proporcionando momentos únicos aos nossos clientes.
            </p>
          </div>
        </div>
      </section>
    )
}

export default Sobre;