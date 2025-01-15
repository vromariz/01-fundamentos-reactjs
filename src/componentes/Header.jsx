import styles from './Header.module.css';

export function Header() {
    return(
        <Header className = {styles.header}>
            <strong>Ignite feed</strong>
        </Header>
    );
}