import React from 'react';
import "./style-rodape.css"
import { useHistory } from "react-router-dom"
import insta from '../assets/img-contato/instagram.png'
import face from '../assets/img-contato/facebook.png'
import youTube from '../assets/img-contato/youtube.png'
import logo from '../assets/img-contato/logo.png'




const Rodape = () => {
    const history = useHistory()

    return (
            <>
            <footer className='bg-footer'>
                <img className="logo-rodape" src={logo}/>
                <ul className="container lista-rodape">
                    <a href="#" target="_blank"><img className="tam-img-rodape" src={insta}/></a>
                    <a href="#" target="_blank"><img className="tam-img-rodape" src={face}/></a>
                    <a href="#" target="_blank"><img className="tam-img-rodape" src={youTube}/></a>                   
           
                </ul>
            </footer>
            </>
            );
};

export default Rodape;
  
  