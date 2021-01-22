// Write your Character component here
import React from 'react';
import styled from 'styled-components';


export default function Character(props){
    const {name, status, image} = props.char;

    return (
        <CharCard status={status}>
            <img src={image} alt={name}>
            </img>
            <h3>{name}</h3>
            <p>Status: <span status={status}>•</span> {status}</p>
        </CharCard>
    )
}


const CharCard = styled.div`
    width: 40%;
    background-color: rgba(200, 200, 200, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 15px;
    padding-top: 2%;
    box-shadow: 1px 1px 4px 2px greenyellow;
    transition: 0.5s;

    &:hover{
        box-shadow: none;
    }

    img{
        border-radius: 20px;
        box-shadow: 2px 2px 2px 2px rgba(33, 33, 33, 0.5);
        transition: 0.5s;

        &:hover{
            box-shadow: none;
        }
    }

    span{
        color: ${pr => pr.status === 'Alive' ? 'green' : 'red'};
        font-size: 24px;
    }
`