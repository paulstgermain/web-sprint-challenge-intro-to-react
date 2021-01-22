import React from 'react';
import Character from '../components/Character'
import styled from 'styled-components';

export default function Characters(props){

    return (

        <CharContainer>
        {
            props.charData.map(char => {
                return <Character key={char.id} char={char} />
            })
        }
        </CharContainer>
    )
}

const CharContainer = styled.div`
    max-width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`