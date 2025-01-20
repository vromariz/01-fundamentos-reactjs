import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.sidebar}
                src="https://images.unsplash.com/photo-1736210811075-7509d5023a4a?q=400&w=644&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                
            />

            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/138325339?s=400&u=56a44e82ae6083603336319e005dafa8e76902c2&v=4'/>
                <strong>Vinicius Romariz</strong>
                <span>Student</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size = {20}/>
                    Editar seu perfi
                </a>
            </footer>
        </aside>
    );
}