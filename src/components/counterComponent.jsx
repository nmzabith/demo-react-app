import React, {Component} from "react";

class Counter extends Component {

    state = {
        count: this.props.counter.value,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag-1', 'tag-2', 'tag-3']
    }

    styles = {
        fontsize: 10,
        fontWeight: 'bold',
        color: 'red'
    }

    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <h2 className={this.classMethod()}>{this.formatCount()}</h2>
                </div>
                <div className="col">
                    <button
                        onClick={() => this.increaseCount(this.props.counter)}
                        className="btn btn-secondary btn-sm ml-2">
                        +
                    </button>
                    <button
                        onClick={() => this.decreaseCount(this.props.counter)}
                        disabled={this.props.counter.value === 0}
                        className="btn btn-secondary btn-sm m-2">
                        -
                    </button>
                    <button className="btn btn-danger btn-sm"
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                    >
                        X
                    </button>
                </div>
            </div>
        );
    }

    classMethod() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? <h5>Zero</h5> : value
    }

    renderList() {
        if (this.state.tags.length === 0) return <h1>No Content in the List</h1>
        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        );
    }

    increaseCount = (counter) => {
        this.props.onIncrement(counter);
    }

    decreaseCount = (counter) => {
        this.props.onDecrement(counter)
    }
}


export default Counter;