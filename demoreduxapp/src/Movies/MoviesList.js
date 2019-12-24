import React from 'react'
import api from '../utils/api.js'
import axios from 'axios'
import Movie from './Movie'
import styled from 'styled-components'
class MoviesList extends React.Component{
     
    state = {
        movies : []
    }

   async componentDidMount(){
        const response = await axios.get('http://localhost:5000/movies')
        this.setState({
            movies : response.data
        })
    }

    render(){
        return(
            <>
            <MovieGrid>
            {this.state.movies.map((movie)=> <Movie  movie={movie} key={movie._id}  />)}
            </MovieGrid>
            </>
        )
    }
}

export default MoviesList

const MovieGrid= styled.div`
display : grid;
padding: 1rem;
grid-template-columns : repeat(3,1fr);
grid-row-gap: 1rem;
`