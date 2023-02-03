import React from 'react'
import Infobox from './Infobox'
import styled from 'styled-components';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Container = styled.div`
   
`;

const Bottom = styled.div`
  margin-top : 20px;
  display : flex;
  justify-content : center;
  width : 100%;
`;

const Btns = styled.button`
    border : none;
    padding : 10px;
    background-color : ${(props)=> props.value == props.page ? "#EF5D46" : "white"};
    color : ${(props)=> props.value == props.page ? "white" : "black"};
    border-radius : 5px;
    margin : 3px;
    cursor : pointer;
    font-weight : bold;
`;


const App = () => {

    const [data,setdata] = useState();
    const [page,setpage] = useState(1);
    const [npages,setnpages] = useState();

    useEffect(()=>{
        const getData = async () =>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setdata(res.data);
            setnpages(Math.ceil((res.data.length)/3));
        }
        getData();
    },[])

    const handlePrev = () =>{
      (page>1)&& setpage(page-1)
    }

    const handleNext = () =>{
      (page<npages)&& setpage(page+1);
    }

    const handlenum = (e) =>{
        setpage(e.target.value);  
    }


  return (
    <Container>

        {data?.map((dat)=>{
        
           if(((dat.id) > (page-1)*3) && ((dat.id) <= (page)*3)) return <Infobox data={dat}/>
           else return <></>
            
        })}
        
        <Bottom>
          <Btns onClick={handlePrev} value={0}> prev </Btns>
        {Array(npages).fill(null).map((value, index) => (
            <Btns onClick={handlenum} value={index+1} page={page}> {index+1} </Btns>
        ))}
         <Btns onClick={handleNext} value={0}> next </Btns>
        </Bottom>
    </Container>
  )
}

export default App