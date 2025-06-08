import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/actions'

import styles from './Counter.module.css'

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <h1 className={styles.counter}>Counter: {count}</h1>
            <button className={styles.button} onClick={() => dispatch(decrement())}>-</button>
            <button className={styles.button} onClick={() => dispatch(increment())} style={{ marginLeft: '10px' }}>+</button>
        </div>
    )
}

export default Counter
