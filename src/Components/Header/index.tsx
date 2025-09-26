import type { JSX } from "react";

import Logo from "../img/logo.svg";

import styles from "./Header.module.scss";

const Header = ():JSX.Element => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo" />
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Contatos</a>
            </nav>
        </header>
    )
}

export default Header;