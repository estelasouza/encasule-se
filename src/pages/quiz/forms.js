import React from 'react';
import { useHistory } from "react-router-dom"
import '../style-geral.css'



const Tabela = () => {
   
    return (
        
        <div class="row center-xs">
           <div class="col-xs-2">
        <div class="box">
        <form className='container'>
        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Escolha...</option>
              <option value="1">Nunca aconteceu </option>
              <option value="2">Aconteceu pelo menos uma vez</option>
              <option value="3">Acontece constantemente </option>
            </select>
          </div>
         
        </div>
       </form>
       </div>
       </div>
       </div>
       
       );
}

export default Tabela 