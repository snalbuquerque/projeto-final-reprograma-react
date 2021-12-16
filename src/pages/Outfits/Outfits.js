import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShoppingImage from '../../assets/ShoppingImage.svg'
import './outfits.styles.css'

const Outfits = () =>{
    return(
        <>
        <Menu/>
        <Header image={ShoppingImage}>E o que esse povo veste?</Header>
        <Footer/>
        </>
    )
}

export default Outfits 

