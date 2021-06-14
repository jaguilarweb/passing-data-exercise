import React, { Component } from 'react';


class ListUsersAndMovies extends Component {
 	render(){
      return(
        <div>
        
          <p>{this.props.name} favorite movie is {this.props.movie} </p>
        </div>
      )
    }
}

export default ListUsersAndMovies;


//Jane Cruz's favorite movie is Planet Earth 1