import styles from './Sidebar.module.css'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.sidebar}
                src="https://images.unsplash.com/photo-1736210811075-7509d5023a4a?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <strong>Diego fernando</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfi
                </a>
            </footer>
        </aside>
    );
}