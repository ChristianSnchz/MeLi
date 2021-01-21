import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.scss';
import shipping from '../assets/ic_shipping.png';

export const ResultSearchBox = () => {


  const item = {
    id: "MMMM458748",
    title: "iphone",
    price: {
    currency: "USD",
    amount :12000,
    decimals: 1
    },
    picture: "mm",
    condition: "no se",
    free_shipping: true
    }

  const item2 = {
    id: "MMMM458738",
    title: "iphone",
    price: {
    currency: "USD",
    amount :12000,
    decimals: 1
    },
    picture: "mm",
    condition: "no se",
    free_shipping: false
    }
    
  const [itemsSearch, setitemsSearch] = useState([item, item2]);
  const history = useHistory();

  useEffect(() => { 
    const { location } = history;
    const { search } = location;
    if(search === '?search='){
      history.push('/');
    }    
    
  }, [history.location.search])


  const goToDetail = (item) => {
    console.log(item.id);
    history.push(`/items/${item.id}`); 
  
  }

  return (
    <>

    <div style={{ marginTop:'2rem' }}>

    </div>
      {       
        itemsSearch.map( (item) => {
            return  <div key={item.id} className="items_container_two" > 
              <div className="items_container" onClick={ () => goToDetail(item) } >                
                    <img 
                      src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022219953"
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
