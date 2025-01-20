import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/138325339?s=400&u=56a44e82ae6083603336319e005dafa8e76902c2&v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Vinicius </strong>
                        <span>student</span>
                    </div>
                </div>
                
                <time title="11 de maio as 8:20" data time="2022-05-11 08:13:38">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>{' '}
                    <a href="">#nlw </a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

        </article>
    )
}