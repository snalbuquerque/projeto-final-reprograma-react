import {useState, useEffect} from 'react'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BooksImage from '../../assets/BooksImage.svg'
import './livros.styles.css'

const Livros = () =>{
    const [books, setBooks] = useState([])

    useEffect(()=>{
    async function getData(){
      const response = await fetch('https://my-json-server.typicode.com/snalbuquerque/fake-api/livros')
      const data = await response.json()

      setBooks(data)
    }
    getData()
  
  },[])
    return(
        <>
        <Menu/>
        <Header image={BooksImage} title="Sugestões de livros">Aqui abaixo segue indicações de livros que são referências para este estilo:</Header>
        <div className="main-livros">
            <div className="card-container-livros" >
            {books.map(item=>
              <div className="card-livros">
                <h3 key={item.id} className="titulo-card">{item.titulo}</h3>
                <p className="tipo">autor(a): {item.autor}</p>
                <img src={item.capa} alt={item.titulo} />
              </div>
            )}
            </div>
      </div>
        <Footer/>
        </>
    )
}

export default Livros 