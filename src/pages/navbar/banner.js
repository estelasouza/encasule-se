import React from 'react';
import { useHistory } from "react-router-dom"
import background from '../assets/background2.jpeg'
import "./style.css"
import logo from '../assets/img-contato/logo.png'
const Banner = () => {
    const history = useHistory()

    return (

        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={background} className="d-block w-100 img-principal"/>

        <div class="row center-xs">

        <div class="col-xs-6">
            <div class="box">
            <h1 className='letra'> Encasule-se </h1>
            </div></div></div>
            
            

        </div>
        </div>
        );
    };

export default Banner