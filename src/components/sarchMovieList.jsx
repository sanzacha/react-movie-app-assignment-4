import React, {Component, Fragment} from "react";

let results = [];

export default class SerchMoiveList extends Component {
    addToFav(id) {
        results.push(this.props.movies[id]);
        localStorage.setItem('myfavmovies', JSON.stringify(results));
    }

    render() {
        return (
            <Fragment>
                {this.props.movies.map((movie, index) => (
                    <div className="col-sm-2" key={movie.id}>
                        <div className="card" style={this.styles}>
                            <img className="card-img-top" src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <button type="submit" onClick={this.addToFav.bind(this, index)} className="btn btn-primary mb-2">Add to Fav</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}