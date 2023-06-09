import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingsSlice';



function Greeting() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);
    
    const greetingData = useSelector((state) => state.greeting.data);
    return (
         <>
        <h2> WEDNESDAY</h2>
    <h1>{greetingData.content}</h1>
    </>
);
  }
  
  export default Greeting;