import './header.styles.css'

const Header = (props) => {
    return(
        <>
        <div className="header">
            <h1 className="title">{props.title}</h1>
            <div className="container-header">
            <img src={props.image} alt="Imagem de livros" />
            <p className="text">{props.children}</p>
            </div>
        </div>
        </>
    )
}

export default Header