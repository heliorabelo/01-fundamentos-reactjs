import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src='https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
      />
      
      <div className={styles.profile}>
        <img className={styles.avatar} src='https://github.com/heliorabelo.png' />
        <strong>Helio Souza</strong>
        <span>Enginer Software</span>
      </div>
      
      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}