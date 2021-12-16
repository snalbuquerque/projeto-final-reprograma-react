import {useState, useEffect} from 'react'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageCine from '../../assets/ImageCine.svg'
import './cine.styles.css'


const Cinematografia = () => {
    const [cine, setCine] = useState([])

    useEffect(()=>{
    async function getData(){
      const response = await fetch('https://my-json-server.typicode.com/snalbuquerque/fake-api/cinematografia')
      const data = await response.json()

      setCine(data)
    }
    getData()
  
  },[])

    return(
        <>
        <Menu/>
        <Header image={ImageCine} title="Pronto pra maratonar?">Uma pequena lista com filmes e séries que se tornaram referências para esta estética:
        </Header>
        <div className="main">
            <div className="card-container" >
            {cine.map(item=>
              <div className="card">
                <h3 key={item.id}>{item.titulo}</h3>
                <p>{item.tipo}</p>
                <img src={item.capa} alt={item.titulo} />
              </div>
            )}
            </div>
      </div>
        <Footer/>
        </>
    )
}

export default Cinematografia