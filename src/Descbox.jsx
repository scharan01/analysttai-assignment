import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin : 40px 20px 10px 20px;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.16);
    border-radius : 10px;
    padding : 25px;
    display : ${(props)=>props.disp};
`;

const Heading = styled.p`
    font-size : 14px;
    font-weight : bold;
    margin-bottom : 10px;
`;

const Text = styled.p`
    font-size : 10px;
    margin-bottom : 10px;
`;

const Detailcont = styled.div`
    display : flex;
    flex-direction : column;
    min-width : 50%;
    margin : 5px 0px;
    
`;

const Detailbox = styled.div`
    display : flex;
    flex-wrap : wrap;
    width : 70%;
`;

const Descbox = ({data,disp}) => {
  return (
    <Container disp={disp}>
        <Detailcont>
            <Heading>Description</Heading>
            <Text>{data.company.bs} </Text>
        </Detailcont>
        <Detailbox>
            <Detailcont>
                <Heading>Contact Person</Heading>
                <Text>{data.name}</Text>
            </Detailcont>
            <Detailcont>
                <Heading>Address</Heading>
                <Text>{data.address.suite} {data.address.street}  {data.address.city} {data.address.zipcode}</Text>
            </Detailcont>
            <Detailcont>
                <Heading>Website</Heading>
                <Text>{data.website}</Text>
            </Detailcont>
            <Detailcont>
                <Heading>City</Heading>
                <Text>{data.address.city} </Text>
            </Detailcont>
            <Detailcont>
                <Heading>Emails</Heading>
                <Text>{data.email} </Text>
            </Detailcont>
            <Detailcont>
                <Heading>Street</Heading>
                <Text>{data.address.street}</Text>
            </Detailcont>
            <Detailcont>
                <Heading>Phones</Heading>
                <Text>{data.phone}</Text>
            </Detailcont>
            <Detailcont>
                <Heading>Zipcode</Heading>
                <Text>{data.address.zipcode} </Text>
            </Detailcont>
        </Detailbox>
    </Container>
  )
}

export default Descbox