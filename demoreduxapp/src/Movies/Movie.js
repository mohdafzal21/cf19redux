import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Movie = (props)=>{
    return(
        <>
        <Link to={`${props.movie._id}`}>
        <Poster src={props.movie.poster} />
        </Link>
        </>
    )
}

export default Movie

export const Poster = styled.img`
width : 200px;
height:  250px;
box-shadow : 0 0 35px black;
`