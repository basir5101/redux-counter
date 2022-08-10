import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

export default function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div>

            <h2>Counter App</h2>
            <h3>Count: {count} </h3>
            <button className='success' onClick={handleIncrement}>Increment</button>
            <button className='success' onClick={handleDecrement}>Decrement</button>
            <button className='error' onClick={handleReset}>Reset</button>


            <br />
            <br />
            <br />
            See full tutorial here: <a href="https://www.youtube.com/watch?v=paY1O3oD3gg&list=PLgH5QX0i9K3pe7Z7ATcyLdUW3grE4Vfld&index=10">react-redux | complete counter react app By Anisul Islam Sir </a>
        </div>
    )
}
