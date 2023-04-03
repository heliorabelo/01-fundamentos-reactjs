import {Post} from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import './global.css';

import styles from './styles/App.module.css';

export function App() {

  return (
    <>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Helio Souza' 
            content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vero vel eos voluptatem, maiores a, inventore quasi consectetur quas quis facilis quod maxime voluptate cumque quos? Aspernatur reprehenderit quasi sapiente!'
          />
          <Post 
            author='Bruno Rabelo' 
            content='Hello World!'
          />
        </main>
      </div>
    </>
  )
}