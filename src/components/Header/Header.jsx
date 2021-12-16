import './header.styles.css'

const Header = (props) => {
    return(
        <div className="header">
            <h1 className="title">{props.children}</h1>
            <img src={props.image} alt="Imagem de livros" />
        </div>
    )
}

export default Header