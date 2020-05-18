import React from 'react';
import NavBar from '../navbar/index'
import Rodape from '../rodape/index'
import portoDigital from '../assets/colaboradores/porto-digital.png'
import meteColher from '../assets/colaboradores/mete-colher.png'
import portoMais from '../assets/colaboradores/portomais.png'
import minas from '../assets/colaboradores/minas.png'
import insta from '../assets/img-contato/instagram.png'
import youtube from '../assets/img-contato/youtube.png'
import Banner from '../navbar/banner'
import './style-contato.css'
import '../style-geral.css'
import face from '../assets/img-contato/facebook.png'

import { useHistory } from "react-router-dom"


const Contato = () => {

    const history = useHistory()
    return (
        <>
            <NavBar />
            <Banner />


            <div className='container'>
                <h2 className='centraliza-h2'>Achou nosso projeto legal?</h2>
                <h4 className='centraliza-tex'> Se você se identificou com nosso proposito e quer fazer parte da nossa história ! </h4>
                <p className='centraliza-tex paragrafo-comum'>Vem responder o forms, assim entraremos em contato com você ! </p>

                <b></b>
                <form className='container'>

                    <label htmlFor="nome" >Nome</label>
                    <input />

                    <label htmlFor="telefone" >Telefone</label>
                    <input />


                    <label htmlFor="Email" >Email</label>
                    <input />
                    <label htmlFor="habilidade" >Contenos como você pode nos ajudar </label>
                    <input />
                    <div className="row center-xs">
                        <div className="col-xs-6">
                            <div className="box altura-bt">
                                <button className=' centraliza-tex centraliza-bttwaves-effect purple lighten-2  btn-large ' type="button" onClick={() => history.push("/")} >Enviar</button>

                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <div>
                <h2 className='centraliza-h2'>Onde nos encontrar </h2>
                <div className=" container">
                    <div className='row'>
                        <div className='col'>

                            <a href='https://www.instagram.com/encasule.se/' target='_blank'>   <img className='tamanho-img' src={insta} /></a>
                        </div>
                        <div className='col'>

                        <a href='https://www.instagram.com/encasule.se/' target='_blank'> <img className='tamanho-img' src={youtube} /> </a>

                        </div>
                        <div className='col'>

                        <a href='https://www.instagram.com/encasule.se/' target='_blank'>  <img className='tamanho-img' src={face} />
                        </a></div>
                    </div> </div></div>



            <h2 className='centraliza-h2'>Quem nos apoia </h2>
            <div className='container'>
            <div className="container row center-xs">
                <div className="col">
                    <div className="box"> <img className=' tam-img loat-left col' src={portoDigital} /></div></div>
                <div className="col">
                    <div className="box">
                        <img className=' tam-img loat-left col' src={meteColher} />
                    </div></div>
                <div className="col">
                    <div className="box">
                        <img className=' tam-img loat-left col' src={portoMais} />
                    </div></div>
                <div className="col">
                    <div className="box">
                        <img className=' tam-img loat-left col' src={minas} />
                    </div></div>
            </div></div>

            <Rodape />
        </>
    );
};

export default Contato;