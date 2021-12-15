import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import './home.styles.css'

const Home = () => {
    return(
        <>
        <Menu/>
        <h1 className="title">Dark Academia</h1>
        <h3 className="text">
            Dark Academia pode ser definida tanto como uma estética quanto como um estilo de vida. Como estética, se aproxima muito da arquitetura gótica e românica, da música clássica instrumental e da moda da década de 40, principalmente quando remete aos uniformes de colégios particulares da época. Já como estilo de vida, pode ser designada para pessoas que se dedicam à leitura e aquisição de conhecimento, seja ele pessoal ou acadêmico, apreciam a arte e a historicidade e também que se dedicam a atividades como xadrez, piano e visitas à museus e livrarias.

        </h3>
        <Footer/>
        </>
    )
}

export default Home