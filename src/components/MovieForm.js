import React from 'react';

const MovieForm = (props) => {
    return(
    <form id="add-movie" onSubmit={props.onSubmit}>
    <fieldset>
        <legend>Lägg till en film</legend>

        <label htmlFor="title">Titel:</label>
        <input type="text" id="title" className="form-control" onChange={props.onChangedTitle} value={props.titleValue}/>

        <label htmlFor="rating" onClick={props.onSubmit}>Betyg:</label>

        <select type="text" id="rating" className="form-control" onChange={props.onChangedGrade} value={props.gradeValue}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <input type="submit" className="btn btn-success mt-3" value="Spara film"/>

    </fieldset>
</form>
);
}

export default MovieForm;