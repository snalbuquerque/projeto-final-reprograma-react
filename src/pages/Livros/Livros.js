import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BooksImage from '../../assets/BooksImage.svg'
import './livros.styles.css'

const Livros = () =>{
    return(
        <>
        <Menu/>
        <Header image={BooksImage}>Sugestões de livros</Header>
        <Footer/>
        </>
    )
}

export default Livros 