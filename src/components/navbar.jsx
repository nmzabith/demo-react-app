import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Counters {this.props.counters.filter(c => c.value !== 0).length}</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;