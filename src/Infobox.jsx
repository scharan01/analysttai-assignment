import React from 'react';
import styled from 'styled-components';
import Descbox from './Descbox';
import { useState } from 'react';

const Outercont = styled.div`
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
    padding : 30px;
    border-radius : 10px;
    margin : 20px;
`;

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const Text = styled.p`
    font-size : 16px;
    margin : 5px;
`;

const Heading = styled.p`
    font-size : 12px;
    margin : 5px;
    font-weight : bold;
`;

const Cdetailcont = styled.div`
    display : flex;
    flex-direction : column;
    flex : 1;
`;

const Button = styled.button`
    border-radius : 20px;
    background-color : #EF5D46;
    padding : 10px;
    color : white;
    border : none;
    cursor : pointer;

    &:hover {
        background-color : red;
    }
`;

const Infobox = ({data}) => {

    const [view,setview] = useState("View Details");
    const [disp,setdisp] = useState("none");
    
    const handleClick = () =>{
        (view === "View Details") ? setview("Hide Details") : setview("View Details");
        (disp === "none") ? setdisp("block") : setdisp("none");
    }

  return (
    <Outercont>
        <Container>
            <Cdetailcont>
            <Text>{data.company.name}</Text>
            </Cdetailcont>
            <Cdetailcont>
                <Heading>CONTACT</Heading>
                <Text>{data.name}</Text>
            </Cdetailcont>
            <Cdetailcont>
                <Heading>CITY</Heading>
                <Text>{data.address.city}</Text>
            </Cdetailcont>
            <Cdetailcont>
                <Heading>STREET</Heading>
                <Text>{data.address.street}</Text>
            </Cdetailcont>
            <Button onClick={handleClick}>{view}</Button>       
        </Container>
        <Descbox data={data} disp={disp}/>
    </Outercont>
  )
}

export default Infobox