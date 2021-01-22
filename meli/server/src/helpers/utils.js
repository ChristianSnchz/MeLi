
/***
 * @function formatResponseSearching
 * @param {string} data respuesta del app de mercado libre de search
 * @returns {object} response con el formato de la prueba
 */
export const formatResponseSearching = ( data ) => {

  const response ={};
  response.author = author();
  response.categories = categories(data.filters);
  response.items = items( data.results );
  return response;  
}


/***
 * @function formatResponseProduct
 * @param {string} item respuesta del app de mercado libre por id de item
 * @param {string} description respuesta del app de mercado libre descripcion de item por id
 * @returns {object} response con el formato de la prueba
 */
export const formatResponseProduct = ( item , description ) => {
  const response ={};
  response.author = author();
  response.item = makeItem(item, description);
  return response;
}


/***
 * @function author 
 * @returns {object} response con el formato de la prueba
 */
const author = () => ({ name: 'Christian', lastname: 'Sanchez'});


/***
 * @function items
 * @param {string} results respuesta del app de mercado libre por id de item ( property items )
 * @returns {object} response con el formato de la prueba
 */
const items = ( results ) => {

  const products = [];

  results.forEach(element => {
    products.push({
        id: element.id,
        title: element.title,
        price:{
          currency: element.currency_id,
          amount: element.price,
          //decimals: element.decimals ?
        },
        picture: element.thumbnail,
        condition: element.condition,
        free_shipping: element.shipping.free_shipping
    });
  });

  return products;
}


/***
 * @function categories
 * @param {string} categories respuesta del app de mercado libre por id de item (property categories)
 * @returns {object} response con el formato de la prueba
 */
const categories = ( categories ) => {

  const breadcum = [];
  categories.forEach(element => {
    if(element.id === 'category'){
      const { values } = element;            
       values[0].path_from_root.forEach( c => {
         breadcum.push( c.name );
       });
    }    
  });

  return breadcum;
  
}


/***
 * @function makeItem
 * @param {string} item respuesta del app de mercado libre por id de item
 * @param {string} description respuesta del app de mercado libre descripcion de item por id
 * @returns {object} response con el formato de la prueba
 */
const makeItem = ( item, description ) => {

  const auxItem = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price      
    },
    picture: item.pictures[0].secure_url,      
    sold_quantity : item.sold_quantity,
    description : description.plain_text,
  }

  auxItem.condition = item.condition === 'new' ? 'Nuevo' : 'Usado';  

  return auxItem;
}