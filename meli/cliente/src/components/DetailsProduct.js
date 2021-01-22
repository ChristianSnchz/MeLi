
/**
 * Componente Detalle de producto 
 * Encargado de consultar por el id del producto mediante la funcion getProduct
 * 
 * @function getProduct
 * @param {string} id
 *  Toma un ID y consulta al servidor por el item devuelve un arreglo con el item y la descripcion
 * 
*/

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.scss';
import axios from 'axios';

export const DetailsProduct = () => {

  const history = useHistory();

  const [product, setproduct] = useState();

  useEffect(() => {

    const { location } = history;
    const { pathname } = location;
    const id = pathname.substring(7, pathname.length );    
    getProduct(id);
        
  }, [history]);


  const getProduct = async (id) => {
    const apiurl = 'http://localhost:4000/api';    
    const uri = `${apiurl}/items/${id}`;    
    const response = await axios.get(uri);
    const { data } = response;  
    setproduct(data.item);
  }


  return (
    <>
    { product&& <div  className="details_container_two">
        <div className="details_container" >

          <div style={{ display:'flex'  }} >

            <img src={product.picture}
              className="detail_image"
              alt="Portada"
            />
            
            <div className="detail_box" >
              <p className="detail_subtittle" >{product.condition}</p>
              <p className="detail_tittle" > {product.title} </p>
              <p className="detail_price" > {product.price.currency} {product.price.amount} <span style={{ fontSize:'20px' }} >00</span>   </p>
              
              <button className="detail_button">
                Comprar
              </button>
            </div>
          </div>

          <div >
            <p className="detail_description_tittle"> Descripción del producto </p>

            <p className="detail_description" >
              {product.description}
            </p>

          </div>
        </div>
      </div>}          
    </>
  )
}
