import React, {Component} from "react";
import './App.css';
import Navbar from "./components/navbar";
import Counters from "./components/countersComponent";

class App extends Component{

    state = {
        counters : [
            {id: 1, value: 7},
            {id: 2, value: 5},
            {id: 3, value: 0},
            {id: 4, value: 3}
        ]
    };

    render (){
      return (
          <React.Fragment>
              <Navbar
                  counters={this.state.counters}
              />
              <main className="container">
                  <Counters
                      counters={this.state.counters}
                      onIncrement={this.handleIncrement}
                      onDelete={this.handleDelete}
                      onReset={this.handleReset}
                      onDecrement={this.handleDecrement}
                  />
              </main>
          </React.Fragment>
      );
  }


    handleDelete = (id) => {
        console.log("Even handling", id)
        const counters = this.state.counters.filter(counter => counter.id !== id)
        this.setState({counters})
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = this.state.counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value++
        this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        })
        this.setState({counters})
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters]
        const index = this.state.counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value--
        this.setState({counters})
    }
}

export default App;
