import Logo from "../img/logo.svg";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            
                <img src={Logo} alt="Logo da Agência Travel"/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contatos'>Contatos</Link>
            </nav>
        </header>
    )
}

export default Header;