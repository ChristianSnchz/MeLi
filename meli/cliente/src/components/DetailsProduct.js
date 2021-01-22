import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.scss';

export const DetailsProduct = () => {

  const history = useHistory();

  const [product, setproduct] = useState();

  useEffect(() => {

    const { location } = history;
    const { pathname } = location;
    const id = pathname.substring(7, pathname.length );
    console.log(id);

        
  }, [history])


  return (
    <>
      <div  className="details_container_two">
        <div className="details_container" >

          <div style={{ display:'flex'  }} >

            <img src="data:image/jpeg;base64,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" 
              className="detail_image"
              alt="Portada"
            />
            
            <div className="detail_box" >
              <p className="detail_subtittle" >Nuevo - 2.34 vendidos</p>
              <p className="detail_tittle" > Deco Reverse Sombrero Oxford </p>
              <p className="detail_price" > $ 1.980  <span style={{ fontSize:'20px' }} >00</span>   </p>
              
              <button className="detail_button">
                Comprar
              </button>
            </div>
          </div>

          <div >
            <p className="detail_description_tittle"> Descripción del producto </p>

            <p className="detail_description" >
            Esos serán los requisitos para todo aquel que quiera viajar a Estados Unidos desde el extranjero, anunció el presidente Joe Biden tras su primer día completo en el cargo.
El gobierno de Biden se ha puesto como prioridad frenar la pandemia en el país, donde el virus se ha cobrado las vidas de 400.000 personas hasta la fecha, y firmó
            </p>

          </div>
        </div>
      </div>
      
    </>
  )
}
