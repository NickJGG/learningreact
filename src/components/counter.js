import React, { Component } from 'react';

const Counter = (props) => {
    return (
        <div className = "counter">
            <p>{ props.counter.label }</p>
            <div className = "counter-controls">
                <div onClick = { () => props.onDecrement(props.counter) } className = "counter-subtract">-</div>
                <p>{ props.counter.value }</p>
                <div onClick = { () => props.onIncrement(props.counter) } className = "counter-add">+</div>
            </div>
        </div>
    );
}

export default Counter;