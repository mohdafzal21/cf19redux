import axios from 'axios'

//action creator = it will return the action type 

export  function getMovies(){
 return async function(dispatch){
    const response = await axios.get('http://localhost:5000/movies')
    return dispatch({
        type :'GET_MOVIES',
        payload : response.data
    })

 }
}