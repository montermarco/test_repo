//import axios from 'axios';
import api from '../config/axios_service';

import {ITEM_LIST_REQUEST, ITEM_LIST_SUCESS, ITEM_LIST_FAIL, 
        ITEM_DETAIL_REQUEST, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_FAIL,
        PACKAGE_LIST_REQUEST, PACKAGE_LIST_SUCCESS, PACKAGE_LIST_FAIL,
        PACKAGE_DETAIL_REQUEST, PACKAGE_DETAIL_SUCCESS, PACKAGE_DETAIL_FAIL,
        SALES_LIST_REQUEST,SALES_LIST_SUCCESS,SALES_LIST_FAIL,
        SALES_DETAIL_REQUEST,SALES_DETAIL_SUCCESS, SALES_DETAIL_FAIL} from './types';


const listItems =  (category, size, price_cond, sortBy) => async (dispatch) => {
  
  let url;

  if((size === null && price_cond === null && sortBy === null) || (size === '') || (price_cond === '')){
    url = `/items/${category}`;
  } else if(size !== null && price_cond === null && sortBy === null) {
    url = `/items/${category}?tamaño=${size}`;
  } else if (size === null && price_cond !== null && sortBy === null){
    url = `/items/${category}?${price_cond}`;
  } else if (size === null && price_cond === null && sortBy !== null){
    url = `/items/${category}?sort=${sortBy}`;
  } else if (size !== null && price_cond !== null && sortBy === null){
    url = `/items/${category}?tamaño=${size}&${price_cond}`;  
  }  else if (size !== null && price_cond === null && sortBy !== null){
    url = `/items/${category}?tamaño=${size}&sort=${sortBy}`;  
  } else if (size !== null && price_cond !== null && sortBy !== null){
    url = `/items/${category}?tamaño=${size}&${price_cond}&sort=${sortBy}`;
  } else {
    url = `/items/${category}`;
  }
  
  console.log(url);
  try {
    dispatch({ type: ITEM_LIST_REQUEST });    
    const response = await api.get(`${url}`);    
    dispatch({ type: ITEM_LIST_SUCESS, payload: response.data.data.items });
  } catch (error) {
    dispatch({type: ITEM_LIST_FAIL, payload: error.message});
  }
}


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */

const detailItem =  (category, id) => async (dispatch) => {
  
  try {
    dispatch({ type: ITEM_DETAIL_REQUEST});    
    const response = await api.get(`/items/${category}/${id}`);
    dispatch({ type: ITEM_DETAIL_SUCCESS, payload: response.data.data.item });
  } catch (error) {
    dispatch({type: ITEM_DETAIL_FAIL, payload: error.message});
  }
}

const listPackage =  () => async (dispatch) => {  
  try {
    dispatch({ type: PACKAGE_LIST_REQUEST});    
    const response = await api.get(`/packages`);    
    dispatch({ type: PACKAGE_LIST_SUCCESS, payload: response.data.data.packages });
  } catch (error) {
    dispatch({type: PACKAGE_LIST_FAIL, payload: error.message});
  }
}

const detailPackage = (id) => async dispatch => {  
  try {
    dispatch({type: PACKAGE_DETAIL_REQUEST});    
    const response = await api.get(`/packages/${id}`);
    dispatch({type: PACKAGE_DETAIL_SUCCESS, payload: response.data.data.packageNoryan});
  } catch (error) {
    dispatch({type: PACKAGE_DETAIL_FAIL, payload: error.message });
  }
}


const salesList =  (category) => async (dispatch) => {  
  try {
    dispatch({ type: SALES_LIST_REQUEST});    
    const response = await api.get(`/sales/catalog/${category}`);
    dispatch({ type: SALES_LIST_SUCCESS, payload: response.data.data.saleItems });
    
  } catch (error) {
    dispatch({type: SALES_LIST_FAIL, payload: error.message});
  }
}

const salesItemDetail = (category, id) => async dispatch => {
  try {
    dispatch({type: SALES_DETAIL_REQUEST});    
    const response = await api.get(`/sales/catalog/${category}/${id}`);
    dispatch({type: SALES_DETAIL_SUCCESS, payload: response.data.data.saleItem});
  } catch (error) {
    dispatch({type: SALES_DETAIL_FAIL, payload: error.message });
  }
}

export {listItems, detailItem, listPackage, detailPackage, salesList, salesItemDetail};
