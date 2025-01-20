import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/138325339?s=400&u=56a44e82ae6083603336319e005dafa8e76902c2&v=4' alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicus Romariz</strong>
                            <time title='11 de maio as 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atras</time>
                        </div>
                        <button title = 'deletar comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Vi, parabens!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}