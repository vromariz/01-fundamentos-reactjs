import { Header } from './componentes/Header';
import { Post } from './Post';

import './gloal.css';

export function App() {
  return (
    <div>
      <Header/>

        <Post
          author = "Diego Fernandes"
          content = "Lorem post"
          />

        <Post
        author = "Gabriel Buzzi"
        content = "Um novo post"
        />
    </div>
  )
}