import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movies from './components/Movies'
import Movie from './components/Movie'
import MovieForm from './components/MovieForm'
import AlphabeticalSortButton from './components/AlphabeticalSortButton'
import GradeSortButton from './components/GradeSortButton';

class App extends Component {
  state = {
    movieList : [
      {title: "star wars", grade: 3},
      {title: "star wars 2", grade: 4}
    ],
    title : "",
    grade : 0
  }

  onDeleteButtonClick = (index) => {
    console.log("yeet")
    let updatedMovieList = [
      ...this.state.movieList
    ]
    updatedMovieList.splice(index, 1);
    this.setState({movieList : updatedMovieList});
  }

  onChangedTitle = (event) => {
    this.setState({title : event.target.value});
  }
  onChangedGrade = (event) => {
    this.setState({grade : parseInt(event.target.value)});
  }

  onSubmitMovieClick = (event) => {
    event.preventDefault();
    if(this.state.title === "" || this.state.grade < 1) {
      alert("missing title or grade");
    }
    else {
   let movie = {title: this.state.title, grade : this.state.grade};
   let updatedMovies = [
     ...this.state.movieList
   ]
   updatedMovies.push(movie);
   this.setState({movieList: updatedMovies, title: "", grade: 0});
  }
  }

  alphabeticSort = () => {
    let sortedArray = [
      ...this.state.movieList
    ];
    sortedArray.sort((a,b) => {
      if(a.title < b.title) {
        return -1
      }
      else if (a.title > b.title) {
        return 1;
      }
      return 0
    });
    this.setState({movieList: sortedArray});
  }

  gradeSort = () => {
    let sortedArray = [
      ...this.state.movieList
    ];
    sortedArray.sort((a,b) => {
      if(a.grade < b.grade) {
        return -1
      }
      else if (a.grade > b.grade) {
        return 1;
      }
      return 0
    });
    this.setState({movieList: sortedArray});
  }



  render() {
    let renderedMovieList = [];
    for(let i = 0; i < this.state.movieList.length; i++) {
      let currentItem = this.state.movieList[i];
        renderedMovieList.push(<Movie dataTitle={currentItem.title} dataGrade={currentItem.grade} key={i} onDeleteClicked={() => this.onDeleteButtonClick(i)}/>)
    }
    return (
      <div className="App container">
        <h1>Min filmlista</h1>
        <MovieForm 
        onSubmit={this.onSubmitMovieClick} 
        onChangedTitle={this.onChangedTitle} 
        onChangedGrade={this.onChangedGrade}
        titleValue={this.state.title}
        gradeValue={this.state.grade}
        />
        <Movies>
        {renderedMovieList}
        </Movies>
        <AlphabeticalSortButton onClick={this.alphabeticSort}/>
        <GradeSortButton onClick={this.gradeSort}/>
      </div>
    );
  }
}

export default App;
