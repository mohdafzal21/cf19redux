import React from 'react'
import api from '../utils/api.js'
import axios from 'axios'
import Movie from './Movie'
import styled from 'styled-components'
import {getMovies} from './movieaction.js'
import {connect} from 'react-redux'
class MoviesList extends React.Component{
     
//     state = {
//         movies : []
//     }

//    async componentDidMount(){
//         const response = await axios.get('http://localhost:5000/movies')
//         this.setState({
//             movies : response.data
//         })
//     }

    componentDidMount(){
        this.props.getMovies()
    }

    render(){
        const {movies} = this.props
        return(
            <>
            <MovieGrid>
            {movies.map((movie)=> <Movie  movie={movie} key={movie._id}  />)}
            </MovieGrid>
            </>
        )
    }
}

const mapStateToProps = state=>({
    movies: state.moviesReducer.movies
})

export default connect(mapStateToProps, {getMovies})(MoviesList)

const MovieGrid= styled.div`
display : grid;
padding: 1rem;
grid-template-columns : repeat(3,1fr);
grid-row-gap: 1rem;
`