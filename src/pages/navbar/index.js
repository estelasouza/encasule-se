import React from 'react';
import { useHistory } from "react-router-dom"
import './style.css'
import logo from '../assets/img-contato/logo.png'

const NavBar = () => {
    const history = useHistory()

    return (
        <div >
            <nav className='cor-bg'>
                <div className="cor-bg nav-wrapper container">
                    <a href="#!" className="brand-logo"><img className='logo-nav' src={logo}/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger "><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a onClick={() => history.push("/")}>Projeto</a></li>
                        <li> <a onClick={() => history.push("/quem-somos")}>Quem somos</a></li>
                        <li> <a onClick={() => history.push("/fanzini")}>Fanzini</a></li>
                        <li><a onClick={() => history.push("/quiz")}>Quiz</a></li>
                        <li><a onClick={() => history.push("/contato")}>Contatos</a></li>
                    </ul>
                </div>
            </nav>
        
            <ul class="sidenav cor-bg" id="mobile-demo">
            <li><a href="index.html">Projeto</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Contatos</a></li>
        </ul>
        </div>
       

    );
}

export default NavBar;