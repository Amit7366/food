import React,{useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';


function Recipe() {

  const [details,setSearched] = useState({});
  const [activetab,setActiveTab] = useState("instructions");
    let params = useParams();

    const fetchDetails = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const deatilsData = await data.json();
        setSearched(deatilsData);
    
        console.log(deatilsData);
      };

      useEffect(() => {
        fetchDetails();
      },[params.name]);






  return (
    <DetailsWrapper>
      <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activetab === 'instructions' ? 'active' : ''} onClick={()=>{setActiveTab('instructions')}}>Instruction</Button>
        <Button className={activetab === 'ingrediaents' ? 'active' : ''} onClick={()=>{setActiveTab('ingrediaents')}}>Ingrediaents</Button>

        {activetab === 'instructions' && (
        <div>
        <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
        <br />
        <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
      </div>
        )}
        {activetab === 'ingrediaents' && (
        <ul>
        {details.extendedIngredients.map((amti)=>(
          <li key={amti.id}>{amti.original}</li>
        ))}
      </ul>
        )}



      </Info>




    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg,#494949,#313131);
    color: #fff;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.54rem;
  }
  ul{
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe