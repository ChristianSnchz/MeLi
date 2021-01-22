
/**
 * 
 * Rutas 
 * 
 * Dos expone Dos endpoints
 * 
 * /items
 * Retorne un objeto con 4 items con el parametro dado por el request query
 * 
 * /items/:id
 * Retorna un objeto Item mediante el Id dado por el request param id
 */

import { Router, response, request } from 'express';
import axios from 'axios';
import { formatResponseSearching, formatResponseProduct } from '../helpers/utils';

const apiLink = 'https://api.mercadolibre.com';
const apiSites = '/sites/MLA/';
const apiLimit = 4;

const router = Router();

router.get('/items', async ( req= request , resp = response ) => {

  try {
    
    const { q } = req.query;
    const uri = `${apiLink}${apiSites}search?limit=${apiLimit}&q=${q}`;  
    const result = await axios.get(uri);
    const { data } = result;
    
    const response = formatResponseSearching(data);
    resp.status(200).json(response);
    
  } catch (error) {

    console.log(error);
    resp.status(500).json({
      ok: false,      
    });    
  }
});


router.get( '/items/:id' , async (req = request, resp = response) => {

  const { id } = req.params;

  try {
    const item = await axios.get( `${apiLink}/items/${id}`);
    const description = await axios.get( `${apiLink}/items/${id}/description`)
    const response = formatResponseProduct(item.data, description.data);
    resp.status(200).json(response);
    
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,      
    });    
  }

});

export default router;