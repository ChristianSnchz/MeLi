

export const formatResponseSearching = ( data ) => {

  const response ={};
  response.author = author();
  response.categories = categories(data.filters);
  response.items = items( data.results );
  return response;  
}

export const formatResponseProduct = ( item , description ) => {
  const response ={};
  response.author = author();
  response.item = makeItem(item, description);
  return response;
}


const author = () => ({ name: 'Christian', lastname: 'Sanchez'});

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