import React, {Component} from 'react';

class Like extends Component {
    render() {
        let heartClass = "fa fa-heart"
        if (!this.props.movie.like) heartClass += "-o";
        return (
            <div>
                <i className={heartClass} aria-hidden="true"
                   style={{cursor:"pointer"}}
                   onClick={() => this.props.onClick(this.props.movie)}
                />
            </div>
        );
    }
}

export default Like;