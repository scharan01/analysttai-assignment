import React from 'react'
import Infobox from './Infobox'
import styled from 'styled-components';
import axios from 'axios';
import { useEffect,useState } from 'react';
const Container = styled.div`
   
`;

const App = () => {

    const [data,setdata] = useState();

    useEffect(()=>{
        const getData = async () =>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setdata(res.data);
        }
        getData();
    },[])

  return (
    <Container>
        {data?.map((dat)=>
            <Infobox data={dat}/>
        )}
    </Container>
  )
}

export default App