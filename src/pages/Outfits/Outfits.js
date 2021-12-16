import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShoppingImage from '../../assets/ShoppingImage.svg'

const Outfits = () =>{
    return(
        <>
        <Menu/>
        <Header image={ShoppingImage}></Header>
        <Footer/>
        </>
    )
}

export default Outfits 

