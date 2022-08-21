import React, {Component} from "react";
import Counter from "./counterComponent";

class Counters extends Component{

    render() {
        return (
            <div>
                <div>
                    <button
                        className="btn btn-primary btn-sm m-2"
                        onClick={this.props.onReset}>
                        Reset
                    </button>
                </div>
                <div>
                    {this.props.counters.map(counter => <Counter
                        key={counter.id}
                        counter={counter}
                        selected={true}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    /> )}
                </div>
            </div>
        );
    }
}
export default Counters;