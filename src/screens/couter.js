import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counter-reducer';
function CounterScreen() {
    const {counter} = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [count, setCount] = useState(counter);
    useEffect(() => {
        setCount(counter)
    }, [counter])
    return (
        <div>
            <h1>Counter Screen</h1>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default CounterScreen