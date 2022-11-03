import React from 'react'
import { Container } from 'react-bootstrap';
import {AiOutlineRollback} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export const BackPageHeader = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  
    return (
    <div id="back-page-header">
        <Container>
           <AiOutlineRollback style={{cursor:"pointer"}} onClick={goBack} /> 
        </Container>
    </div>
  )
}
