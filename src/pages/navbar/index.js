import React from 'react';
import { useHistory } from "react-router-dom"
import './style.css'
import logo from '../assets/img-contato/logo.png'

const NavBar = () => {
    const history = useHistory()

    return (
        <div className='navbar-fixed'>
            <nav className='cor-bg '>
                <div className="cor-bg nav-wrapper fixed-top container">
                    <a className="brand-logo left" onClick={() => history.push("/")}><img className='logo-nav' src={logo}/></a>
                    <ul className="right ">
                        <li><a onClick={() => history.push("/")}>Projeto</a></li>
                        <li> <a onClick={() => history.push("/quiz")}>Quiz</a></li>
                        {/* <li> <a onClick={() => history.push("/fanzini")}>Fanzini</a></li> */}
                        
                        <li> <a onClick={() => history.push("/quem-somos")}>Quem somos</a></li>

                        <li><a onClick={() => history.push("/contato")}>Contatos</a></li>
                    </ul>
                </div>
               
    
            </nav>
      
             
           
       
        </div>
       

    );
}

export default NavBar;