import { Header } from './componentes/Header';
import { Post } from './Post';


import styles from './App.module.css';

import './global.css';
import { Sidebar } from './componentes/Sidebar';

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
