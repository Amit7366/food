import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useParams} from 'react-router-dom';

function Cuisine() {

  const [cusine,setCuisine] = useState([]);
  let params = useParams();



  const gertCuisine = async(name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const receipes = await data.json();
    setCuisine(receipes.results);

    
  };

  useEffect(() => {
    gertCuisine(params.type);
  },[params.type]);



  return (
    <Grid 
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 1}}
      transition= {{duration: 0.5}}
    >
      {cusine.map((item)=>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Cuisine