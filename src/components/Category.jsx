import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
        <Slink to={'/cusine/Italian'}>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cusine/American'}>
            <FaHamburger></FaHamburger>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cusine/Thai'}>
            <GiNoodles></GiNoodles>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cusine/Japanese'}>
            <GiChopsticks></GiChopsticks>
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}
const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`;
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg,#494949,#313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    h4{
        color: #fff;
        font-size: 0.8rem;
    }
    svg{
        color: #fff;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right,#f27121,#e94057);
        svg{
            color: #fff;
        }
        h4{
            color: #fff;
        }
    }
`



export default Category