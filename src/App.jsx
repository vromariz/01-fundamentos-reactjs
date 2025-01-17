import { Header } from './componentes/Header';
import { Post } from './Post';


import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header/>

        <div className = {styles.wrapper}>
          <aside>
            sidebar
          </aside>
          <main>
          <Post
          author = "Diego Fernandes"
          content = "Lorem post"
          />

        <Post
        author = "Gabriel Buzzi"
        content = "Um novo post"
        />
          </main>

        </div>
    </div>
  )
}
