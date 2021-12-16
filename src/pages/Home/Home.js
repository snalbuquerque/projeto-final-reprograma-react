import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import './home.styles.css'
import ReadingImage from '../../assets/ReadindImage.svg'
import Header from '../../components/Header/Header'

const Home = () => {
    return(
        <>
        <Menu/>
        <Header image={ReadingImage}>Dark Academia</Header>
        <h3 className="text">
            Dark Academia pode ser definida tanto como uma estética quanto como um estilo de vida. Como estética, se aproxima muito da arquitetura gótica e românica, da música clássica instrumental e da moda da década de 40, principalmente quando remete aos uniformes de colégios particulares da época. Já como estilo de vida, pode ser designada para pessoas que se dedicam à leitura e aquisição de conhecimento, seja ele pessoal ou acadêmico, apreciam a arte e a historicidade e também que se dedicam a atividades como xadrez, piano e visitas à museus e livrarias.

        </h3>
        <Footer/>
        </>
    )
}

export default Home