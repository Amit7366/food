import React,{useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

function Searched() {


    const [searchedrecipes,setSearched] = useState([]);
    let params = useParams();

    const gertSearched = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const receipes = await data.json();
        setSearched(receipes.results);
    
        
      };

      useEffect(() => {
        gertSearched(params.search);
      },[params.search]);


  return (
    <Grid>
      {searchedrecipes.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            </Link>
           
          </Card>
        )
      })}
    </Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
    
   a{
     text-decoration: none;
   }

    img{
      width: 100%;
      border-radius: 2rem;
    }
    h4{
        text-align: center;
        padding:      1rem;
    }
`;
export default Searched