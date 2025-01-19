import { Header } from './componentes/Header';

import { Sidebar } from './componentes/Sidebar';

import { Post } from './componentes/Post';
import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header/>

        <div className = {styles.wrapper}>
         <Sidebar/>
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
