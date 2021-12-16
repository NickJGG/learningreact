import React, { Component } from 'react';

import Counter from './counter';

class CounterList extends Component{
    state = {
        counters: [
            { label: 'Apples', value: 0 },
            { label: 'Bananas', value: 0 },
            { label: 'Cantaloupes', value: 0 },
            { label: 'Dates', value: 0 }
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counter.value++;
        counters[index] = { ...counter };        

        this.setState({ counters });
    }
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counter.value--;
        counters[index] = { ...counter };        

        this.setState({ counters });
    }

    render(){
        return (
            <div className = "counter-list">
                { this.state.counters.map((counter, index) => (
                    <Counter 
                        key = { index } 
                        counter = { counter }
                        onIncrement = { this.handleIncrement }
                        onDecrement = { this.handleDecrement }
                    />
                )) }
            </div>
        )
    }
}

export default CounterList