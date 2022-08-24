import React, {Component} from "react";
import {getMovies} from '../services/fakeMovieService'
import Like from "./likeComponent";
import Pagination from "./paginationComponent";
import {paginateUtil} from "../services/paginateUtil";
import Genres from "./genersComponent";
import {getGenres} from "../services/fakeGenreService";

class Movie extends Component {
    state = {
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1

    }

    componentDidMount() {
        this.setState({
            movies : getMovies(),
            genres : getGenres()
        })
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    handleGenresSelect = (genres) => {
        this.setState({selectedGenres: genres, currentPage : 1})
    }

    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-2">
                        <Genres
                            genres={this.state.genres}
                            onGenresSelect={this.handleGenresSelect}
                            selectedGenres={this.state.selectedGenres}
                        />
                    </div>
                    <div className="col">
                        {this.state.movies.length !== 0 && this.renderTable()}
                    </div>
                </div>
            </main>
        );
    }

    numberOfMoviesInDB(){
        return this.state.movies.length === 0 ? <h3>No Movies in the Database</h3> :
            <h3>Number of movies in the database is {this.state.movies.length}</h3>
    }

    renderTable(){
        const {movies : movieAll, pageSize, currentPage, selectedGenres} = this.state
        const selectedGenresMovie = selectedGenres ?
            movieAll.filter(m => m.genre._id === selectedGenres._id) : movieAll;
        let movies = paginateUtil(selectedGenresMovie, pageSize, currentPage)
        return (
            <div>
                {selectedGenresMovie.length === 0 ? <h3>No Movies in the Database</h3> :
                    <h3>Number of movies in the database is {selectedGenresMovie.length}</h3>}
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => {
                        return (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        onClick={this.handleLike}
                                        movie={movie}/>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={ () => this.deleteMovie(movie._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination
                    moviesCount={selectedGenresMovie.length}
                    pageSize = {pageSize}
                    currentPage ={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }

    deleteMovie(movieId){
        this.setState({
            movies : this.state.movies.filter(m => m._id !== movieId)
        })
    }

    handleLike = (movieId) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movieId);
        movies[index] = {...movies[index]}
        movies[index].like = !movies[index].like;
        this.setState({movies})
    }
}

export default Movie;