import {Post} from './Post';

export function App() {

  return (

    <>
      <Post 
        author='Helio Souza' 
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vero vel eos voluptatem, maiores a, inventore quasi consectetur quas quis facilis quod maxime voluptate cumque quos? Aspernatur reprehenderit quasi sapiente!'
      />
      <Post 
        author='Bruno Rabelo' 
        content='Hello World!'
      />
    </>
  )
}