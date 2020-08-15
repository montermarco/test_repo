import {ITEM_LIST_REQUEST, ITEM_LIST_SUCESS, ITEM_LIST_FAIL, 
        ITEM_DETAIL_REQUEST, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_FAIL,
        PACKAGE_LIST_REQUEST, PACKAGE_LIST_SUCCESS, PACKAGE_LIST_FAIL,
        PACKAGE_DETAIL_REQUEST, PACKAGE_DETAIL_SUCCESS, PACKAGE_DETAIL_FAIL,
        SALES_LIST_REQUEST,SALES_LIST_SUCCESS,SALES_LIST_FAIL,
        SALES_DETAIL_REQUEST,SALES_DETAIL_SUCCESS, SALES_DETAIL_FAIL
      } from '../actions/types'

function itemReducer(state={ items: []}, action){  
  switch(action.type){
    case ITEM_LIST_REQUEST:
      return { loading: true}
    case ITEM_LIST_SUCESS:
      return { loading: false, items: action.payload} 
    case ITEM_LIST_FAIL:
      return {loading: false, error: action.payload }    
    default:
      return state;  
  }
}

function itemDetailReducer(state={ item: {}}, action){  
  switch(action.type){    
    case ITEM_DETAIL_REQUEST:
      return { loading: true }
    case ITEM_DETAIL_SUCCESS:
      return { loading: false, item: action.payload} 
    case ITEM_DETAIL_FAIL:
      return {loading: false, error: action.payload }  
    default:
      return state;  
  }
}

function packageListReducer(state={ packages:[]}, action){  
  switch(action.type){    
    case PACKAGE_LIST_REQUEST:
      return { loading: true }
    case PACKAGE_LIST_SUCCESS:
      return { loading: false, packages: action.payload} 
    case PACKAGE_LIST_FAIL:
      return {loading: false, error: action.payload }  
    default:
      return state;  
  }
}

function packageDetailReducer(state={ packageNoryan: {}}, action){  
  switch(action.type){    
    case PACKAGE_DETAIL_REQUEST:
      return { loading: true }
    case PACKAGE_DETAIL_SUCCESS:
      return { loading: false, packageNoryan: action.payload} 
    case PACKAGE_DETAIL_FAIL:
      return {loading: false, error: action.payload }  
    default:
      return state;  
  }
}

function saleItemListReducer(state={ saleItems:[]}, action){  
  switch(action.type){    
    case SALES_LIST_REQUEST:
      return { loading: true }
    case SALES_LIST_SUCCESS:
      return { loading: false, saleItems: action.payload} 
    case SALES_LIST_FAIL:
      return {loading: false, error: action.payload }  
    default:
      return state;  
  }
}

function saleItemDetailReducer(state={ saleItem: {}}, action){  
  switch(action.type){    
    case SALES_DETAIL_REQUEST:
      return { loading: true }
    case SALES_DETAIL_SUCCESS:
      return { loading: false, saleItem: action.payload} 
    case SALES_DETAIL_FAIL:
      return {loading: false, error: action.payload }  
    default:
      return state;  
  }
}

export {itemReducer, itemDetailReducer, packageListReducer, packageDetailReducer, saleItemListReducer, saleItemDetailReducer};
