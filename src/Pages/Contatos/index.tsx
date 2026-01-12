import type { JSX } from "react";

import styles from "./Contatos.module.scss";

import ContatosImg from "../img/contact.svg";

const Contatos = ():JSX.Element => {
    return (
        <section className={styles.contatos} aria-labelledby="titulo-contatos">
        <h1 id="titulo-contatos">Contatos</h1>

        <p>
          <strong>Horário de Funcionamento:</strong><br />
          <span>Segunda à Sexta Feira, das 09h às 18h</span>
       </p>
        

        <address>
           <p className={styles.telefone}>
          Telefone: <a href="tel:+5531999990000">(31) 99999-0000</a>
        </p>
         <p className={styles.email}>
          E-mail: <a href="mailto:agenciatravel@gmail.com">
            agenciatravel@gmail.com
          </a>
        </p>
        </address>

       <img 
       src={ContatosImg}
       alt="Ilustração representando os canais de contato da agência de turismo"/>
      </section>
    )
}

export default Contatos;