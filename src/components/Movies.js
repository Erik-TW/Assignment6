import React from 'react';
import classes from './Movies.module.css'

const Movies = (props) => {
    return (
        <ul id={classes.movieList}>
        {props.children}
        </ul>
    );
}

export default Movies;