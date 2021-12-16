import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import BooksImage from '../../assets/BooksImage.svg'

const Livros = () =>{
    return(
        <>
        <Menu/>
        <Header image={BooksImage}></Header>
        <Footer/>
        </>
    )
}

export default Livros 