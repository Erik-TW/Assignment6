import React from 'react';
import starImg from '../images/star.png'
import deleteImg from '../images/delete.png';
import classes from './Movie.module.css'

const Movie = (props) => {
    let stars = [];
    for(let i = 0; i < props.dataGrade; i++) {
        stars.push( <img key={i} src={starImg}alt="star"/>)
    }
    return (
        <li data-grade={props.dataGrade} data-title={props.dataTitle}>{props.dataTitle}
            {stars}
            <img src={deleteImg}alt="delete" className={classes.deleteMovie} onClick={props.onDeleteClicked}/>
        </li>
    );
}

export default Movie;