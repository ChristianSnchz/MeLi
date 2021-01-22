
/**
 * Componente Resultados de Busqueda
 * 
 * Encargado de mostrar dinamicamente los resultados obtenidos por la consulta al servidor
 * de la query obtenida por el Header (SearchBox) Mediante la funcion SearchService 
 * 
 * 
 * @function SearchService 
 * @param {string} param query de la caja de busqueda del header
 * 
 */

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.scss';
import shipping from '../assets/ic_shipping.png';
import axios from 'axios';

export const ResultSearchBox = () => {
    
  const [itemsSearch, setitemsSearch] = useState([]);
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => { 
    const { location } = history;
    const { search } = location;
    if(search === '?search='){
      history.push('/');
    }    
    
    searchService(search.substring( 8,search.length ));            
  }, [history.location.search]);


  const searchService = async ( param ) => {    
    const apiurl = 'http://localhost:4000/api';    
    const uri = `${apiurl}/items?q=${param}`;    
    const response = await axios.get(uri);
    const { data } = response;  
    console.log(data);
    setCategories(data.categories);
    setitemsSearch(data.items);      
  }

  const goToDetail = (item) => {
    console.log(item.id);
    history.push(`/items/${item.id}`); 
  
  }

  return (
    <>    
    <div style={{ marginTop:'1rem',  display:'flex', marginLeft:'16rem' }}>      
          {categories.map( (category) => {            
            if(category === categories[categories.length -1] ){
              return <p style={{marginLeft:'1rem'}} > { `${category}`}</p>
            }else{
              return <p style={{marginLeft:'1rem'}}> { `${category}   >`}</p>
            }            
          }) 
          }      
    </div>
      {       
        itemsSearch.map( (item) => {
            return  <div key={item.id} className="items_container_two" > 
              <div className="items_container" onClick={ () => goToDetail(item) } >                
                    <img 
                      src={item.picture}
                      className="items_img"
                      />

                  <div>
                    <div style={{ display:'flex' }}  >
                      <h3 > {item.price.currency} { item.price.amount } </h3> 
                      { item.free_shipping && <img src={shipping}  style={{height:'20px', marginLeft:'0.8rem', marginTop:'1.1rem' }} /> }                      
                    </div>
                    <p> {item.title } </p>                    
                  </div>

                  <div className="items_location" >
                    <p> Ubicacion </p>
                  </div>

              </div>
            </div>
        })       
      }      
    </>
  )
}
