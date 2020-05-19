import React from 'react';
import "./style-rodape.css"
import { useHistory } from "react-router-dom"
import insta from '../assets/img-contato/instagram.png'
import face from '../assets/img-contato/facebook.png'
import youTube from '../assets/img-contato/youtube.png'
import logo from '../assets/img-contato/logo.png'
import gmail from '../assets/img-contato/gmail.png'




const Rodape = () => {
    const history = useHistory()

    return (
            <>
            <footer className='bg-footer'>
                <img className="logo-rodape" src={logo}/>
                <ul className="container lista-rodape">
                    <a href="https://www.instagram.com/encasule.se/" target="_blank"><img className="tam-img-rodape" src={insta}/></a>
                    <a href="https://www.facebook.com/encasule.encasule.9" target="_blank"><img className="tam-img-rodape" src={face}/></a>
                    <a href="https://www.youtube.com/channel/UCA-kLvov74_hyIuTVl83zSw?view_as=subscriber" target="_blank"><img className="tam-img-rodape" src={youTube}/></a>         
                    <p className='text-center'>encasule.se@gmail.com</p>          
           
                </ul>
            </footer>
            </>
            );
};

export default Rodape;
  
  