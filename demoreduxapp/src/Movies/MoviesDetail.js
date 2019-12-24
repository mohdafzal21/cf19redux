import React from 'react'
import apidata from '../utils/apidata.js'
import axios from 'axios'
import styled from 'styled-components'
import {Poster} from './Movie.js'
class MoviesDetail extends React.Component{
    
    state = {
        movie : {}
    }

  async  componentDidMount(){
        const response = await axios.get(`http://localhost:5000/movies/${this.props.match.params.id}`)
        this.setState({
            movie : response.data
        })
    }

    render(){
        const {movie} = this.state
        return(
            <>
    <MovieWrapper src={movie.banner} >
        <MovieInfo>
            <Poster src={movie.poster} />
            <div >
            <h3>{movie.title}</h3>
            <p>{movie.synopsis}</p>
            </div>
        </MovieInfo>
    </MovieWrapper>
            </>
        )
    }
   
}

export default MoviesDetail

const MovieWrapper = styled.div`
position : relative;
padding-top: 50vh;
background : url(${props=> props.src}) no-repeat;
background-size : cover;
`

const MovieInfo = styled.div`
background : white;
text-align: left;
padding : 2rem 10%;
display : flex;
>div {
    margin-left : 20px;
}
img {
    position : relative;
    top : -5rem;
}

`