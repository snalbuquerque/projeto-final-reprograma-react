import './header.styles.css'

const Header = (props) => {
    return(
        <div>
            <h1>{props.children}</h1>
            <img src={props.image} alt="Imagem de livros" />
        </div>
    )
}

export default Header