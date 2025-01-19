import styles from './Header.module.css';

import ignitelogo from '../assets/ignitelogo.svg';

console.log(ignitelogo);


export function Header() {
    return(
        <header className = {styles.header}>
            <img src = {ignitelogo} alt= "logotipo do ignite" />
        </header>
    );
}