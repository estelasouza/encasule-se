import React, {Suspense} from 'react'
import {Route ,Switch } from "react-router-dom"
 
const Home = React.lazy(() => import('./pages/home'))
const Quiz = React.lazy(() => import('./pages/quiz'))
const QuemSomos = React.lazy(() => import('./pages/quem-somos'))
const Fanzini = React.lazy(() => import('./pages/fanzini'))
const Contato = React.lazy(() => import('./pages/contato'))


// fallback = posso colocar gifs girando 
const Routes = props => (
    <Suspense fallback="Loading..." > 
    
        <Switch >
            <Route exact path="/" component={routerProps => <Home {...routerProps} />} ></Route>
            <Route exact path="/quiz" component={routerProps => <Quiz {...routerProps} />}></Route>
            <Route exact path="/quem-somos" component={routerProps => <QuemSomos {...routerProps} />}></Route>
            <Route exact path="/contato" component={routerProps => <Contato {...routerProps} />}></Route>
            <Route exact path="/fanzini" component={routerProps => <Fanzini {...routerProps} />}></Route>


        </Switch>


    </Suspense>
    
)

export default Routes
