import React from "react";
import styled from 'styled-components';
import {setFlex, elevation, absolute, colors, below } from '../utilities';
import Search  from '../elements/svg/Search.jsx';

function SearchBarBase({ className, searchHandler, sizeHandler, priceHandler}) {
    
    return (
        <div className={className}>
            <div className="filter_box">
              <div className="search_box">
                <input
                    type="text"
                    placeholder="Busca un producto..."
                    name="searchKeyword"
                    onChange={searchHandler}
                />
                <div className="search"><Search/></div>
              </div>
              <div className="select_box">
                <select className="select_size" name="size" onChange={sizeHandler}>
                    <option value="">Tamaño</option>
                    <option value="chico">Chico</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>
                <select className="select_price" name="price" onChange={priceHandler}>
                    <option value="">Precio</option>
                    <option value="-precio">Mayor</option>
                    <option value="precio">Menor</option>
                    <option value="precio[lte]=1500"> $500 - $1,500 </option>
                    <option value="precio[gte]=1500"> mas de $1,500</option>
                    <option value="precio[gte]=2000"> mas de $2,000</option>
                    <option value="precio[gte]=3000"> mas de $3,000</option>
                    <option value="precio[gte]=5000"> mas de $5,000</option>
                </select>
              </div>              
            </div>
        </div>
    );
}

const SearchBar = styled(SearchBarBase)`
    position: relative;
    width: 100%;    
    margin: -.5rem auto;    
    margin-bottom: .5rem;    
    border-radius: .5rem;

    .filter_box{      
      ${setFlex({x:"space-between", y:"flex-start"})};
      flex-flow: row nowrap;
      border-radius: .8rem;
      padding:0rem 1rem;      

      .search_box{
        position: relative;        
        width: 30%;

        input{
          height: 1.5rem;
          width: 100%;
          margin: .5rem auto;
          border: none;
          outline: none;
          border-radius: .8rem;        
          ${elevation[3]};
          padding-left: .5rem;

          &::placeholder {
            opacity: .5;
            font-size: .8rem;
            padding-left: .5rem; 
          }
        }

        .search{          
          ${absolute({xP:"right", x:"5%", y:"35%"})};
        }    
      }

      .select_box{
        width: 70%;
        ${setFlex({x:"space-around"})};        

        select {
          width: 45%;
          background: transparent;          
          height: 1.5rem;
          margin: .5rem auto;
          border: none;
          outline: none;
          border-radius: .8rem;        
          ${elevation[1]};
          font-size: .9rem;
          color: ${colors.white_1};

          &:hover{
            ${elevation[4]};
          }       
        }
      }        
    }

  ${below.md`
    height: 5.5rem;              

    .filter_box{      
      flex-flow: column nowrap;      
      padding: 0rem 1rem;

      .search_box{
        position: relative;        
        width: 100%;

        input {
          height: 2rem;
          width: 100%;        
          margin: .5rem auto;          
          padding-left: .5rem;        
        } 
      }

      .select_box{
        width: 100%;
        ${setFlex({x:"space-around"})};        

        select {
          width: 45%;
          background: transparent;
          height: 1.5rem;
          margin: .5rem auto;
          border: none;
          outline: none;
          border-radius: .8rem;        
          ${elevation[3]};
          font-size: 1rem;
          color: ${colors.white_1};          
        }
      } 
    }     
  `}
`;
export default SearchBar;

/*
 const setUrl = {    
    all: `/items/${category}`,
    size: `/items/${category}?tamaño=${size}`,
    price: `/items/${category}?${price_cond}`,
    sort: `/items/${category}?sort=${sortBy}`,    
    sizeAndPrice: `/items/${category}?tamaño=${size}&${price_cond}`,
    sizeAndSort: `/items/${category}?tamaño=${size}&sort=${sortBy}`,
    allConditions: `/items/${category}?tamaño=${size}&${price_cond}&sort=${sortBy}`,
  }
*/


