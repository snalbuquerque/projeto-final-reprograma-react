import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageCine from '../../assets/ImageCine.svg'


const Cinematografia = () => {

    return(
        <>
        <Menu/>
        <Header image={ImageCine}/>
        <Footer/>
        </>
    )
}

export default Cinematografia