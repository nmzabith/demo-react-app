import React, {Component} from 'react';
import {getGenres} from '../services/fakeGenreService'

class Genres extends Component {

    render() {
        const {genres, selectedGenres, onGenresSelect} = this.props
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item"
                        onClick={() => onGenresSelect(null)}
                    >All Genres</li>
                    {genres.map(g =>
                        <li className={selectedGenres === g ? "list-group-item active" : "list-group-item"}
                            onClick={() => onGenresSelect(g)}
                    >{g.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default Genres;