import {useState, useEffect} from 'react'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShoppingImage from '../../assets/ShoppingImage.svg'
import './outfits.styles.css'

const Outfits = () =>{
    const [roupa, setRoupa] = useState([])

    useEffect(()=>{
    async function getData(){
      const response = await fetch('https://my-json-server.typicode.com/snalbuquerque/fake-api/outfits')
      const data = await response.json()

      setRoupa(data)
    }
    getData()
  
  },[])
    return(
        <>
        <Menu/>
        <Header image={ShoppingImage} title="E o que esse povo veste?">No geral, o estilo Dark Academia tem um toque nostálgico repleto de vibrações vintage. A subcultura busca reviver as imagens dos internatos particulares ingleses do século 19 e das faculdades da Ivy League na Nova Inglaterra.Para melhor imaginar um estilo Dark Academia ideal, imagine alguém vestindo uma calça de tweed vintage. Acrescente a essa imagem um cardigã de lã grosso e uma mochila gasta, repleta de livros e trabalhos acadêmicos.Segue algumas inpirações para este estilo:  (Imagens retiradas do Pinterest)
        </Header>
        <div className="main-outfit">
            <div className="card-container-outfit" >
            {roupa.map(item=>
              <div className="card-outfit">
                <img key={item.id} src={item.visu} alt="imagem de roupa" />
              </div>
            )}
          </div>
      </div>
        <Footer/>
        </>
    )
}

export default Outfits 

