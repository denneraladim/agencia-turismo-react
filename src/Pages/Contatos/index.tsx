import type { JSX } from "react";

import styles from "./Contatos.module.scss";

import ContatosImg from "../img/contact.svg";

const Contatos = ():JSX.Element => {
    return (
        <section className={styles.contatos}>
        <h1>Contatos</h1>
        <h2>Horário de Funcionamento:</h2>
        <span>Segunda à Sexta Feira de 09h às 18h</span>
        <h1 className={styles.telefone}>Telefone:(031)-99999-0000 </h1>
        <h1 className={styles.email}>e-mail:</h1>
        <span>agenciatravel@gmail.com</span>
        <img src={ContatosImg} alt="Imagem de Contatos"/>
      </section>
    )
}

export default Contatos;