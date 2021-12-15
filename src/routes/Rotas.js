import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Home from '../pages/Home/Home'
import Livros from '../pages/Livros/Livros'
import Outfits from '../pages/Outfits/Outfits'
import Cinematografia from '../pages/Cinematografia/Cinematografia'

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/livros" component={Livros}/>
                <Route path="/outfits" component={Outfits}/>
                <Route path="/cinematografia" component={Cinematografia}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas
