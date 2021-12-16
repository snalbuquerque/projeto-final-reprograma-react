import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageCine from '../../assets/ImageCine.svg'
import './cine.styles.css'


const Cinematografia = () => {

    return(
        <>
        <Menu/>
        <Header image={ImageCine}>Pronto pra maratonar?</Header>
        <Footer/>
        </>
    )
}

export default Cinematografia